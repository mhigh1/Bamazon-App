USE bamazon;

INSERT INTO departments (departmentId, departmentName, overheadCost) VALUES
(1,'Electronics',0.00),
(2,'Home & Kitchen',0.00),
(3,'Movies, Music, & Games',0.00),
(4,'Sports & Outdoors',0.00),
(5,'Clothing',0.00);

INSERT INTO products (productName, departmentId, price, stockQuantity) VALUES 
('Apple iPad',1,499.99,20),
('Amazon Echo',1,69.99,10),
('OXO Salad Spinner',2,29.95,15),
('OXO Measuring Cup Set',2,12.00,5),
('OXO Cutting Board (12x12)',2,18.99,8),
('Chirstmas Vacation [DVD]',3,17.99,25),
('Avengers - Infinity War [Blu-Ray]',3,19.99,30),
('Soccer Ball - Atlanta United',4,19.99,20),
('TalorMade Burner Golf Balls',4,24.99,5),
('Croft & Barrow 1/4-ZIP Sweater, Blue',5,26.99,2);