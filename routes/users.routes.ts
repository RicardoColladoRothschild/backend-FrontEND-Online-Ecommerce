import express, { Request, Response } from 'express';
import Users from '../models/Users.model';
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


export default router;