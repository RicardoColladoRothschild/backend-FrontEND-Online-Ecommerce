import express, { Request, Response } from 'express';
import sequelize from './models/sequelize.config';
import routeApi from './routes';
const server = express();
const PORT = process.env.PORT || 3031;

server.use(express.json());


server.get('/api', (request:Request, response: Response)=>{

        response.status(200).json({message:'Probando index'});
});




async function startServer() {
        await sequelize.sync();
        server.listen(PORT, () => {
            console.log(`server running on http://localhost:${PORT}/`);
        });
    }

    startServer();
routeApi(server);              



