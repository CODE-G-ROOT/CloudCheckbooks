import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_pago } from '../controller/get_pago.js'

const proxy_pago = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_pago, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_pago;