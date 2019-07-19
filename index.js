const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



io.on("connection", client => {
    client.on("sendMessage", message => {
        io.emit("newMessage", message)
    })


})



const PORT = 5000 | process.env.PORT;
server.listen(PORT);