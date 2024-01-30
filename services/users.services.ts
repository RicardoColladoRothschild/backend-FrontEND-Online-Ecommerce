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

            if(isEmailDuplicated){
                throw new Error('There has been an internal Server Error, element email is duplicated');
            }
    }
}


export default UsersServices;