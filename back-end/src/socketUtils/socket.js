const socketIO = require("socket.io")

exports.sio = ( server ) => {
    return socketIO(server, {
        transports: ["websocket"],
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

        socket.on("set_username", (value) => {
            
            socket.data.username = value
            console.log("usuario setado", value);
        })

        socket.on("joinSpecialRoom", ()=> {
            if (socket.data.username === "urso") {
                socket.join("specialRoom");
            }
        })

        socket.on("joinDefaultRoom", ()=> {
            socket.join("defaultRoom");
        })

        socket.on('message', text => {
            if(socket.data.username === "urso"){
                io.to("specialRoom").emit('receive_message', {
                    text,
                    authorId: socket.id,
                    author: socket.data.username
                })
            }else {
                io.to("defaultRoom").emit('receive_message', {
                    text,
                    authorId: socket.id,
                    author: socket.data.username
                })
            }
        })
    })
}