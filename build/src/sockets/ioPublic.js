"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatPublicFuction = void 0;
const chatPublicFuction = (sio) => {
    const chatPublic = sio.of('/chat')
        .on('connection', (socket) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('User connected');
        const data = {
            socketID: socket.id,
        };
        console.table(data);
        //Socket -> Es con que obtenemos los eventos del Cliente o datos, EJ: 'chat:menssage' (Data)=>{}
        //Obtenemos los datos de chat:message
        socket.on('disconnect', () => __awaiter(void 0, void 0, void 0, function* () {
            console.log('User disconnect: ', socket.id);
        }));
        // Enviamos datos 
        // socket.on('chat:on_message', (data) => {
        //     console.log();
        // });
        // Obtenemos datos
        socket.on('chat:send_menssage', (data) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('iD->', socket.id, ' Dato: ', data);
            data = Object.assign(Object.assign({}, data), { id: socket.id });
            // menssages.push(data);
            //Emitimos el mensaje obtenido
            chatPublic.emit('chat:on_menssage', data);
            // console.table(menssages);
        }));
    }));
};
exports.chatPublicFuction = chatPublicFuction;
