import { Router } from 'express';
import proxy_talones from '../middleware/proxy_talones.js';
import mysql from 'mysql2';
import dotenv from "dotenv";
import { validateToken } from '../middleware/proxy_JWT.js'

dotenv.config();

const router_Talones = Router();
let con = undefined;

//* Configuración para la base de datos
router_Talones.use((req, res, next) => {
    let myconfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myconfig);
    next();
})

router_Talones.get("/talonario/factura", validateToken, proxy_talones, (req, res) => {
    con.query(
        `SELECT 
        TALONARIO.talon_id as id_talon,
        Factura.factura_id as id_factura,
        Fechas.fecha as date,
        TALONARIO.descripcion as descripcion,
        Libros.libro_name as Perteneciente,
        Factura.terminos_condiciones as Terminos,
        Factura.N_I_T as NIT,
        Usuario.usu_id as Id_responsable,
        Usuario.usu_nickname as Responsable,
        comprador.persona_id as comprador_id,
        comprador.persona_nombre as Comprador,
        comprador.persona_phone as comprador_phone,
        comprador.persona_email as comprador_email,
        comprador_ubicacion.ubicacion_direccion as comprador_domicilio,
        vendedor.persona_id as vendedor_id,
        vendedor.persona_nombre as vendedor,
        vendedor.persona_phone as vendedor_phone,
        vendedor.persona_email as vendedor_email,
        vendedor_ubicacion.ubicacion_direccion as vendedor_domicilio,
        Pago.pago_id as pago_id,
        SUM(Pago.valor_unitario) as unidad_sum,
        SUM(Pago.subtotal_por_item) as sub_item_sum,
        Metodo_pago.mp_nombre as Metodo_pago,
        SUM(Pago.valor_unitario) + SUM(Pago.subtotal_por_item) as total 
    FROM TALONARIO
    INNER JOIN Libros ON Libros.libro_id = TALONARIO.libro_id
    INNER JOIN Usuario ON Usuario.usu_id = Libros.responsable_id
    INNER JOIN Factura ON Factura.factura_id = TALONARIO.talon_tipo_id
    INNER JOIN Persona AS comprador ON comprador.persona_id = Factura.comprador_id
    INNER JOIN Persona AS vendedor ON vendedor.persona_id = Factura.vendedor_id
    INNER JOIN Ubicacion AS comprador_ubicacion ON comprador_ubicacion.ubicacion_id = comprador.ubicacion_id
    INNER JOIN Ubicacion AS vendedor_ubicacion ON vendedor_ubicacion.ubicacion_id = vendedor.ubicacion_id
    INNER JOIN Metodo_pago ON Metodo_pago.metodo_pago_id = TALONARIO.metodo_pago_id
    INNER JOIN Pago ON Pago.pago_id = Factura.pago_id
    INNER JOIN Fechas ON Fechas.id_fecha = TALONARIO.id_fecha
    WHERE TALONARIO.talon_tipo_id = Factura.factura_id
    GROUP BY TALONARIO.talon_id, Factura.factura_id, Fechas.fecha, TALONARIO.descripcion, Libros.libro_name,
        Factura.terminos_condiciones, Factura.N_I_T, Usuario.usu_id, Usuario.usu_nickname,
        comprador.persona_id, comprador.persona_nombre, comprador.persona_phone, comprador.persona_email,
        comprador_ubicacion.ubicacion_direccion, vendedor.persona_id, vendedor.persona_nombre,
        vendedor.persona_phone, vendedor.persona_email, vendedor_ubicacion.ubicacion_direccion, Pago.pago_id, Metodo_pago.mp_nombre;
    `,
        (err, data, fill) => {
            if (err) {
                console.error('Error al obtener los datos: ', err.message);
                res.sendStatus(500);
                console.log(data);
            } else {
                res.send(data);
            }
        }
    );
})
router_Talones.get("/talonario/cheque", proxy_talones, (req, res) => {
    con.query(` 
        SELECT 
            TALONARIO.talon_id as id_talon,
            Cheque.cheque_id as id_Cheque,
            Pago.pago_id as pago_id,
            Usuario.usu_id as "Usuario Referente",
            Fechas.fecha as date,
            Libros.libro_name as "Libro",
            TALONARIO.descripcion as descripcion,
            Persona.persona_nombre as Beneficiario,
            B_Emisor.banco_name as Banco_emisor,
            B_Receptor.banco_name as Banco_receptor
        FROM TALONARIO
        INNER JOIN Libros ON Libros.libro_id = TALONARIO.libro_id
        INNER JOIN Usuario ON Usuario.usu_id = Libros.responsable_id
        INNER JOIN Cheque ON Cheque.cheque_id = TALONARIO.talon_id
        INNER JOIN Pago ON Pago.pago_id = Cheque.pago_id
        INNER JOIN Fechas ON Fechas.id_fecha = TALONARIO.id_fecha
        INNER JOIN Persona ON Persona.persona_id = Cheque.persona_id
        INNER JOIN Banco as B_Emisor ON B_Emisor.id_banco = Cheque.banco_emisor_id
        INNER JOIN Banco as B_Receptor ON B_Receptor.id_banco = Cheque.banco_receptor_id
        WHERE TALONARIO.talon_tipo_id = Cheque.Cheque_id;
    `, (err, data, fields) => {
        if (err) {
            console.error('Error al obtener los datos: ', err.message);
            res.sendStatus(500);
            console.log(data);
        } else {
            res.send(data);
        }
    });
});

