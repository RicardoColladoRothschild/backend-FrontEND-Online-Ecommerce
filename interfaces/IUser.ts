interface IUser{
    user_id:number;
    username:string;
    email:string;
    password:string;
    name:string;
    lastName:string;
    address?:string;
}

export default IUser;