import express, { Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import Users from '../models/Users.model';
import UsersServices from '../services/users.services';
const router = express.Router();

router.use(express.json());
router.get('/', async (req: Request, res: Response)=>{

    try{

        
        console.log('showing data....');
        
            res
                .status(200)
                .json({message:'SImulando data'});
    }catch(error){
        res
        .status(500)
        .json({error:'Internal server error - 500'});
    }
});

router.get('/all', async (req: Request, res: Response)=>{

        try{

            const user = await Users.findAll();
            console.log(user);
            
                res
                    .status(200)
                    .json({user});
        }catch(error){
            console.log(error)
            res
            .status(500)
            .json({error:`Internal server error - 500: ${error}`});
        }
});

router.post('/', async (req:Request, res: Response)=>{

    try{
        const {username, email, password, name, lastName, direccion } = req.body;
                const newUser:IUser = {username, email, password, name, lastName, direccion};
            let user_service = new UsersServices(newUser);
            const newUser_Created = user_service.createAUser();
                return res
                        .status(201)
                        .json(newUser_Created);
    }catch(error){
        return res
                .status(400)
                .json({error:error});
    }
        

                

});


export default router;