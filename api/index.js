"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_config_1 = __importDefault(require("./models/sequelize.config"));
const index_1 = __importDefault(require("./routes/index"));
const server = (0, express_1.default)();
const PORT = process.env.PORT || 3031;
server.use(express_1.default.json());
server.get('/api', (request, response) => {
    response.send('Esta es una ruta normal');
});
server.get('/api/rutatesting', (request, response) => {
    response.send('Hola, estamos probando rooting');
});
async function startServer() {
    await sequelize_config_1.default.sync();
}
server.listen(PORT);
startServer();
(0, index_1.default)(server);
