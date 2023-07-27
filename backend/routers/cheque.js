import {Router} from 'express';
import proxy_cheque from '../middleware/proxy_cheque.js';
import mysql from 'mysql2';
import dotenv from "dotenv";
import { validateToken } from '../middleware/proxy_JWT.js'

dotenv.config();

const router_Cheque = Router();
let con = undefined;

//* Configuración para la base de datos
router_Cheque.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Cheque.get("/cheque",validateToken,  proxy_cheque ,(req,res)=>{
    con.query(
        `SELECT 
        cheque_id as "Numero_cheque",
        persona_nombre as name,
        ubicacion_direccion as direccion,
        Pago.pago_id as "Referencia_pago",
        monto_num AS monto,
        monto_palabras AS monto_letra,
        banco_emisor.banco_name as banco_emisor,
        banco_receptor.banco_name as banco_receptor
    FROM Cheque
    INNER JOIN Persona ON Persona.persona_id = Cheque.persona_id
    INNER JOIN Ubicacion ON Ubicacion.ubicacion_id = Persona.ubicacion_id
    INNER JOIN Pago ON Pago.pago_id = Cheque.pago_id
    INNER JOIN Banco AS banco_emisor ON banco_emisor.id_banco = Cheque.banco_emisor_id
    INNER JOIN Banco AS banco_receptor ON banco_receptor.id_banco = Cheque.banco_receptor_id;`,
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


router_Cheque.post("/cheque", proxy_cheque, (req, res)=>{
    con.query(
        `INSERT INTO Cheque SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear un cheque:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Cheque;
