import {Router} from 'express';
import proxy_banco from '../middleware/proxy_banco.js';
import mysql from 'mysql2';
import dotenv from "dotenv";
import { validateToken } from '../middleware/proxy_JWT.js'

dotenv.config();

const router_Bancos = Router();
let con = undefined;

//* Configuración para la base de datos
router_Bancos.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Bancos.get("/",validateToken, proxy_banco ,(req,res)=>{
    con.query(
        `SELECT * FROM Banco
        `,
        (err,data,fill)=>{
            if(err){
                console.error('Error al obtener los datos: ', err.message);
                res.sendStatus(500);
                console.log(data);
            } else {
                res.send(data);
            }
        }
    );
})


router_Bancos.post("/", proxy_banco, (req, res)=>{
    con.query(
        `INSERT INTO Bancos SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear el libro:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Bancos;
