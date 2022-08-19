"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const chat_routes_1 = __importDefault(require("./chat.routes"));
const chatPrivate_routes_1 = __importDefault(require("./chatPrivate.routes"));
const home_routes_1 = __importDefault(require("./home.routes"));
const _routes = [
    [home_routes_1.default],
    [chat_routes_1.default],
    [chatPrivate_routes_1.default],
];
//Exportamos cada ruta guardada _routes
const router = (app) => {
    _routes.forEach((route) => {
        //Deconstruimos
        const [url] = route;
        //Usamos la url-ruta
        app.use(url);
    });
};
exports.router = router;
