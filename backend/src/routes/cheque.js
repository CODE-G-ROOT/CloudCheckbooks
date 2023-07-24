import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();


const router_cheque = Router();
let con = undefined;


//* Configuración para la base de datos
router_cheque.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myConfig);
    next();
})

router_cheque.get('/', (req,res)=>{
    con.query(
        /*sql*/`SELECT * FROM Cheque`,
        (err,data,fill)=>{
            if(err){
                console.log(err);
            }
            res.send(data);
        }
    ) 
})

export default router_cheque;