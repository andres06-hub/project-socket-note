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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Impotamos app
const app_1 = __importDefault(require("./app"));
//Importamos http ya que es necesario para Sockets
const http_1 = __importDefault(require("http"));
//Import DB 
const connected_1 = require("./config/connection/connected");
//Conectar DB
// connectDB();
////////////////////////
//Sockets
const io_1 = require("./sockets/io");
// import { attachs } from './sockets';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //Creamos el server 
    const server = http_1.default.createServer(app_1.default);
    //PORT
    const PORT = process.env.PORT || 3000;
    //Usamos los socket.attach
    // attachs(server);
    io_1.sio.attach(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
            credentials: true,
        }
    });
    //iniciamos server
    server.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    });
});
// main()
//     .then(() => console.log('Startup Server'))
//     .catch((err) => console.error(`ERROR:Initilizing Server = ${err}`))
//Creamos conexion
Promise.all(
//se espera que conecte
[(0, connected_1.connectDB)()]).then(() => {
    //Iniciamos el server
    main();
}).catch((err) => {
    console.error(`ERROR:Initilizing Server = ${err}`);
});
