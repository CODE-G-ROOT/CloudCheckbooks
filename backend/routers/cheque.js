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
        `SELECT * FROM Cheque`,
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

router_Cheque.put("/cheque/:id", proxy_cheque, (req, res)=>{
    const id = req.params.id;
    const data = req.body;
    con.query(
        `UPDATE Cheque SET ? WHERE cheque_id = ?`,
        [data, id],
        (err, data) => {
        if (err) {
            console.error('Error al actualizar el cheque:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

router_Cheque.delete("/cheque:id", proxy_cheque, (req, res)=>{
    const id = req.params.id;
    con.query(
        `DELETE FROM Cheque WHERE cheque_id = ?`,
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
