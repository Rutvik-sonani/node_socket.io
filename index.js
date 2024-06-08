const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);


io.on('connection', (socket) => {
    // console.log('a user connected');
    socket.on("user-msg", (message)=>{
        io.emit("message", message);
    });
  });

app.use(express.static(path.resolve("./public")));  

app.get('/', (req, res) => {
    res.sendFile("./public/index.html");
  });  

server.listen(3000, () => {
    console.log('listening on *:3000');
  });
  
  