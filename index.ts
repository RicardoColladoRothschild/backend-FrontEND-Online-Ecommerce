import express, { Request, Response } from 'express';
import routeApi from './routes/index';
const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.json());


app.get('/api', (request:Request, response: Response)=>{

        response.send('Esta es una ruta normal');
});

app.get('/api/rutatesting', (request:Request, response: Response)=>{

    response.send('Hola, estamos probando rooting');
});




/*async function startserver() {
        await sequelize.sync();
        
    }*/
    routeApi(app);
    app.listen(PORT);
    //startserver();
              



