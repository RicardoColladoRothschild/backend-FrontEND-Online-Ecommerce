import express, { Request, Response } from 'express';
import sequelize from './models/sequelize.config';
import routeApi from './routes';
const server = express();
const PORT = process.env.PORT || 3031;

server.use(express.json());


server.get('/api', (request:Request, response: Response)=>{

        response.send('Esta es una ruta normal');
});

server.get('/api/rutatesting', (request:Request, response: Response)=>{

    response.send('Hola, estamos probando rooting');
});




async function startServer() {
        await sequelize.sync();
        
    }
    /*server.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}/`);
    });*/
    startServer();
routeApi(server);              



