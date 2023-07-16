const http = require('http');
const cors = require('cors');

const express = require('express');
const app = express();
const socketUtils = require('./socketUtils/socket')

const server = http.createServer(app)
const io = socketUtils.sio(server);
socketUtils.connection(io);

app.use(cors());

const port = 3333

server.listen(port, ()=> {
    console.log("running on port " + port);
})