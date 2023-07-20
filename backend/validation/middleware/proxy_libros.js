import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_libros } from '../controller/get_libros.js'

const proxy_libros = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_libros, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_libros;