create database cars;

create table car (
car_id int not null primary key auto_increment,
car_model varchar(20),
car_make varchar(20),
car_reg varchar(20),
car_colour varchar(20)
);

create table customer (
cust_id int not null primary key auto_increment,
cust_lastname varchar(20),
cust_surname varchar(50),
cust_dob date
);

create table cust_address (
cust_add int not null primary key  auto_increment,
cust_house_no int(4),
cust_address_1 varchar(100),
cust_address_2 varchar(100),
cust_address_postcode (6),
cust_country varchar(30)
);

create tablepurchase (
purchase_id int not null primary key auto_increment,
purchase_date date,
car_id int not null,
cust_id int not null,
cust_add int not null
);

ALTER TABLE `purchase` ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`cust_add`) REFERENCES `cars`.`cust_address`(`cust_add`) ON DELETE RESTRICT ON UPDATE RESTRICT; 