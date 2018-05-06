const path = require('path');
const http = require('http');
const express = require('express');
const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');
const scoketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = scoketIO(server);

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('createMessage', function(message) {
        console.log("Got the new message from client", message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text
        });
    });

    socket.emit('newMessage', {
        from: "Someone@gamil.com",
        text: "Hi There",
        createdAt: "2018=05-05"
    });

});
app.use(express.static(publicPath));
server.listen(port, () => {
    console.log("Server Running");
});