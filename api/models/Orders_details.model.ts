import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize.config';

class Orders_Details extends Model{
    public detail_id!:number;
    public order_id!:number;
    public product_id!:number;
    public subtotal!:number;

}

Orders_Details.init({
    detail_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    order_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subtotal:{
        type:DataTypes.REAL,
        allowNull:false
    }
},
{
    sequelize,
    tableName:'order_details'
}
);