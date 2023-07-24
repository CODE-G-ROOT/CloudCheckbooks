import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_facturas } from '../controllers/get_facturas.js';
import { validate } from "class-validator";

const proxy_facturas = express();
proxy_facturas.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_facturas, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_facturas;