import express from "express";
import ejs from "ejs";

const httpServer = new express();

httpServer.engine("html", ejs.renderFile);
httpServer.set("views", "./src");

httpServer.get("/", function (req, res) {
    res.render("client.html", {
        wsDomain: process.env.WS_DOMAIN,
        wsPort: process.env.WS_PORT
    });
});

httpServer.listen(process.env.HTTP_PORT, function () {
    console.info("HttpServer listening on %s", process.env.HTTP_PORT);
});