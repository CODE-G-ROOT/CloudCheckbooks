import dotenv from "dotenv";
import mysql, { createPool } from "mysql2";
import { Router, query } from "express";

dotenv.config();

const router_Recibo_caja = Router();
let con = undefined;

router_Recibo_caja.use((req, res, next)=>{
    let myConfig = JSON.parse(process.env.DB_MYCONFIG);
    con = mysql.createPool(myConfig);
    next();
})

router_Recibo_caja.get("/", (req, res)=>{
    con,query(
        `SELECT * FROM Recibo_caja;`,
        (err,data,fil)=>{
            data = JSON.stringify(data);
            res.send(JSON.parse(data));
        }
    );
})


export default router_Recibo_caja;


