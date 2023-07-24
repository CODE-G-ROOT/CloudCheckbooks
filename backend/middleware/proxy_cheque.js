import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_cheques } from '../controllers/get_cheques.js';
import { validate } from "class-validator";

const proxy_cheque = express();
proxy_cheque.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_cheques, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_cheque;