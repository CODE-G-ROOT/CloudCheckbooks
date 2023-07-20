import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_recibo_caja } from '../controller/get_recibo_caja.js'

const proxy_recibo_caja = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_recibo_caja, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_recibo_caja;