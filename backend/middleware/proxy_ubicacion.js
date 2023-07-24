import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_ubicaciones } from '../controllers/get_ubicaciones.js';
import { validate } from "class-validator";

const proxy_ubicaciones = express();
proxy_ubicaciones.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_ubicaciones, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_ubicaciones;