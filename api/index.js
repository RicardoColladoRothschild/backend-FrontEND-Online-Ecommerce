"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3031;
app.use(express_1.default.json());
app.get('/api', (request, response) => {
    response.send('Esta es una ruta normal');
});
app.get('/api/rutatesting', (request, response) => {
    response.send('Hola, estamos probando rooting');
});
/*async function startserver() {
        await sequelize.sync();
        
    }*/
(0, index_1.default)(app);
app.listen(PORT);
//startserver();
