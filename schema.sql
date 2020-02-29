DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
item_id INT(3) NOT NULL, 
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY(item_id)

);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone x", "electronics", 799.89, 40),
	("sweatshirt", "activewear", 16.99, 100),
	("headphone", "electronics", 89.99, 65),
    ("watch", "accessories", 199.99, 25),
    ("soap", "hygiene", 5.99, 80),
    ("necklace", "accessories", 49.99, 40),
    ("sunglasses", "accesories", 10.89, 75),
    ("tissue", "hygiene", 3.99, 100),
    ("television", "electronics", 999.89, 15),
    ("sneakers", "activewear", 59.99, 40)