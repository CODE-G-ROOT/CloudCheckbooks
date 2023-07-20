import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_persona } from '../controller/get_persona.js'

const proxy_persona = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_persona, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_persona;