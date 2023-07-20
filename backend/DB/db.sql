-- Active: 1689192748746@@localhost@3306@Talonarios
DROP DATABASE Talonarios;
CREATE DATABASE Talonarios;
USE Talonarios;


CREATE TABLE Usuario (
    usu_id INT NOT NULL PRIMARY KEY,
    usu_surname VARCHAR(50) NOT NULL,
    usu_email VARCHAR(64) UNIQUE,
    contraseña VARCHAR(50)
);

CREATE TABLE Libros (
    libro_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    libro_name VARCHAR(25) NOT NULL,
    talon_cant INT,
    responsable_id INT NOT NULL,
    CONSTRAINT fk_libros_responsable_id FOREIGN KEY (responsable_id) REFERENCES Usuario (usu_id)
);

CREATE TABLE Ubicacion (
    ubicacion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ubicacion_direccion VARCHAR(50) NOT NULL,
    ubicacion_ciudad VARCHAR(76) NOT NULL,
    ubicacion_estado VARCHAR(56) NOT NULL,
    ubicacion_pais VARCHAR(47) NOT NULL
);

CREATE TABLE Persona (
    persona_id INT PRIMARY KEY NOT NULL,
    persona_nombre VARCHAR(50) NOT NULL,
    person_phone VARCHAR(15),
    person_email VARCHAR(64) NOT NULL
);

