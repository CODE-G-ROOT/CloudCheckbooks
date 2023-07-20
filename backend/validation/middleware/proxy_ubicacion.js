import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_ubicacion } from '../controller/get_ubicacion.js'

const proxy_ubicacion = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_ubicacion, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_ubicacion;