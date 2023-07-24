import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_recibos_caja } from '../controllers/get_recibos_caja.js';
import { validate } from "class-validator";

const proxy_recibos_caja = express();
proxy_recibos_caja.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_recibos_caja, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_recibos_caja;