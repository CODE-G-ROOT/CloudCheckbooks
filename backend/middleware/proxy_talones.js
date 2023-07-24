import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_talones } from '../controllers/get_talones.js';
import { validate } from "class-validator";

const proxy_talones = express();
proxy_talones.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_talones, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_talones;