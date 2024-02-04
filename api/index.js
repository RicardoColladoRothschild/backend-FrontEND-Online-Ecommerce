const express = require('express');
const app = express();
const routerApi = require('./routes/');
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.get('/api', (req,res)=>{
    res.send('Hello, trying a seerverles routes');
});

routerApi(app);
server.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
  });