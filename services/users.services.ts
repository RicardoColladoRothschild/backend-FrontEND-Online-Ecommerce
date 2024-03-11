import IUser from "../interfaces/IUser";
import Users from '../models/Users.model';
import BCryptService from './bcrypt.service';
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
                    let newUser;
                    const bcs:BCryptService = new BCryptService();
                        bcs.hashPassword(this._user.password)
                        .then(hash=>{

                            newUser = Users.create({
                                username:this._user.username,
                                email:this._user.email,
                                password:hash,
                                name:this._user.name,
                                lastName:this._user.lastName,
                                direccion:this._user.direccion
                            });
                            resolve(newUser);
                        })
                        .catch(error2=>{
                            reject(error2)
                        });
    
                    
                }

            });
       

            
            
    }

    /*Find user by email:*/

    static async findByEmail(emailUser:string){

            const user_found = await Users.findOne({
                where:{email:emailUser}
            });

                return new Promise((reject, resolve)=>{

                        if(!user_found){
                            reject("User was not found");
                        }else{
                            resolve(user_found);
                        }
                });
    }
}


export default UsersServices;