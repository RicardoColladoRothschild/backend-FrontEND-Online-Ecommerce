const express = require('express');
const router = express.Router();

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


module.exports = router;