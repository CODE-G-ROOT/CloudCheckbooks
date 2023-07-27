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
        `SELECT 
        Recibo_caja.recibo_caja_id as id,
        Pago.pago_id as id_pago,
        Persona.persona_nombre as name,
        Persona.persona_phone as phone,
        Persona.persona_email as email,
        Ubicacion.ubicacion_direccion as direction,
        Pago.monto_num as monto,
        Pago.valor_unitario as unidad,
        Pago.subtotal_por_item as subtotal_por_item,
        Pago.total as total,
        Metodo_pago.mp_nombre as metodo_pago
        FROM Recibo_caja
        INNER JOIN Persona ON Persona.persona_id = Recibo_caja.persona_id
        INNER JOIN Pago ON Pago.pago_id = Recibo_caja.pago_id
        INNER JOIN Ubicacion ON Ubicacion.ubicacion_id = Persona.ubicacion_id
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
