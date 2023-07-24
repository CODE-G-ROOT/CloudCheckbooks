import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_cheque } from '../controllers/get_cheque.js';
import { validate } from "class-validator";

const proxy_cheque = express();
proxy_cheque.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_cheque, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_cheque;