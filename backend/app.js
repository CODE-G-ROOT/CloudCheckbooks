import express from 'express';
import dotenv from 'dotenv';

import home from './routes/home.js';
import cheque from './routes/cheque.js';
import factura from './routes/factura.js';
import libros from './routes/libros.js';
import metodo_pago from './routes/metodo_pago.js';
import pago from './routes/pago.js';
import persona from './routes/persona.js';
import recibo_caja from './routes/recibo_caja.js';
import talonario from './routes/talonario.js';
import ubicacion from './routes/ubicacion.js';
import usuario from './routes/usuario.js';
import fecha from './routes/fecha.js';
import banco from './routes/banco.js';

console.clear();

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

const serverConfig = JSON.parse(process.env.SERVER_CONFIG);


app.listen(serverConfig.port, serverConfig.hostname, ()=>{     
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}/home`
)});

export default serverConfig;;

