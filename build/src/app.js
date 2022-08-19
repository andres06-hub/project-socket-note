"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = require("./routes/index.routes");
const morgan_1 = __importDefault(require("morgan"));
//Create app
const app = (0, express_1.default)();
//---->middlewares<----
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//---->Routes<----
(0, index_routes_1.router)(app);
//Exportamos app
exports.default = app;
