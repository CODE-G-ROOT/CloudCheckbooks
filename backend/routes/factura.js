import {Router} from 'express';
import proxy_facturas from '../middleware/proxy_factura.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Factura = Router();
let con = undefined;

//* Configuración para la base de datos
router_Factura.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Factura.get("/", proxy_facturas ,(req,res)=>{
    con.query(
        `SELECT * FROM Factura;`,
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


router_Factura.post("/", proxy_factura, (req, res)=>{
    con.query(
        `INSERT INTO Factura SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear la factura:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Factura;
