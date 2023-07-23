-- Active: 1690092600382@@localhost@3306@Talonarios
USE Talonarios;
INSERT INTO Usuario (usu_id, usu_nickname, usu_email, contraseña) VALUES
(1, 'user1', 'user1@example.com', 'password1'),
(2, 'user2', 'user2@example.com', 'password2'),
(3, 'user3', 'user3@example.com', 'password3'),
(4, 'user4', 'user4@example.com', 'password4'),
(5, 'user5', 'user5@example.com', 'password5');

INSERT INTO Libros (libro_name, talon_cant, responsable_id) VALUES
('Libro A', 50, 1),
('Libro B', 30, 2),
('Libro C', 20, 3),
('Libro D', 40, 4),
('Libro E', 25, 5);

INSERT INTO Ubicacion (ubicacion_direccion, ubicacion_ciudad, ubicacion_estado, ubicacion_pais) VALUES
('Calle 1, No. 123', 'Ciudad A', 'Estado X', 'País 1'),
('Avenida 2, No. 456', 'Ciudad B', 'Estado Y', 'País 2'),
('Carrera 3, No. 789', 'Ciudad C', 'Estado Z', 'País 3'),
('Calle 4, No. 1011', 'Ciudad D', 'Estado W', 'País 4'),
('Avenida 5, No. 1213', 'Ciudad E', 'Estado V', 'País 5');

INSERT INTO Persona (persona_id, persona_nombre, person_phone, person_email, ubicacion_id) VALUES
(10001, 'Persona 1', '3181234567', 'persona1@example.com', 1),
(10002, 'Persona 2', '3179876543', 'persona2@example.com', 2),
(10003, 'Persona 3', '3105555555', 'persona3@example.com', 3),
(10004, 'Persona 4', '3151111111', 'persona4@example.com', 4),
(10005, 'Persona 5', '3142222222', 'persona5@example.com', 5);

INSERT INTO Metodo_pago (metodo_pago_id, mp_nombre) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta de crédito'),
(3, 'Transferencia bancaria'),
(4, 'Cheque'),
(5, 'PayPal');

INSERT INTO Pago (monto_num, monto_palabras, valor_unitario, subtotal_por_item, total, metodo_pago_id) VALUES
(500, 'Quinientos pesos', 50, 250, 500, 1),
(1000, 'Mil pesos', 100, 200, 1000, 2),
(1500, 'Mil quinientos pesos', 200, 300, 1500, 3),
(2000, 'Dos mil pesos', 250, 250, 2000, 4),
(2500, 'Dos mil quinientos pesos', 500, 1000, 2500, 5);

INSERT INTO TALONS (talon_fecha, descripcion, libro_id, persona_id, responsable_id, talon_tipo_id, ubicacion_id, metodo_pago_id) VALUES
('2023-07-19 08:30:00', 'Descripción 1', 1, 10001, 1, 1, 1, 1),
('2023-07-20 10:00:00', 'Descripción 2', 2, 10002, 2, 2, 2, 2),
('2023-07-21 12:30:00', 'Descripción 3', 3, 10003, 3, 3, 3, 3),
('2023-07-22 14:00:00', 'Descripción 4', 4, 10004, 4, 4, 4, 4),
('2023-07-23 16:30:00', 'Descripción 5', 5, 10005, 5, 5, 5, 5);

INSERT INTO Cheque (persona_id, pago_id) VALUES
(10001, 1),
(10002, 2),
(10003, 3),
(10004, 4),
(10005, 5);

INSERT INTO Factura (terminos_condiciones, N_I_T, comprador_id, vendedor_id, pago_id) VALUES
('Términos y condiciones 1', 123456789, 10001, 10002, 1),
('Términos y condiciones 2', 987654321, 10003, 10004, 2),
('Términos y condiciones 3', 135792468, 10005, 10001, 3),
('Términos y condiciones 4', 246813579, 10002, 10003, 4),
('Términos y condiciones 5', 987654321, 10004, 10005, 5);

INSERT INTO Recibo_caja (recibo_caja_id, persona_id, pago_id) VALUES
(1, 10001, 1),
(2, 10002, 2),
(3, 10003, 3),
(4, 10004, 4),
(5, 10005, 5);

--* REFERENCIA DE INNER JOIN
/* SELECT *
FROM Cheque
INNER JOIN `Persona` ON Cheque.persona_id= Persona.persona_id; */

/* SELECT * FROM `Usuario`
INNER JOIN `TALONS` ON Usuario.usu_id = TALONS.responsable_id;
*/

SELECT 
    libro_id as id,
    libro_name as nombre,
    talon_cant as cantidad_libros,
    usu_nickname as responsable
    
    FROM `Libros`
    LEFT JOIN `Usuario`
    ON Libros.libro_id = Usuario.usu_id;
INNER JOIN `Usuario` ON TALONS.responsable_id = Usuario.usu_id;

SELECT persona_id as id,
    persona_nombre as nombre,
    person_phone as teléfono,
    person_email as email,
    ubicacion_direccion as direccion
FROM `Persona`
LEFT JOIN `Ubicacion` ON Persona.ubicacion_id = Ubicacion.ubicacion_id;

DELETE FROM Ubicacion;
DELETE FROM TALONS;
DELETE FROM Recibo_caja;
DELETE FROM Persona;
DELETE FROM Pago;
DELETE FROM Metodo_pago;
DELETE FROM Libros;
DELETE FROM Factura;
DELETE FROM Cheque;

