import express from 'express';
import { kmiSkaiciuokleController } from '../controllers/kmiSkaiciuokle.controller';

const kmiSkaiciuokleRouter=express.Router();

kmiSkaiciuokleRouter.post('/skaiciuoti', kmiSkaiciuokleController.apskaiciuoti);


export {kmiSkaiciuokleRouter};