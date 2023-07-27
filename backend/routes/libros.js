import {Router} from 'express';
import proxy_libros from '../middleware/proxy_libros.js';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const router_Libros = Router();
let con = undefined;

//* Configuración para la base de datos
router_Libros.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Libros.get("/", proxy_libros ,(req,res)=>{
    con.query(
        `SELECT 
        libro_id as id,
        Usuario.usu_id as id_usuario,
        libro_name as libro,
        usu_nickname as usuario,
        Libros.talon_cant as libro_cant
        FROM Libros
        INNER JOIN Usuario ON Usuario.usu_id = Libros.responsable_id;
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


router_Libros.post("/", proxy_libros, (req, res)=>{
    con.query(
        `INSERT INTO Libros SET ?`, 
        req.body,(err, data) => {
        if (err) {
            console.error('Error al crear el libro:', err.message);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

export default router_Libros;
