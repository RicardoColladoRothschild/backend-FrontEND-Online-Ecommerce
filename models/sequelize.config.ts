import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./ecommerce_data_base.db',
    logging:console.log
});

export default sequelize;