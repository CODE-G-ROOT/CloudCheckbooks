import {Router} from 'express';
import proxy_fechas from '../middleware/proxy_fechas.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Fechas = Router();
let con = undefined;

//* Configuración para la base de datos
router_Fechas.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Fechas.get("/", proxy_fechas ,(req,res)=>{
    con.query(
        `SELECT * FROM Fechas;
        `,
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


router_Fechas.post("/", proxy_fechas, (req, res)=>{
    con.query(
        `INSERT INTO Fechas SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear el libro:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Fechas;
