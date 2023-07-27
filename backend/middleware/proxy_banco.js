import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_bancos } from '../controllers/get_bancos.js';
import { validate } from "class-validator";

const proxy_banco = express();
proxy_banco.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_bancos, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_banco;