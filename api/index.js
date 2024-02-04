"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_config_1 = __importDefault(require("./models/sequelize.config"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, express_1.default)();
const PORT = process.env.PORT || 3031;
server.use(express_1.default.json());
server.get('/api', (request, response) => {
    response.status(200).json({ message: 'Probando index' });
});
async function startServer() {
    await sequelize_config_1.default.sync();
    server.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}/`);
    });
}
startServer();
(0, routes_1.default)(server);
