import dotenv from "dotenv";
import mysql, { createPool } from "mysql2";
import { Router, query } from "express";

dotenv.config();

const router_Citas = Router();
let con = undefined;

router_Citas.use((req, res, next)=>{
    let myConfig = JSON.parse(process.env.DB_MYCONFIG);
    con = mysql.createPool(myConfig);
    next();
})

router_Citas.get("/", (req, res)=>{
    con,query(
        `SELECT * FROM JOIN `
    )
})


