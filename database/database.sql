CREATE DATABASE appdb;

USE appdb;

CREATE TABLE users (

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100)

);

INSERT INTO users(name,email)

VALUES

('Amrin','amrin@gmail.com'),

('John','john@gmail.com');