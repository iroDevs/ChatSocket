/* eslint-disable react-hooks/rules-of-hooks */

import {io} from 'socket.io-client'


function connectedIO(){
    console.log("fazendo conexao com io");
    const socket = io("ws://localhost:3333")
    socket.on("connection", ()=> {
    console.log("conectado ao IO");
    })
}

export default {
    connectedIO
}