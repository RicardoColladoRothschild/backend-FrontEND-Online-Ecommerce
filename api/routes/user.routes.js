const express = require('express');
const router = express.Router();
const Users = require('../model/users.model');
const allUsers = [
    {
        name:'ricardo',
        age:34,
        email:'some@other.com'
    }
];

router.get('/all', (req, res)=>{
        res.status(200).json(allUsers);
});

router.get('/allusersdb', async (req, res)=>{

    try{

        const user = await Users.findAll();
        
        
            res
                .status(200)
                .json({user});
    }catch(error){
        
        res
        .status(500)
        .json({error:`Internal server error - 500: ${error}`});
    }
});



module.exports = router;