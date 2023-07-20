import expres from "express";
import 'reflect-metadata';
import { plainToClass} from "class-transformer";
import { get_talons } from '../validation/sources/get_talons.js'

const proxy_talons = expres();
proxy_cheque.use((req,res, next)=>{
    try {
        let data = plainToClass(get_talons, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxy_talons;