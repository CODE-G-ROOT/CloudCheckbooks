import {Router} from 'express';
import proxy_recibo_cajas from '../middleware/proxy_recibo_cajas.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Recibo_caja = Router();
let con = undefined;

//* Configuración para la base de datos
router_Recibo_caja.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Recibo_caja.get("/", proxy_recibo_cajas ,(req,res)=>{
    con.query(
        `SELECT * FROM Recibo_caja;`,
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


router_Recibo_caja.post("/", proxy_recibo_cajas, (req, res)=>{
    con.query(
        `INSERT INTO Recibo_caja SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear un recibo de caja: ', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Recibo_caja;
