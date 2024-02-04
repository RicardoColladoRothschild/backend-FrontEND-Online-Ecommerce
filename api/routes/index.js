"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./users.routes"));
function routeApi(app) {
    const router = express_1.default.Router();
    app.use('/api/v1', router);
    router.use('/user', users_routes_1.default);
}
exports.default = routeApi;
