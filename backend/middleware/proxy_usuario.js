import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_usuarios } from '../controllers/get_usuarios.js';
import { validate } from "class-validator";

const proxy_usuarios = express();
proxy_usuarios.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_usuarios, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_usuarios;