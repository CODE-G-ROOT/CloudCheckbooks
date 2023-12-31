import express from "express"; 
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { get_pagos } from '../controllers/get_pagos.js';
import { validate } from "class-validator";

const proxy_pagos = express();
proxy_pagos.use(async (req,res,next)=>{
    try {
        let data = plainToClass(get_pagos, req.body, { excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxy_pagos;