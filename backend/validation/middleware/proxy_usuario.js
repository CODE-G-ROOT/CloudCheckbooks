import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_usuario } from '../controller/get_usuario.js'

const proxy_usuario = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_usuario, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_usuario;