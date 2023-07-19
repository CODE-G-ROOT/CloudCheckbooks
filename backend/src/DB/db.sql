-- Active: 1689075950615@@localhost@3306@Talonarios
CREATE DATABASE Talonarios;
DROP DATABASE Talonarios;
USE Talonarios;

CREATE TABLE User_ (
    usu_id INT NOT NULL PRIMARY KEY,
    usu_surname VARCHAR(25) NOT NULL,
    usu_email VARCHAR(64) NOT NULL,
    usu_password VARCHAR(64) NOT NULL
);

CREATE TABLE Books (
    book_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    book_name VARCHAR(25) NOT NULL,
    talon_cant INT,
    responsable_id INT NOT NULL,
    CONSTRAINT fk_book_user FOREIGN KEY (responsable_id) REFERENCES User_ (usu_id)
);

CREATE TABLE Location_ (
    location_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    location_adress VARCHAR(50) NOT NULL,
    location_city VARCHAR(76) NOT NULL,
    location_state VARCHAR(56) NOT NULL,
    location_country VARCHAR(47) NOT NULL
);

CREATE TABLE Person (
    person_id INT PRIMARY KEY NOT NULL,
    person_first_name VARCHAR(45) NOT NULL,
    person_second_name VARCHAR(45) NOT NULL,
    person_firt_surname VARCHAR(45) NOT NULL,
    person_second_surname VARCHAR(45) NOT NULL,
    person_phone VARCHAR(15),
    person_email VARCHAR(64) NOT NULL
);

CREATE TABLE Categories(
    categories_id INT PRIMARY KEY NOT NULL,
    categories_name VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE Method_Pay (
    mp_id INT PRIMARY KEY NOT NULL,
    mb_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Pay_facture(
    pay_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    amount_num INT NOT NULL,
    amount_word VARCHAR(150) NOT NULL,
    unitary_value INT NOT NULL,
    subtotal_for_item INT NOT NULL,
    total INT NOT NULL,
    mp_id INT NOT NULL,
    CONSTRAINT fk_pay_methods_pay FOREIGN KEY (mp_id) REFERENCES Method_Pay (mp_id)
);

CREATE TABLE TALONS (
    talon_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    talon_date DATETIME NOT NULL,
    descripción VARCHAR(2000) NOT NULL,
    book_id INT NOT NULL,
    person_id INT NOT NULL,
    categories_id INT NOT NULL,
    location_id INT NOT NULL,
    mp_id INT NOT NULL,
    CONSTRAINT fk_talons_book FOREIGN KEY (book_id) REFERENCES Books (book_id),
    CONSTRAINT fk_talons_person FOREIGN KEY (person_id) REFERENCES Person (person_id),
    CONSTRAINT fk_talons_categories FOREIGN KEY (categories_id) REFERENCES Categories (categories_id),
    CONSTRAINT fk_talons_location FOREIGN KEY (location_id) REFERENCES Location_ (location_id),
    CONSTRAINT fk_talons_methods_pay FOREIGN KEY (mp_id) REFERENCES Method_Pay (mp_id)
);

CREATE TABLE CHECK_(
    check_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    categories_id INT NOT NULL,
    mp_id INT NOT NULL,
    pay_id INT NOT NULL,
    CONSTRAINT fk_check_categories FOREIGN KEY (categories_id) REFERENCES Categories (categories_id),
    CONSTRAINT fk_check_pay_facture FOREIGN KEY (pay_id) REFERENCES Pay_facture (pay_id)
);

CREATE TABLE BILL (
    bill_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    terms_conditions VARCHAR(2000) NOT NULL,
    N_I_T INT NOT NULL,
    buyer_id INT NOT NULL,
    seller_id INT NOT NULL,
    categories_id INT NOT NULL,
    pay_id INT NOT NULL,
    CONSTRAINT fk_bill_person_buyer FOREIGN KEY (buyer_id) REFERENCES Person (person_id),
    CONSTRAINT fk_bill_person_seller FOREIGN KEY (seller_id) REFERENCES Person (person_id),
    CONSTRAINT fk_bill_categorie FOREIGN KEY (categories_id) REFERENCES Categories (categories_id),
    CONSTRAINT fk_bill_pay_facture FOREIGN KEY (pay_id) REFERENCES Pay_facture (pay_id)
);

CREATE TABLE CASH_RECEPCT (
    cash_id INT PRIMARY KEY NOT NULL,
    person_id INT NOT NULL,
    categories_id INT NOT NULL,
    mp_id INT NOT NULL,
    pay_id INT NOT NULL,
    CONSTRAINT fk_cash_person FOREIGN KEY (person_id) REFERENCES Person (person_id),
    CONSTRAINT fk_cash_categories FOREIGN KEY (categories_id) REFERENCES Categories (categories_id),
    CONSTRAINT fk_cash_pay_facture FOREIGN KEY (pay_id) REFERENCES Pay_facture (pay_id)
);


    --firm  NOT NULL


--INSERTS

INSERT INTO `Location_` (location_id, location_adress, location_city, location_state, location_country) VALUES 
(1, "calle 104E #10-09", "Bucaramanga", 'Santander', 'Colombia'),
(2, 'calle 103E #12-18', "Barrancabermeja", "Santander", "Colombia");

INSERT INTO `Person` (person_id, person_first_name, person_second_name, person_firt_surname, person_second_surname, person_phone, person_email) VALUES 
(1005210392, 'Juan', 'David', 'Avila', 'Ravelo', 3182415511, 'juanavila8856@gmail.com'),
(1098275511, 'Diana', 'Milena', 'Ravelo', 'Hernandez', 3176537249, 'diana83@gmail.com');

--HAY UN ERROR, NO DEJA PONER MÁS DE 9 NÚMEROS

INSERT INTO `Categories` (categories_id, categories_name) VALUES
(1, "CHECK_"),
(2, "BILL"),
(3, "CASH_RECEPCT"),
(4, "Pay_facture");

INSERT INTO `Method_Pay` (mp_id, mb_name) VALUES
(1, "Efectivo"),
(2, "Debito"),
(3, "Credito");

INSERT INTO `Pay_facture` (pay_id, amount_num, amount_word, unitary_value, subtotal_for_item, total, mp_id) VALUES 
(1, 150.000, "Ciento cincuenta mil", 12, 14, 150.000, 1);

INSERT INTO `TALONS` (talon_id, talon_date, descripción, person_id, categories_id, location_id, mp_id) VALUES
(1, '2023-07-19 15:30:00', "esto da igual", 1005210392, 1, 1, 1);

INSERT INTO `CHECK_` (check_id, categories_id, mp_id, pay_id) VALUES
(1, 1, 1, 1),
(2,2,2,1);

INSERT INTO `BILL` (bill_id, terms_conditions, N_I_T, buyer_id, seller_id, categories_id, pay_id) VALUES
(1, "VALE MONDÁAAAAAAAAAAAAAAA", 4684123, 1, 2, 1, 1);