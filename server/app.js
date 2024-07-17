import connection_db from "./database/connection_db.js";
import { DB_PORT } from './config.js';
import express from 'express';
import cors from 'cors';
import UserModel from './models/UserModel.js';
import userRouter from './routes/userRouter.js';

export const app = express();
app.use(cors());

app.use('/api', userRouter);

try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.');

    await UserModel.sync();
    console.log('The model has been synchronized succesfully ✅')

   } catch (error) {
    console.error('Unable to connect to the database:', error);
   }
   
app.listen(DB_PORT, () =>{
    console.log(`Server up in http://localhost:${DB_PORT}`)
});   