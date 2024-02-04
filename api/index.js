const express = require('express');
const app = express();


app.get('/api/v1', (req,res)=>{
    res.send('Hello world');
});

module.exports = app;