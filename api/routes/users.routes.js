
const express = require("express");
const Users = require("../models/Users.model");
const userServices = require("../services/users.services");
const router = express.Router();
router.use(express.json());
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
        const user = await Users.findAll();
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
        let user_service = new userServices(newUser);
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
module.exports = router;
