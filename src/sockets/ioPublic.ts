//Import Sockets
import { Namespace,Server,Socket } from 'socket.io';

export const chatPublicFuction = (sio:Server) => {
    const chatPublic:Namespace = sio.of('/chat')
    .on('connection', async (socket:Socket) => {
        console.log('User connected');
        const data = {
            socketID: socket.id,
        }
        console.table(data);
        //Socket -> Es con que obtenemos los eventos del Cliente o datos, EJ: 'chat:menssage' (Data)=>{}
            //Obtenemos los datos de chat:message
        socket.on('disconnect', async () => {
            console.log('User disconnect: ',socket.id);
        });
        // Enviamos datos 
        // socket.on('chat:on_message', (data) => {
        //     console.log();
        // });
        // Obtenemos datos
        socket.on('chat:send_menssage', async (data) => {
            console.log('iD->',socket.id,' Dato: ',data);
            data = {...data,id:socket.id}
            // menssages.push(data);
            //Emitimos el mensaje obtenido
            chatPublic.emit('chat:on_menssage', data)
            // console.table(menssages);
        });
    });
};
