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

let a = JSON.parse(process.env.SERVER_CONFIG);

let data = {
    factura : `http://${a.hostname}:${a.port}/home/factura`,
    libros : `http://${a.hostname}:${a.port}/home/libros`,
    metodo_pago : `http://${a.hostname}:${a.port}/home/metodo_pago`,
    pago : `http://${a.hostname}:${a.port}/home/pago`,
    persona : `http://${a.hostname}:${a.port}/home/persona`,
    recibo_caja : `http://${a.hostname}:${a.port}/home/recibo_caja`,
    talonario : `http://${a.hostname}:${a.port}/home/talonario`,
    ubicacion : `http://${a.hostname}:${a.port}/home/ubicacion`,
    usuario : `http://${a.hostname}:${a.port}/home/usuario`,
    fecha : `http://${a.hostname}:${a.port}/home/fecha`,
    banco : `http://${a.hostname}:${a.port}/home/banco`
}

route_home.get("/" ,(req,res)=>{
    res.send(JSON.parse(JSON.stringify(data)))
}) 

export default route_home;
