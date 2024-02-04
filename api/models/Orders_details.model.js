"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_config_1 = __importDefault(require("./sequelize.config"));
class Orders_Details extends sequelize_1.Model {
}
Orders_Details.init({
    detail_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    order_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    }
}, {
    sequelize: sequelize_config_1.default,
    tableName: 'order_details'
});
