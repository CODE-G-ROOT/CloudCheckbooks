import express from "express";
import dotenv from "dotenv";
import router_cheque from "./routes/cheque.js";
import { SignJWT, jwtVerify } from 'jose';
dotenv.config();
const appExpress = express();

console.clear();

// appExpress.use(express.json());
// appExpress.use("/", router_cheque);

appExpress.use(express.json());
appExpress.get('/:id/:nombre', router_cheque ,async(req,res)=>{

    //* Contiene la información importante

    const encoder = new TextEncoder();

    //* Se instancia SignJWT que recibe el json
    const jwtconstructor = new SignJWT({router_cheque});
    const jwt = await jwtconstructor

    //*Headers que estan en la pagina
    .setProtectedHeader({alg: "HS256", typ: "JWT"})

    //*Servidor por defecto
    .setIssuedAt()

    //*Tiempo del token
    .setExpirationTime("60s")

    //*Se pone la key que es la que cifra todo esto
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    res.send({jwt});
})
appExpress.post('/', async(req,res)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(401).send({token: ":("});
    try{
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        )
        res.send(jwtData);
    }catch(err){
        res.status(401).send({token: "Algo salio mal"})
    }
})


//TODO   ESTA FUNCION Y CLOSE SERVER, SON PARA CERRAR EL SERVIDOR 
//TODO   Y EL PUERTO A LA HORA DE CERRAR LA PÁGINA
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
console.log(router_cheque);
//* Configuración para el server
const serverConfig = JSON.parse(process.env.SERVER_CONFIG);
appExpress.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}`
)});
