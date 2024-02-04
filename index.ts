import express, { Request, Response } from 'express';
import routeApi from './routes/index';
const server = express();
const PORT = process.env.PORT || 3031;

server.use(express.json());


server.get('/api', (request:Request, response: Response)=>{

        response.send('Esta es una ruta normal');
});

server.get('/api/rutatesting', (request:Request, response: Response)=>{

    response.send('Hola, estamos probando rooting');
});




/*async function startServer() {
        await sequelize.sync();
        
    }*/
    routeApi(server);
    server.listen(PORT);
    //startServer();
              



