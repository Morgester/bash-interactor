import { WebSocketServer } from "ws";

const webSocketServer = new WebSocketServer({ port: process.env.WS_PORT });

console.info("WebSocketServer listening on %s", process.env.WS_PORT);

webSocketServer.on("connection", function (webSocket) {
    webSocket.on("message", function (message) {
        console.log("WebSocketServer received: %s", message)
    });

    setInterval(() =>
        webSocket.send(`${new Date()}`),
        1000
    );
});