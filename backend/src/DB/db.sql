-- Active: 1689192748746@@localhost@3306@Talonarios
CREATE DATABASE Talonarios;
DROP DATABASE Talonarios;
USE Talonarios;

CREATE TABLE Location_ (
    location_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    location_adress VARCHAR(50),
    location_city VARCHAR(76),
    location_state VARCHAR(56),
    location_country VARCHAR(47)
);

CREATE TABLE Person (
    person_id INT PRIMARY KEY NOT NULL,
    person_name VARCHAR(45) NOT NULL,
    person_phone INT(15),
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
    person_id INT NOT NULL,
    categories_id INT NOT NULL,
    location_id INT NOT NULL,
    mp_id INT NOT NULL,
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
    CONSTRAINT fk_check_methods_pay FOREIGN KEY (mp_id) REFERENCES Method_Pay (mp_id),
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

--emisor_firm NOT NULL,

CREATE TABLE CASH_RECEPCT (
    cash_id INT PRIMARY KEY NOT NULL,
    person_id INT NOT NULL,
    categories_id INT NOT NULL,
    mp_id INT NOT NULL,
    pay_id INT NOT NULL,
    CONSTRAINT fk_cash_person FOREIGN KEY (person_id) REFERENCES Person (person_id),
    CONSTRAINT fk_cash_categories FOREIGN KEY (categories_id) REFERENCES Categories (categories_id),
    CONSTRAINT fk_cash_methods_pay FOREIGN KEY (mp_id) REFERENCES Method_Pay (mp_id),
    CONSTRAINT fk_cash_pay_facture FOREIGN KEY (pay_id) REFERENCES Pay_facture (pay_id)
);


    --firm  NOT NULL
