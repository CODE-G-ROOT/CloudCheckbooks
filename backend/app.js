import express from 'express';
import dotenv from 'dotenv';

import cheque from './routes/cheque.js';

// import puertos from './control_puertos/puertos.js'; 

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
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}`
)});

