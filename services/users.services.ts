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
            return new Promise((resolve, reject)=>{

                
                if(isEmailDuplicated || isUserNameDuplicated){
                    reject('user was not created. Already exist.');
                }else{
    
                        const newUser = Users.create({
                            username:this._user.username,
                            email:this._user.email,
                            password:this._user.password,
                            name:this._user.name,
                            lastName:this._user.lastName,
                            direccion:this._user.direccion
                        });
    
                    resolve(newUser);
                }

            });
       

            
            
    }
}


export default UsersServices;