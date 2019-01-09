# Welcome to BAMAZON
BAMAZON is a command-line based storefront.

## Before You Begin ##
Before you begin using BAMAZON, you will need to complete the following tasks:
1. Install required NPM Modules using `install npm`
2. Setup the MySQL Database using the `bamazon_db.sql`
3. Populate the MySQL Database with data. Seed data is available in `seed-demo.sql`
4. Create a .env file to store your MySQL credentials
```
# MySQL Database Credentials
MYSQL_DB_USERNAME=your-mysql-username
MYSQL_DB_PASSWORD=your-mysql-password
```

## What does BAMAZON do? ##
BAMAZON allows you to purchase items via command-line terminal style interface.

### Launch BAMAZON ###
```
node bamazonCustomer.js
```
![Demo of bamzonCustomer Interface](/images/bamazon-customer.gif)