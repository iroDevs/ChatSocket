const cors = require('cors');
const socketUtils = require('./socketUtils/socket')
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin:'*',
        methods: ['GET','POST']
    }
})

socketUtils.connection(io)

const port = 3333;

app.use(cors());


server.listen(port, ()=> {
    console.log("server listening on port ",port);
})

app.get('/', ( req, res)=> {
    res.send("<h1>ola mundo</h1>");
})