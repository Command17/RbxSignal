--[[
Signal by baum (@baum1000000)

Basicly a RBXScriptConnection but for custom use.
]]--

-- Connection Class --

local connection = {}
connection.__index = connection

export type callback = (...any) -> ...any

function connection.new(callback, signal)
    return setmetatable({
        Connected = true,
        _callback = callback,
        _signal = signal
    }, connection)
end

function connection:Disconnect()
    self.Connected = false
end

-- Make the connection class strict

setmetatable(connection, {
    __index = function(_, key)
        error(string.format("Attempt to get connection::%s (not a valid member)", tostring(key)))
    end,

    __newIndex = function(_, key)
        error(string.format("Attempt to set connection::%s (not a valid member)", tostring(key)))
    end
})

-- Signal Class --

local signal = {}
signal.__index = signal

function signal.new() -- Creates a new Signal
    return setmetatable({
        _listeners = {},
    }, signal)
end

function signal.Is(obj: {any})
    return getmetatable(obj) == signal
end

function signal:Connect(callback: callback) -- Connects a function to the Signal
    assert(typeof(callback) == "function", string.format("Invalid argument #1 (function expected got %s)", typeof(callback)))

    local _connection = connection.new(callback, self)

    table.insert(self._listeners, _connection)

    return _connection
end

function signal:ConnectParallel(callback: callback) -- Connects a function to the Signal in Parallel
    assert(typeof(callback) == "function", string.format("Invalid argument #1 (function expected got %s)", typeof(callback)))

    task.desynchronize()

    self:Connect(callback)

    task.synchronize()
end

function signal:Once(callback: callback)
    local _connection = nil

    _connection = self:Connect(function(...)
        _connection:Disconnect()

        callback(...)
    end)

    return _connection
end

function signal:Wait()
    local waitCoroutine = coroutine.running()

    self:Once(function(...)
        task.spawn(waitCoroutine, ...)
    end)

    return coroutine.yield()
end

function signal:Fire(...: any) -- Call the callbacks from every listener
    for i, v in ipairs(self._listeners) do
        if v.Connected then
            v._callback(...)
        else
            table.remove(self._listeners, i)
        end
    end
end

function signal:FireParallel(...: any) -- Call the callbacks from every listener in Parallel
    task.desynchronize()

    self:Fire(...)

    task.synchronize()
end

function signal:DisconnectAll()
    for i, v in ipairs(self._listeners) do
        v:Disconnect()
    end

    table.clear(self._listeners)
end

signal.Destroy = signal.DisconnectAll

setmetatable(signal, {
    __index = function(_, key)
        error(string.format("Attempt to get signal::%s (not a valid member)", tostring(key)))
    end,

    __newIndex = function(_, key)
        error(string.format("Attempt to set signal::%s (not a valid member)", tostring(key)))
    end
})

return signal