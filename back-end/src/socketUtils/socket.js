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
        console.log("usuario conectado")

        socket.on("disconnect", () => {
            console.log(`socket ${socket.id} disconnected`);
        })

        socket.on("teste", (info)=> {
            console.log("evento ativado",info);
        })
    })
}