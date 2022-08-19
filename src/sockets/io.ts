//Importamos sockets.io
import { Namespace, Server, Socket } from 'socket.io';
//Interface
import {ClientToServerEvents,InterServerEvents,ServerToClientEvents,SocketData} from '../interface/sockets';
import { chatPrivateFuction } from './ioPrivate';
import { chatPublicFuction } from './ioPublic';


//Creamos los sockets
const createSocketIoServer = () : Server => {
    const io:Server = new Server<ClientToServerEvents,InterServerEvents,ServerToClientEvents,SocketData>();
    // console.log('io:: ',io._parser);
    return io;
};
//Create server
const sio:Server = createSocketIoServer();

let menssages:Array<string> = [];

chatPublicFuction(sio)
chatPrivateFuction(sio);


export {sio};