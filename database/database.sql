CREATE DATABASE appdb;

USE appdb;

CREATE TABLE users (

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100)

);

INSERT INTO recipes (recipe_name, cuisine, difficulty)
VALUES
('Veg Biryani', 'Indian', 'Medium'),
('Masala Dosa', 'South Indian', 'Medium'),
('Paneer Butter Masala', 'North Indian', 'Easy'),
('Chole Bhature', 'Punjabi', 'Medium'),
('Samosa', 'Indian Street Food', 'Easy');