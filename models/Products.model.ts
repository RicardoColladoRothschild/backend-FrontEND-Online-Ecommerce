import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize.config';

class Products extends Model{
    public products_id!:number;
    public name!:string;
    public description!:string;
    public price!:number;
    public img_url!:string;


}


Products.init({
    products_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
     },
     name:{
        type:DataTypes.STRING,
        allowNull:false
     },
     description:{
        type:DataTypes.STRING,
        allowNull:true,
     },
     price:{
        type:DataTypes.INTEGER,
        allowNull:false,
     },
     img_url:{
        type:DataTypes.STRING,
        allowNull:true
     }
   
    },
    {
        sequelize,
        tableName:'products'
    }
    
    );

