import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_personas } from '../controllers/get_personas.js';
import { validate } from "class-validator";

const proxy_personas = express();
proxy_personas.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_personas, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_personas;