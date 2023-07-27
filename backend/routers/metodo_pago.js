import {Router} from 'express';
import proxy_metodo_pago from '../middleware/proxy_metodo_pago.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Metodo_pago = Router();
let con = undefined;

//* Configuración para la base de datos
router_Metodo_pago.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Metodo_pago.get("/", proxy_metodo_pago ,(req,res)=>{
    con.query(
        `SELECT * FROM Metodo_pago;`,
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


router_Metodo_pago.post("/", proxy_metodo_pago, (req, res)=>{
    con.query(
        `INSERT INTO Metodo_pago SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear la bodega:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Metodo_pago;
