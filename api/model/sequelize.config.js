const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./ecommerce_data_base.db',
    logging:console.log
});

module.exports = sequelize;