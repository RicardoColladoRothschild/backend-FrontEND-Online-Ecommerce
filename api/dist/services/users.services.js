"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_model_1 = __importDefault(require("../models/Users.model"));
class UsersServices {
    constructor(user) {
        this._user = user;
    }
    async createAUser() {
        const isEmailDuplicated = await Users_model_1.default.findOne({
            where: { email: this._user.email }
        });
        const isUserNameDuplicated = await Users_model_1.default.findOne({
            where: { username: this._user.username }
        });
        return new Promise((resolve, reject) => {
            if (isEmailDuplicated || isUserNameDuplicated) {
                reject('user was not created. Already exist.');
            }
            else {
                const newUser = Users_model_1.default.create({
                    username: this._user.username,
                    email: this._user.email,
                    password: this._user.password,
                    name: this._user.name,
                    lastName: this._user.lastName,
                    direccion: this._user.direccion
                });
                resolve(newUser);
            }
        });
    }
}
exports.default = UsersServices;
