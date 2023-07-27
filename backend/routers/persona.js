import {Router} from 'express';
import proxy_persona from '../middleware/proxy_persona.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Persona = Router();
let con = undefined;

//* Configuración para la base de datos
router_Persona.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Persona.get("/", proxy_persona ,(req,res)=>{
    con.query(
        `SELECT 
            persona_id as id,
            persona_nombre as name,
            persona_phone as phone,
            persona_email as email,
            ubicacion_direccion as direction
        FROM Persona
        LEFT JOIN Ubicacion ON
        Ubicacion.ubicacion_id = Persona.ubicacion_id;`,
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


router_Persona.post("/", proxy_persona, (req, res)=>{
    con.query(
        `INSERT INTO Persona SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear una Persona:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Persona;
