import {Router} from 'express';
import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const route_home = Router();
let con = undefined;

//* Configuración para la base de datos
route_home.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

let data = {
    factura : "http://localhost:4001/factura",
    libros : "http://localhost:4001/libros",
    metodo_pago : "http://localhost:4001/metodo_pago",
    pago : "http://localhost:4001/pago",
    persona : "http://localhost:4001/persona",
    recibo_caja : "http://localhost:4001/recibo_caja",
    talonario : "http://localhost:4001/talonario",
    ubicacion : "http://localhost:4001/ubicacion",
    usuari : "http://localhost:4001/usuario"
}

route_home.get("/" ,(req,res)=>{
    res.send(JSON.parse(JSON.stringify(data)))
})

export default route_home;
