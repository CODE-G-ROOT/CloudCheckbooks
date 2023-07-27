import {Router} from 'express';
import proxy_ubicacion from '../middleware/proxy_ubicacion.js';
import mysql from 'mysql2';
import dotenv from "dotenv";
import { validateToken } from '../middleware/proxy_JWT.js'

dotenv.config();

const router_Ubicacion = Router();
let con = undefined;

//* Configuración para la base de datos
router_Ubicacion.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Ubicacion.get("/ubicacion",validateToken, proxy_ubicacion ,(req,res)=>{
    con.query(
        `SELECT * FROM Ubicacion;`,
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


router_Ubicacion.post("/", proxy_ubicacion, (req, res)=>{
    con.query(
        `INSERT INTO Ubicacion SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear una Ubicacion:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Ubicacion;
