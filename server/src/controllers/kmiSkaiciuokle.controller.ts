import { Response } from "express";

export class kmiSkaiciuokleController{
   static apskaiciuoti(req:any, res:any ){
    console.log("Skaiciuojami duomenys");
    const x = (parseInt(req.body.x)/100)**2;
    const y = parseInt(req.body.y);
    console.log();
        res.json({
            "rezultatas": (y/x).toFixed(2)
        });
   } 
}