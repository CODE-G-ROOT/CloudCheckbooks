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
    factura : "http://localhost:4001/home/factura",
    libros : "http://localhost:4001/home/libros",
    metodo_pago : "http://localhost:4001/home/metodo_pago",
    pago : "http://localhost:4001/home/pago",
    persona : "http://localhost:4001/home/persona",
    recibo_caja : "http://localhost:4001/home/recibo_caja",
    talonario : "http://localhost:4001/home/talonario",
    ubicacion : "http://localhost:4001/home/ubicacion",
    usuario : "http://localhost:4001/home/usuario",
    fecha : "http://localhost:4001/home/fecha",
    banco : "http://localhost:4001/home/banco"
}

route_home.get("/" ,(req,res)=>{
    res.send(JSON.parse(JSON.stringify(data)))
})

export default route_home;
