import express from 'express';
import dotenv from 'dotenv';

import home from './routers/home.js';
import cheque from './routers/cheque.js';
import factura from './routers/factura.js';
import libros from './routers/libros.js';
import metodo_pago from './routers/metodo_pago.js';
import pago from './routers/pago.js';
import persona from './routers/persona.js';
import recibo_caja from './routers/recibo_caja.js';
import talonario from './routers/talonario.js';
import ubicacion from './routers/ubicacion.js';
import usuario from './routers/usuario.js';
import fecha from './routers/fecha.js';
import banco from './routers/banco.js'; 
import appJWT from "./routers/JWT.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/home", home);
app.use("/home/cheque", cheque);
app.use("/home/factura", factura);
app.use("/home/libros", libros);
app.use("/home/metodo_pago", metodo_pago);
app.use("/home/pago", pago);
app.use("/home/persona", persona);
app.use("/home/recibo_caja", recibo_caja);
app.use("/home/talonario", talonario);
app.use("/home/ubicacion", ubicacion);
app.use("/home/usuario", usuario);
app.use("/home/fecha", fecha);
app.use("/home/banco", banco); 
app.use('/validate', appJWT); 

const serverConfig = JSON.parse(process.env.SERVER_CONFIG);

app.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}`
)});

export default serverConfig;