const socketIO = require("socket.io")

exports.sio = ( server ) => {
    return socketIO(server, {
        transports: ["polling"],
        cors: {
            origin: "*",
          }
    })
}

exports.connection = (io) => {
    io.on("connection", (socket) => {
        console.log("usuario conectado", socket.id)

        socket.emit("sendId",{id: socket.id})

        socket.on("disconnect", () => {
            console.log(`socket ${socket.id} disconnected`);
        })

        socket.on("set_userName", (value) => {
            
            socket.data.username = value
            console.log("usuario setado", value);
        })

        socket.on("teste", (info)=> {
            console.log("evento ativado",info);
        })

        socket.on('message', text => {

            console.log("message RECEBIDA", text);
            io.emit('receive_message', {
                text,
                authorId: socket.id,
                author: socket.data.username
            })
        })
    })
}