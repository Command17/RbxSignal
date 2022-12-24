"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[883],{49164:n=>{n.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new Signal\\n\\n```lua\\nlocal signal = Signal.new()\\n```","params":[],"returns":[],"function_type":"static","source":{"line":78,"path":"src/init.lua"}},{"name":"Is","desc":"Checks if the Obj is a Signal\\n\\n\\n```lua\\nSignal.Is(RandomSignal)\\n```","params":[{"name":"obj","desc":"","lua_type":"{any}"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":93,"path":"src/init.lua"}},{"name":"Connect","desc":"Connects a function to the signal\\n\\n\\n\\n```lua\\nlocal Connection = signal:Connect(function(...: any)\\n    print(...)\\nend)\\n```","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ...any"}],"returns":[{"desc":"","lua_type":"Connection Object"}],"function_type":"method","source":{"line":110,"path":"src/init.lua"}},{"name":"ConnectParallel","desc":"Connects a function to the signal in parallel\\n\\n\\n\\n```lua\\nlocal Connection = signal:ConnectParallel(function(...: any)\\n    print(...)\\nend)\\n```","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ...any"}],"returns":[{"desc":"","lua_type":"Connection Object"}],"function_type":"method","source":{"line":133,"path":"src/init.lua"}},{"name":"Once","desc":"Connects a function to the signal once\\n\\n\\n\\n```lua\\nlocal Connection = signal:Once(function(...: any)\\n    print(...)\\nend)\\n```","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ...any"}],"returns":[{"desc":"","lua_type":"Connection Object"}],"function_type":"method","source":{"line":156,"path":"src/init.lua"}},{"name":"Wait","desc":"Waits until the signal is fired\\n\\n\\n```lua\\nlocal arg1 = signal:Wait()\\n```","params":[],"returns":[{"desc":"","lua_type":"... any"}],"function_type":"method","source":{"line":177,"path":"src/init.lua"}},{"name":"Fire","desc":"Fires the signal\\n\\n\\n```lua\\nsignal:Fire(\\"Hello\\", \\"World!\\")\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":196,"path":"src/init.lua"}},{"name":"FireParallel","desc":"Fires the signal in parallel\\n\\n\\n```lua\\nsignal:FireParallel(\\"Hello\\", \\"World!\\")\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":215,"path":"src/init.lua"}},{"name":"DisconnectAll","desc":"Disconnects all listeners\\n\\n```lua\\nsignal:DisconnectAll()\\n```","params":[],"returns":[],"function_type":"method","source":{"line":230,"path":"src/init.lua"}},{"name":"Destroy","desc":"Disconnects all listeners\\n\\n```lua\\nsignal:Destroy()\\n```","params":[],"returns":[],"function_type":"method","source":{"line":248,"path":"src/init.lua"}}],"properties":[],"types":[],"name":"Signal","desc":"Signal by baum (@baum1000000)\\n\\nBasicly a RBXScriptConnection but for custom use.","source":{"line":68,"path":"src/init.lua"}}')}}]);