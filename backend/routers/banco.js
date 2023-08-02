import { Router } from 'express';
import proxy_banco from '../middleware/proxy_banco.js';
import mysql from 'mysql2';
import dotenv from "dotenv";
import { validateToken } from '../middleware/proxy_JWT.js'
import { equals } from 'class-validator';

dotenv.config();

const router_Bancos = Router();
let con = undefined;

//* Configuración para la base de datos
router_Bancos.use((req, res, next) => {
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Bancos.get("/bancos", validateToken, proxy_banco, (req, res) => {
    con.query(
        `SELECT * FROM Banco;
        `,
        (err, data, fill) => {
            if (err) {
                console.error('Error al obtener los datos: ', err.message);
                res.sendStatus(500);
                console.log(data);
            } else {
                res.send(data);
            }
        }
    );
})

router_Bancos.post("/bancos", proxy_banco, (req, res) => {
    con.query(
        `INSERT INTO Banco SET ?`,
        req.body, (err, data) => {
            if (err) {
                console.error('Error al crear el libro:', err.message);
                res.sendStatus(500);
            } else {
                res.send(data);
            }
        })
});

router_Bancos.put("/bancos/:id", proxy_banco, (req, res) => {
    const id = req.params.id;
    const data = req.body;
    con.query(
        `UPDATE Bancos SET ? WHERE id_banco = ?`,
        [data, id],
        (err, data) => {
            if (err) {
                console.error("Error al actualizar el banco:", err.message);
                res.sendStatus(500);
            } else {
                res.send(data);
            }
        }
    );
});

router_Bancos.delete("/bancos/:id", proxy_banco, (req, res) => {
    const id = req.params.id;
    con.query(
        `DELETE FROM Bancos WHERE id_banco = ?`,
        req.body, (err, data) => {
            if (err) {
                console.error('Error al crear el libro:', err.message);
                res.sendStatus(500);
            } else {
                res.send(data);
            }
        })
});



export default router_Bancos;
