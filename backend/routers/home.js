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
    GET : {
        factura : `http://${a.hostname}:${a.port}/home/factura`,
        libros : `http://${a.hostname}:${a.port}/home/libros`,
        metodo_pago : `http://${a.hostname}:${a.port}/home/met_pay`,
        pago : `http://${a.hostname}:${a.port}/home/pago`,
        persona : `http://${a.hostname}:${a.port}/home/personas`,
        recibo_caja : `http://${a.hostname}:${a.port}/home/recibo`,
        talonario : `http://${a.hostname}:${a.port}/home/talonario:factura`,
        ubicacion : `http://${a.hostname}:${a.port}/home/ubicacion`,
        usuario : `http://${a.hostname}:${a.port}/home/usuario`,
        fecha : `http://${a.hostname}:${a.port}/home/fechas`,
        banco : `http://${a.hostname}:${a.port}/home/bancos`
    },
    POST : {
        factura : `http://${a.hostname}:${a.port}/home/factura`,
        libros : `http://${a.hostname}:${a.port}/home/libros`,
        metodo_pago : `http://${a.hostname}:${a.port}/home/met_pay`,
        pago : `http://${a.hostname}:${a.port}/home/pago`,
        persona : `http://${a.hostname}:${a.port}/home/personas`,
        recibo_caja : `http://${a.hostname}:${a.port}/home/recibo`,
        talonario : `http://${a.hostname}:${a.port}/home/talonario:factura`,
        ubicacion : `http://${a.hostname}:${a.port}/home/ubicacion`,
        usuario : `http://${a.hostname}:${a.port}/home/usuario`,
        fecha : `http://${a.hostname}:${a.port}/home/fechas`,
        banco : `http://${a.hostname}:${a.port}/home/bancos`
    },
    PUT : {
        factura : `http://${a.hostname}:${a.port}/home/factura/:id`,
        libros : `http://${a.hostname}:${a.port}/home/libros/:id`,
        metodo_pago : `http://${a.hostname}:${a.port}/home/met_pay/:id`,
        pago : `http://${a.hostname}:${a.port}/home/pago/:id`,
        persona : `http://${a.hostname}:${a.port}/home/personas/:id`,
        recibo_caja : `http://${a.hostname}:${a.port}/home/recibo/:id`,
        talonario : `http://${a.hostname}:${a.port}/home/talonario:factura/:id`,
        ubicacion : `http://${a.hostname}:${a.port}/home/ubicacion/:id`,
        usuario : `http://${a.hostname}:${a.port}/home/usuario/:id`,
        fecha : `http://${a.hostname}:${a.port}/home/fechas/:id`,
        banco : `http://${a.hostname}:${a.port}/home/bancos/:id`
    }, 
    DELETE : {
        factura : `http://${a.hostname}:${a.port}/home/factura/:id`,
        libros : `http://${a.hostname}:${a.port}/home/libros/:id`,
        metodo_pago : `http://${a.hostname}:${a.port}/home/met_pay/:id`,
        pago : `http://${a.hostname}:${a.port}/home/pago/:id`,
        persona : `http://${a.hostname}:${a.port}/home/personas/:id`,
        recibo_caja : `http://${a.hostname}:${a.port}/home/recibo/:id`,
        talonario : `http://${a.hostname}:${a.port}/home/talonario:factura/:id`,
        ubicacion : `http://${a.hostname}:${a.port}/home/ubicacion/:id`,
        usuario : `http://${a.hostname}:${a.port}/home/usuario/:id`,
        fecha : `http://${a.hostname}:${a.port}/home/fechas/:id`,
        banco : `http://${a.hostname}:${a.port}/home/bancos/:id`
    }
}

route_home.get("/" ,(req,res)=>{
    res.send(JSON.parse(JSON.stringify(data)))
}) 

export default route_home;
