"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users_model_1 = __importDefault(require("../models/Users.model"));
const users_services_1 = __importDefault(require("../services/users.services"));
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get('/', async (req, res) => {
    try {
        res
            .status(200)
            .json({ message: 'SImulando data' });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Internal server error - 500' });
    }
});
router.get('/all', async (req, res) => {
    try {
        const user = await Users_model_1.default.findAll();
        res
            .status(200)
            .json({ user });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: `Internal server error - 500: ${error}` });
    }
});
router.post('/', async (req, res) => {
    try {
        const { username, email, password, name, lastName, direccion } = req.body;
        const newUser = { username, email, password, name, lastName, direccion };
        let user_service = new users_services_1.default(newUser);
        const newUser_Created = user_service.createAUser();
        newUser_Created
            .then((resolve) => {
            res
                .status(201)
                .json({ resolve });
        })
            .catch((error) => {
            res
                .status(400)
                .json(error);
        });
    }
    catch (error) {
        return res
            .status(400)
            .json({ error: error });
    }
});
exports.default = router;
