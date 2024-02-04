const express = require('express');
const app = express();
const routerApi = require('./routes/index');
const PORT = process.env.PORT || 3031;
app.use(express.json());

app.get('/api', (request, response) => {
    response.send('Esta es una ruta normal');
});

app.get('/api/rutatesting', (request, response) => {
    response.send('Hola, estamos probando rooting');
});

async function startserver() {
        await sequelize.sync();
        
    }
app.listen(PORT);
routerApi(app);
startserver();
