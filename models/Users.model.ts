import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize.config';
class Users extends Model {
    public user_id!:number;
    public username!:string;
    public email!:string;
    public password!:string;
    public name!:string;
    public lastName!:string;
    public direccion!:string;
    public createdAt!: Date;
    public updatedAt!: Date;

}


Users.init({
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:true
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
        direccion:{
            type:DataTypes.STRING,
            allowNull:true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }

},
{
    sequelize,
    tableName:'user'
}

);

export default Users;