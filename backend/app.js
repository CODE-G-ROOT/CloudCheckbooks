import express from 'express';
import cheque from './routes/cheque.js';

import dotenv from 'dotenv';
// import factura from './routes/factura.js';
// import libros from './routes/libros.js';
// import metodo_pago from './routes/metodo_pago.js';
// import pago from './routes/pago.js';
// import persona from './routes/persona.js';
// import recibo_caja from './routes/recibo_caja.js';
// import talonario from './routes/talonario.js';
// import ubicacion from './routes/ubicacion.js';
// import usuario from './routes/usuario.js';

console.clear();

dotenv.config();

const app = express();
app.use(express.json());
app.use("/cheque", cheque);

// const config = JSON.parse(process.env.MY_CONFIG);
// app.listen(config, ()=>{
//     console.log(`http://${config.hostname}:${config.port}/getCheque`);
// })

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`
)});

