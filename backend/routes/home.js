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
    factura : "http://localhost:3000/home/factura",
    libros : "http://localhost:3000/home/libros",
    metodo_pago : "http://localhost:3000/home/metodo_pago",
    pago : "http://localhost:3000/home/pago",
    persona : "http://localhost:3000/home/persona",
    recibo_caja : "http://localhost:3000/home/recibo_caja",
<<<<<<< HEAD
    talonario : "http://localhost:3000/home/talonario",
=======
    factura : "http://localhost:3000/home/talonario",
    recibo : "http://localhost:3000/home/talonario",
    cheque : "http://localhost:3000/home/cheque",
>>>>>>> golden
    ubicacion : "http://localhost:3000/home/ubicacion",
    usuario : "http://localhost:3000/home/usuario",
    fecha : "http://localhost:3000/home/fecha",
    banco : "http://localhost:3000/home/banco"
}

route_home.get("/" ,(req,res)=>{
    res.send(JSON.parse(JSON.stringify(data)))
})

export default route_home;
