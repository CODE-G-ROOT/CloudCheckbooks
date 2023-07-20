import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_metodo_pago } from '../controller/get_metodo_pago.js'

const proxy_metodo_pago = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_metodo_pago, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_metodo_pago;