import {Router} from 'express';
// import proxy_cheque from '../middleware/proxy_cheque.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Cheque = Router();
let con = undefined;

router_Cheque.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Cheque.get("/", (req,res)=>{
    con.query(
        `SELECT * FROM Cheque;`,
        (err,data,fill)=>{
            if(err){
                console.error('Error al obtener los datos: ', err.message);
                res.sendStatus(500);
                console.log(data);
            } else {
                res.send(JSON.stringify(data));
            }
        }
    );
})

export default router_Cheque;
