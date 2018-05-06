var socket = io();

socket.on('connect', function(socket) {
    console.log("connected to server");
});

socket.emit("createMessage", {
    from: "NoOne@gamil.com",
    tex: "You are here"
})

socket.on('newMessage', function(email) {
    console.log("Got new Message");
    console.log('newEmail', email);
});

socket.on('disconnect', function(socket) {
    console.log("disconnected from server");
});