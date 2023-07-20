import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_cheque } from '../controller/get_cheque.js'

const proxy_cheque = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_cheque, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_cheque;