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

console.clear();

dotenv.config();

const app = express();
app.use(express.json());

app.use("/home", home);
app.use("/cheque", cheque);
app.use("/factura", factura);
app.use("/libros", libros);
app.use("/metodo_pago", metodo_pago);
app.use("/pago", pago);
app.use("/persona", persona);
app.use("/recibo_caja", recibo_caja);
app.use("/talonario", talonario);
app.use("/ubicacion", ubicacion);
app.use("/usuario", usuario);

// //* Esta función se encarga de controlar el cierre del puerto
// //TODO   ESTA FUNCION Y CLOSE SERVER, SON PARA CERRAR EL SERVIDOR 
// //TODO   Y EL PUERTO A LA HORA DE CERRAR LA PÁGINA
// process.on('SIGINT', () => {
//     console.log('Cerrando el servidor...');
//     server.close();
    
//     process.exit(0);
// });

// const closeServer = () => {
//     console.log('Cerrando el servidor...');
//     server.close();
    
//     process.exit(0);
// };

// const tiempoEspera = 10 * 1000; // 10 minutos en milisegundos
// setTimeout(closeServer, tiempoEspera);

//* Configuración del servidor
const serverConfig = JSON.parse(process.env.SERVER_CONFIG);

app.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}/home`
)});

