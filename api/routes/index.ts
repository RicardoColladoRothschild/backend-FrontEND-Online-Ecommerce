import express, { Application } from 'express';
import userRoute from './users.routes';

function routeApi(app:Application){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user',userRoute);
}

export default routeApi;