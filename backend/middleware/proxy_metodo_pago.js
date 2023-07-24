import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_metodos_pago } from '../controllers/get_metodos_pago.js';
import { validate } from "class-validator";

const proxy_metodos_pago = express();
proxy_metodos_pago.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_metodos_pago, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_metodos_pago;