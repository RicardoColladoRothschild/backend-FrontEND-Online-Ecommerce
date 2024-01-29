import express, { Request, Response } from 'express';

const server = express();
const PORT = 3031;

server.use(express.json());


server.get('/', (request:Request, response: Response)=>{

        response.status(200).json({message:'Probando index'});
});

