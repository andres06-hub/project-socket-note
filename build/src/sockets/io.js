"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sio = void 0;
//Importamos sockets.io
const socket_io_1 = require("socket.io");
const ioPrivate_1 = require("./ioPrivate");
const ioPublic_1 = require("./ioPublic");
//Creamos los sockets
const createSocketIoServer = () => {
    const io = new socket_io_1.Server();
    // console.log('io:: ',io._parser);
    return io;
};
//Create server
const sio = createSocketIoServer();
exports.sio = sio;
let menssages = [];
(0, ioPrivate_1.chatPrivateFuction)(sio);
(0, ioPublic_1.chatPublicFuction)(sio);
