DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE departments (
    departmentId INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(50) NOT NULL,
    overheadCost DECIMAL(10,2),
    PRIMARY KEY (departmentId)
);

CREATE TABLE products (
    itemId INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR(50) NOT NULL,
    departmentId INT NOT NULL,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    stockQuantity INT NOT NULL DEFAULT 0, 
    PRIMARY KEY (itemId),
    FOREIGN KEY (departmentId) REFERENCES departments (departmentId)
);