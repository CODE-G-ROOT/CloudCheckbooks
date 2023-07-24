import {Router} from 'express';
import proxy_metodo_pago from '../middleware/proxy_pago.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Pago = Router();
let con = undefined;

//* Configuración para la base de datos
router_Pago.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Pago.get("/", proxy_metodo_pago ,(req,res)=>{
    con.query(
        `SELECT * FROM Pago;`,
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


router_Pago.post("/", proxy_metodo_pago, (req, res)=>{
    con.query(
        `INSERT INTO Pago SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear un pago:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Pago;
