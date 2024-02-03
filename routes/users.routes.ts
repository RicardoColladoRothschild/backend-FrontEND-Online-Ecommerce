import express, { Request, Response } from 'express';
import Users from '../models/Users.model';
const router = express.Router();

router.use(express.json());

router.get('/all', async (req: Request, res: Response)=>{

        try{

            const allUsers = await Users.findAll();

                res
                    .status(200)
                    .json(allUsers);
        }catch(error){
            res
            .status(500)
            .json({error:'Internal server error - 500'});
        }
});


export default router;