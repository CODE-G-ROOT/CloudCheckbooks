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
        `SELECT 
        factura_id AS "N_Factura",
        terminos_condiciones AS "terminos_condiciones",
        N_I_T AS "NIT",
        comprador.persona_nombre AS Comprador,
        vendedor.persona_nombre AS Vendedor,
        Pago.pago_id AS "N_Pago",
        monto_num AS monto,
        SUM(valor_unitario) AS unidad,
        SUM(subtotal_por_item) AS "subtotal_por_item", 
        SUM(valor_unitario) + SUM(subtotal_por_item) as total
    FROM Factura
    INNER JOIN Pago ON Pago.pago_id = Factura.pago_id
    INNER JOIN Persona AS comprador ON comprador.persona_id = Factura.comprador_id
    INNER JOIN Persona AS vendedor ON vendedor.persona_id = Factura.vendedor_id
    GROUP BY factura_id, terminos_condiciones, N_I_T, comprador.persona_nombre, 
    vendedor.persona_nombre,Pago.pago_id, monto_num,valor_unitario,
    subtotal_por_item,total;`,
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


router_Factura.post("/", proxy_facturas, (req, res)=>{
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
