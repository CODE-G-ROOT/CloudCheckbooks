import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_factura } from '../controller/get_factura.js'

const proxy_factura = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_factura, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_factura;