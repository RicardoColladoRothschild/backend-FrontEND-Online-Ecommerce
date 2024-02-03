import { Application } from 'express';
import userRoute from './users.routes';

function routeApi(app:Application){
    app.use('/user',userRoute);
}

export default routeApi;