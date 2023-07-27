import {Router} from 'express';
import proxy_usuario from '../middleware/proxy_usuario.js';
import mysql from 'mysql2';
import dotenv from "dotenv";
import { validateToken } from '../middleware/proxy_JWT.js'

dotenv.config();

const router_Usuario = Router();
let con = undefined;

//* Configuración para la base de datos
router_Usuario.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Usuario.get("/",validateToken, proxy_usuario ,(req,res)=>{
    con.query(
        `SELECT * FROM Usuario;`,
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


router_Usuario.post("/", proxy_usuario, (req, res)=>{
    con.query(
        `INSERT INTO Usuario SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear una Usuario:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Usuario;
