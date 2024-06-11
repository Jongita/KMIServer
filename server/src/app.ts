import express, {Application, Request, Response} from 'express';
import { kmiSkaiciuokleRouter } from './routes/kmiSkaiciuokle.router';

const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use((req:Request, res:Response, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/kmiSkaiciuokle', kmiSkaiciuokleRouter);

export {app};