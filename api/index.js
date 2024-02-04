const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());

app.get('/api', (req,res)=>{
    res.send('Hello, trying a seerverles routes');
});

app.listen(PORT)