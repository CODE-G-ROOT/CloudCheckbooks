-- Active: 1689192748746@@localhost@3306@Talonarios
DROP DATABASE Talonarios;
CREATE DATABASE Talonarios;
USE Talonarios;


CREATE TABLE Usuario (
    usu_id INT NOT NULL PRIMARY KEY,
    usu_nickname VARCHAR(50) NOT NULL,
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



SELECT * FROM `Cheque`;