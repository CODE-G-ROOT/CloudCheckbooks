import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_libros } from '../controllers/get_libros.js';
import { validate } from "class-validator";

const proxy_libros = express();
proxy_libros.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_libros, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_libros;