CREATE TABLE Metodo_pago (
    metodo_pago_id INT PRIMARY KEY NOT NULL,
    mp_nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Pago(
    pago_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    monto_num INT NOT NULL,
    monto_palabras VARCHAR(150) NOT NULL,
    valor_unitario INT NOT NULL,
    subtotal_por_item INT NOT NULL,
    total INT NOT NULL,
    metodo_pago_id INT NOT NULL,
    CONSTRAINT fk_pay_methodo_pago FOREIGN KEY (metodo_pago_id) REFERENCES Metodo_pago (metodo_pago_id)
);

CREATE TABLE TALONS (
    talon_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    talon_fecha DATETIME NOT NULL,
    descripcion VARCHAR(2000) NOT NULL,
    libro_id INT NOT NULL,
    persona_id INT NOT NULL,
    responsable_id INT NOT NULL,
    talon_tipo_id INT NOT NULL UNIQUE,
    ubicacion_id INT NOT NULL,
    metodo_pago_id INT NOT NULL,
    CONSTRAINT fk_talons_libro_id FOREIGN KEY (libro_id) REFERENCES Libros (libro_id),
    CONSTRAINT fk_talons_persona_id FOREIGN KEY (persona_id) REFERENCES Persona (persona_id),
    CONSTRAINT fk_talons_ubicacion_id FOREIGN KEY (ubicacion_id) REFERENCES Ubicacion (ubicacion_id),
    CONSTRAINT fk_talons_metodo_id FOREIGN KEY (metodo_pago_id) REFERENCES Metodo_pago (metodo_pago_id),
    CONSTRAINT fk_talons_usuario_id FOREIGN KEY (responsable_id) REFERENCES Usuario (usu_id)
);

CREATE TABLE Cheque(
    cheque_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    persona_id INT NOT NULL,
    pago_id INT NOT NULL,
    CONSTRAINT fk_cheque_talons FOREIGN KEY (cheque_id) REFERENCES TALONS (talon_tipo_id),
    CONSTRAINT fk_cheque_persona FOREIGN KEY (persona_id) REFERENCES Persona (persona_id),
    CONSTRAINT fk_cheque_pago FOREIGN KEY (pago_id) REFERENCES Pago (pago_id)
);

CREATE TABLE Factura (
    factura_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    terminos_condiciones VARCHAR(2000) NOT NULL,
    N_I_T INT NOT NULL,
    comprador_id INT NOT NULL,
    vendedor_id INT NOT NULL,
    pago_id INT NOT NULL,
    CONSTRAINT fk_bill_person_comprador FOREIGN KEY (comprador_id) REFERENCES Persona (persona_id),
    CONSTRAINT fk_bill_person_vendedor FOREIGN KEY (vendedor_id) REFERENCES Persona (persona_id),
    CONSTRAINT fk_bill_talons FOREIGN KEY (factura_id) REFERENCES TALONS (talon_tipo_id),
    CONSTRAINT fk_bill_pago FOREIGN KEY (pago_id) REFERENCES Pago (pago_id)
);

CREATE TABLE Recibo_caja (
    recibo_caja_id INT PRIMARY KEY NOT NULL,
    persona_id INT NOT NULL,
    pago_id INT NOT NULL,
    CONSTRAINT fk_cash_persona FOREIGN KEY (persona_id) REFERENCES Persona (persona_id),
    CONSTRAINT fk_cash_talons FOREIGN KEY (recibo_caja_id) REFERENCES TALONS (talon_tipo_id),
    CONSTRAINT fk_cash_talon_tipo FOREIGN KEY (pago_id) REFERENCES Pago (pago_id)
);


    --firm  NOT NULL


--INSERTS

INSERT INTO `Usuario` (usu_id, usu_surname, usu_email, contraseña) VALUES
(1, 12345, 'usuario1@example.com', 'password1'),
(2, 67890, 'usuario2@example.com', 'password2'),
(3, 54321, 'usuario3@example.com', 'password3'),
(4, 98765, 'usuario4@example.com', 'password4'),
(5, 24680, 'usuario5@example.com', 'password5');

INSERT INTO `Libros` (libro_name, talon_cant, responsable_id) VALUES
('Libro1', 10, 1),
('Libro2', 5, 2),
('Libro3', 20, 3),
('Libro4', 8, 4),
('Libro5', 15, 5);

INSERT INTO `Ubicacion` (ubicacion_direccion, ubicacion_ciudad, ubicacion_estado, ubicacion_pais) VALUES
('Calle 1, No. 123', 'Ciudad A', 'Estado X', 'País 1'),
('Avenida 2, No. 456', 'Ciudad B', 'Estado Y', 'País 2'),
('Carrera 3, No. 789', 'Ciudad C', 'Estado Z', 'País 3'),
('Calle 4, No. 1011', 'Ciudad D', 'Estado W', 'País 4'),
('Avenida 5, No. 1213', 'Ciudad E', 'Estado V', 'País 5');

INSERT INTO `Persona` (persona_id, persona_nombre, person_phone, person_email) VALUES
(10001, 'Persona1', '3181234567', 'persona1@example.com'),
(10002, 'Persona2', '3179876543', 'persona2@example.com'),
(10003, 'Persona3', '3105555555', 'persona3@example.com'),
(10004, 'Persona4', '3151111111', 'persona4@example.com'),
(10005, 'Persona5', '3142222222', 'persona5@example.com');

INSERT INTO `Metodo_pago` (metodo_pago_id, mp_nombre) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta de crédito'),
(3, 'Transferencia bancaria'),
(4, 'Cheque'),
(5, 'PayPal');

INSERT INTO `Pago` (monto_num, monto_palabras, valor_unitario, subtotal_por_item, total, metodo_pago_id) VALUES
(500, 'Quinientos pesos', 50, 250, 500, 1),
(1000, 'Mil pesos', 100, 200, 1000, 2),
(1500, 'Mil quinientos pesos', 200, 300, 1500, 3),
(2000, 'Dos mil pesos', 250, 250, 2000, 4),
(2500, 'Dos mil quinientos pesos', 500, 1000, 2500, 5);

INSERT INTO `TALONS` (talon_fecha, descripcion, libro_id, persona_id, responsable_id, talon_tipo_id, ubicacion_id, metodo_pago_id) VALUES
('2023-07-19 08:30:00', 'Descripción 1', 1, 10001, 1, 1, 1, 1),
('2023-07-20 10:00:00', 'Descripción 2', 2, 10002, 2, 2, 2, 2),
('2023-07-21 12:30:00', 'Descripción 3', 3, 10003, 3, 3, 3, 3),
('2023-07-22 14:00:00', 'Descripción 4', 4, 10004, 4, 4, 4, 4),
('2023-07-23 16:30:00', 'Descripción 5', 5, 10005, 5, 5, 5, 5);

INSERT INTO `Cheque` (persona_id, pago_id) VALUES
(10001, 1),
(10002, 2),
(10003, 3),
(10004, 4),
(10005, 5);

INSERT INTO `Factura` (terminos_condiciones, N_I_T, comprador_id, vendedor_id, pago_id) VALUES
('Términos y condiciones 1', 123456789, 10001, 10002, 1),
('Términos y condiciones 2', 987654321, 10003, 10004, 2),
('Términos y condiciones 3', 135792468, 10005, 10001, 3),
('Términos y condiciones 4', 246813579, 10002, 10003, 4),
('Términos y condiciones 5', 987654321, 10004, 10005, 5);

INSERT INTO `Recibo_caja` (recibo_caja_id, persona_id, pago_id) VALUES
(1, 10001, 1),
(2, 10002, 2),
(3, 10003, 3),
(4, 10004, 4),
(5, 10005, 5);

SELECT * FROM `Cheque`;