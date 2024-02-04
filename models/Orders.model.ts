import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize.config';

class Orders extends Model{
    public order_id!:number;
    public user_id!:string;
    public date!:string;
    public state!:string;
}

Orders.init({
    order_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
        },
        user_id:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        date:{
            type:DataTypes.STRING,
            allowNull:false
        },
        state:{
            type:DataTypes.STRING,
            allowNull:false
        }   
    
    },
    {
        sequelize,
        tableName:'orders'
    }

);