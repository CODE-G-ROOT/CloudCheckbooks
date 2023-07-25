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
        `SELECT 
        Pago.pago_id as id,
        Pago.monto_num as monto,
        Pago.monto_palabras as monto_palabras,
        Pago.valor_unitario as unidad,
        Pago.subtotal_por_item as subtotal_por_item,
        Pago.total as total,
        Metodo_pago.mp_nombre as metodo_pago
        FROM Pago
        INNER JOIN Metodo_pago ON Metodo_pago.metodo_pago_id = Pago.metodo_pago_id;`,
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
