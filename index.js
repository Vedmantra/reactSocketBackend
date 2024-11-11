const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const io = new Server(app.listen(4000), {
    // "origin" here will be the front url
    cors: { origin: process.env.CLIENT_URL, methods: ["GET", "POST"] }
});

io.on("connection", (socket) => {
    socket.on("send_message", (data) => {
        io.emit("receive_message", data);
    });
});
