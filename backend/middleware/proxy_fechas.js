import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_fechas } from '../controllers/get_fechas.js';
import { validate } from "class-validator";

const proxy_fechas = express();
proxy_fechas.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_fechas, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_fechas;