import express from 'express';
import dotenv from 'dotenv';
import { SignJWT, jwtVerify } from 'jose'; //

dotenv.config();

let appExpress = express();
appExpress.use(express.json());
appExpress.get('/:id/:nombre', async(req,res)=>{

    //* Contiene la información importante
    let json = {
        id: req.params.id,
        nombre: req.params.nombre
    }

    const encoder = new TextEncoder();

    //* Se instancia SignJWT que recibe el json
    const jwtconstructor = new SignJWT({json});
    const jwt = await jwtconstructor

    //*Headers que estan en la pagina
    .setProtectedHeader({alg: "HS256", typ: "JWT"})

    //*Servidor por defecto
    .setIssuedAt()

    //*Tiempo del token
    .setExpirationTime("30s")

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
let myConfig = JSON.parse(process.env.SERVER_CONFIG);
appExpress.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})