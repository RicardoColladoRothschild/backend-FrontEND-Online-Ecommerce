"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './ecommerce_data_base.db',
    logging: console.log
});
exports.default = sequelize;
