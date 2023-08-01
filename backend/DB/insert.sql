USE Talonarios;

INSERT INTO Usuario (usu_id, usu_nickname, usu_email, contraseña, libros_cantidad) VALUES
(1, 'usuario1', 'usuario1@example.com', 'contraseña1', 5),
(2, 'usuario2', 'usuario2@example.com', 'contraseña2', 3),
(3, 'usuario3', 'usuario3@example.com', 'contraseña3', 7),
(4, 'usuario4', 'usuario4@example.com', 'contraseña4', 2),
(5, 'usuario5', 'usuario5@example.com', 'contraseña5', 4);

INSERT INTO Banco (id_banco, banco_name) VALUES
(1, 'Banco A'),
(2, 'Banco B'),
(3, 'Banco C'),
(4, 'Banco D'),
(5, 'Banco E');

INSERT INTO Metodo_pago (mp_nombre) VALUES
('Efectivo'),
('Tarjeta de crédito'),
('Transferencia bancaria'),
('Cheque'),
('PayPal');

INSERT INTO Ubicacion (ubicacion_direccion, ubicacion_ciudad, ubicacion_estado, ubicacion_pais) VALUES
('Calle 1, No. 123', 'Ciudad A', 'Estado X', 'País 1'),
('Avenida 2, No. 456', 'Ciudad B', 'Estado Y', 'País 2'),
('Carrera 3, No. 789', 'Ciudad C', 'Estado Z', 'País 3'),
('Calle 4, No. 1011', 'Ciudad D', 'Estado W', 'País 4'),
('Avenida 5, No. 1213', 'Ciudad E', 'Estado V', 'País 5');

INSERT INTO Libros (libro_name, responsable_id, talon_cant) VALUES
('Libro A', 1, 20),
('Libro B', 2, 15),
('Libro C', 3, 12),
('Libro D', 4, 10),
('Libro E', 5, 25);

INSERT INTO Persona (persona_id, persona_nombre, persona_phone, persona_email, ubicacion_id) VALUES
(10001, 'Persona 1', '3181234567', 'persona1@example.com', 1),
(10002, 'Persona 2', '3179876543', 'persona2@example.com', 2),
(10003, 'Persona 3', '3105555555', 'persona3@example.com', 3),
(10004, 'Persona 4', '3151111111', 'persona4@example.com', 4),
(10005, 'Persona 5', '3142222222', 'persona5@example.com', 5);

INSERT INTO Pago (monto_num, monto_palabras, valor_unitario, subtotal_por_item, total, metodo_pago_id) VALUES
(500, 'Quinientos pesos', 50, 250, 500, 1),
(1000, 'Mil pesos', 100, 200, 1000, 2),
(1500, 'Mil quinientos pesos', 200, 300, 1500, 3),
(2000, 'Dos mil pesos', 250, 250, 2000, 4),
(2500, 'Dos mil quinientos pesos', 500, 1000, 2500, 5);

INSERT INTO Fechas (id_fecha, fecha) VALUES
(1, '2023-07-19'),
(2, '2023-07-20'),
(3, '2023-07-21'),
(4, '2023-07-22'),
(5, '2023-07-23');

INSERT INTO TALONARIO (descripcion, libro_id, talon_tipo_id, metodo_pago_id, id_fecha) VALUES
('Descripción 1', 1, 1, 1, 1),
('Descripción 2', 2, 2, 2, 2),
('Descripción 3', 3, 3, 3, 3),
('Descripción 4', 4, 4, 4, 4),
('Descripción 5', 5, 5, 5, 5);

INSERT INTO Cheque (persona_id, pago_id, banco_emisor_id, banco_receptor_id) VALUES
(10001, 1, 1, 2),
(10002, 2, 3, 4),
(10003, 3, 2, 1),
(10004, 4, 4, 5),
(10005, 5, 5, 3);

INSERT INTO Factura (terminos_condiciones, N_I_T, comprador_id, vendedor_id, pago_id, id_fecha_emision, Id_fecha_vencimiento) VALUES
('Términos y condiciones 1', 123456789, 10001, 10002, 1, 1, 2),
('Términos y condiciones 2', 987654321, 10003, 10004, 2, 2, 3),
('Términos y condiciones 3', 135792468, 10005, 10001, 3, 3, 4),
('Términos y condiciones 4', 246813579, 10002, 10003, 4, 4, 5),
('Términos y condiciones 5', 987654321, 10004, 10005, 5, 5, 1);

INSERT INTO Recibo_caja (persona_id, pago_id) VALUES
(10001, 1),
(10002, 2),
(10003, 3),
(10004, 4),
(10005, 5);


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