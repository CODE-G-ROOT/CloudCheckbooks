import express from "express";
import dotenv from "dotenv";
import router_cheque from "./routes/cheque.js";
dotenv.config();
const appExpress = express();

console.clear();

appExpress.use(express.json());
appExpress.use("/", router_cheque);


//TODO   ESTA FUNCION Y CLOSE SERVER, SON PARA CERRAR EL SERVIDOR 
//TODO   Y EL PUERTO A LA HORA DE CERRAR LA PÁGINA
process.on('SIGINT', () => {
    console.log('Cerrando el servidor...');
    server.close();
    
    process.exit(0);
});

const closeServer = () => {
    console.log('Cerrando el servidor...');
    server.close();
    
    process.exit(0);
};

const tiempoEspera = 10 * 1000; // 10 minutos en milisegundos
setTimeout(closeServer, tiempoEspera);

//* Configuración para el server
const serverConfig = JSON.parse(process.env.SERVER_CONFIG);
appExpress.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}`
)});