router_Talones.get("/talonario/recibo", proxy_talones, (req, res) => {
    con.query(`
        SELECT 
            TALONARIO.talon_id as id_talon,
            Recibo_caja.recibo_caja_id as id_Recibo_caja,
            Fechas.fecha as date,
            TALONARIO.descripcion as descripcion,
            Libros.libro_name as Perteneciente,
            Pago.pago_id as pago_id,
            Usuario.usu_id as Referente,
            Persona.persona_nombre as Pagador,
            SUM(COALESCE(Pago.monto_num, 0)) as monto,
            SUM(COALESCE(Pago.total, 0)) as pago,
            SUM(COALESCE(Pago.monto_num, 0) + COALESCE(Pago.total, 0)) as Total_a_pagar
        FROM TALONARIO
        INNER JOIN Libros ON Libros.libro_id = TALONARIO.libro_id
        INNER JOIN Usuario ON Usuario.usu_id = Libros.responsable_id
        INNER JOIN Recibo_caja ON Recibo_caja.recibo_caja_id = TALONARIO.talon_id
        INNER JOIN Pago ON Pago.pago_id = Recibo_caja.pago_id
        INNER JOIN Fechas ON Fechas.id_fecha = TALONARIO.id_fecha
        INNER JOIN Persona ON Persona.persona_id = Recibo_caja.persona_id
        WHERE TALONARIO.talon_tipo_id = Recibo_caja.recibo_caja_id
        GROUP BY TALONARIO.talon_id, Recibo_caja.recibo_caja_id, Fechas.fecha, TALONARIO.descripcion, Libros.libro_name, Pago.pago_id, Usuario.usu_id, Persona.persona_nombre;
    `, (err, data, fields) => {
        if (err) {
            console.error('Error al obtener los datos: ', err.message);
            res.sendStatus(500);
            console.log(data);
        } else {
            res.send(data);
        }
    });
});


router_Talones.post("/talonario/cheque", proxy_talones, (req, res) => {
    const { talon_id, cheque_id, pago_id, usuario_referente, date, libro, descripcion, beneficiario, banco_emisor, banco_receptor } = req.body;
    con.query(`
        INSERT INTO TALONARIO (
            talon_id, 
            cheque_id, p
            ago_id, 
            usuario_referente, 
            date, 
            libro, 
            descripcion, 
            beneficiario, 
            banco_emisor, 
            banco_receptor)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [talon_id, cheque_id, pago_id, usuario_referente, date, libro, descripcion, beneficiario, banco_emisor, banco_receptor], (err, result) => {
        if (err) {
            console.error('Error al insertar el cheque: ', err.message);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router_Talones.post("/talonario/factura", proxy_talones, (req, res) => {
    const { talon_id, cheque_id, pago_id, usuario_referente, date, libro, descripcion, beneficiario, banco_emisor, banco_receptor } = req.body;
    con.query(`
        INSERT INTO TALONARIO (
            talon_id, 
            cheque_id, p
            ago_id, 
            usuario_referente, 
            date, 
            libro, 
            descripcion, 
            beneficiario, 
            banco_emisor, 
            banco_receptor)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [talon_id, cheque_id, pago_id, usuario_referente, date, libro, descripcion, beneficiario, banco_emisor, banco_receptor], (err, result) => {
        if (err) {
            console.error('Error al insertar el cheque: ', err.message);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});


export default router_Talones;