import {Router} from 'express';
import proxy_talones from '../middleware/proxy_talones.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Talones = Router();
let con = undefined;

//* Configuración para la base de datos
router_Talones.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Talones.get("/", proxy_talones ,(req,res)=>{
    con.query(
        `SELECT * FROM TALONARIO;`,
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


router_Talones.post("/", proxy_talones, (req, res)=>{
    con.query(
        `INSERT INTO TALONARIO SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear una Talones:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Talones;
