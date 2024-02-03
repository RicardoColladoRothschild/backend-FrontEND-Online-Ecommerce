import IUser from "../interfaces/IUser";
import Users from '../models/Users.model';
class UsersServices{
    private _user:IUser;
    constructor(user:IUser){
        this._user = user;
    }

    async createAUser(){
        const isEmailDuplicated = await Users.findOne({
            where:{email:this._user.email}
        });

        const isUserNameDuplicated = await Users.findOne({
            where:{username:this._user.username}
        });

            if(isEmailDuplicated || isUserNameDuplicated){
                throw new Error('There has been an internal Server Error, element email or username is duplicated');
            }else{

                    const newUser = Users.create({
                        username:this._user.username,
                        email:this._user.email,
                        password:this._user.password,
                        name:this._user.name,
                        lastName:this._user.lastName,
                        direccion:this._user.direccion
                    });

                return `User created: ${newUser}`;
            }
            
    }
}


export default UsersServices;