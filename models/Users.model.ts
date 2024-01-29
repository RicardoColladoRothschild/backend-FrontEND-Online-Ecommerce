import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize.config';
class Users extends Model {
    public user_id!:number;
    public username!:string;
    public email!:string;
    public password!:string;
    public name!:string;
    public lastName!:string;
    public address!:string;

}


Users.init({
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull:true
        }

},
{
    sequelize,
    tableName:'users'
}

);