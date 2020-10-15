ws_manager = new WebSocket("ws://" + websocket_address + ":8765/");
exercise = "obstacle_avoidance"

ws_manager.onopen = function(event){
    ws_manager.send(JSON.stringify({"command": "exit", "exercise": ""}));
    ws_manager.send(JSON.stringify({"command": "open", "exercise": exercise}));
}

ws_manager.onmessage = function(event){
    if(event.data == "OPENED"){
        declare_code();
        declare_gui();
    }
}