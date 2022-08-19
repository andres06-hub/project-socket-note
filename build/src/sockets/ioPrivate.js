"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatPrivateFuction = void 0;
const chatPrivateFuction = (sio) => {
    //Asiganar nombre a que ruta esta dirigido
    const chatPrivate = sio.of('/chatPrivate')
        //Conexion 
        .on('connection', (socket) => {
        console.log('User connected privated');
        //Desconexion
        socket.on('disconnect', () => {
            console.log('User Disconnect: ', socket.id);
        });
    });
};
exports.chatPrivateFuction = chatPrivateFuction;
// export {sio};
