// Load Node.JS Modules
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql');

// Load DB Credentials for .env
const keys = require('./keys');

// Instatiate connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: keys.mysql.username,
    password: keys.mysql.password,
    database: 'bamazon'
});

// Connect to the database
db.connect() 

// Runtime Function
const main = function() {
    console.log('Welcome to Bamazon \n\r');
    printProducts();
}

// Display the products on the console screen and prompt the user
const printProducts = function() {
    db.query('SELECT * FROM products', function(err, results, fields) {
        results.forEach(record => {
            console.log(`${record.itemId} - ${record.productName} [${record.price}]`);
        });
        console.log(''); // Add single blank line after product list
        placeOrder();
    });
};

// PROMPT INPUT
const placeOrder = function() {
    inquirer.prompt([{
        type: 'input',
        name: 'itemId',
        message: 'Enter which product to purchase:',
        validate: isValidNumber,
        filter: Number
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'Enter the Quantity:',
        validate: isValidNumber,
        filter: Number
    }]).then(answers => {
        const itemNo = answers.itemId;
        const quantity = answers.quantity;

        // Query the database for the product selected
        db.query(`SELECT * FROM products WHERE itemId = ${itemNo}`, function(error, results) {
            if(error) throw error;
            
            // If query results are empty, log and error and display the products.
            if(results.length === 0) {
                console.log('ERROR: An item with the ID you specified does not exist. Please enter a valid item number.');
                printProducts();
            } else {
                const productData = results[0];
                // If the quantity selected is less than the stock quantity, subtract the quantity from stock, calculate the order total, display results and exit app.
                if(quantity <= productData.stockQuantity) {
                    console.log(`The item "${productData.productName}" is available in the quantity "${quantity}".`);

                    const stockLevel = productData.stockQuantity - quantity
                    const orderTotal = productData.price * quantity

                    db.query(`UPDATE products SET stockQuantity = ${stockLevel} WHERE itemId = ${itemNo}`, function (error, results) {
                        if(error) throw error;
                        console.log(`\n\r Order Submitted Successfully.\n Order Total: $${orderTotal}\n`);
                        exit(0);
                    });
                } else {
                    console.log(`The item "${productData.productName}" is not available in the requested quantity. Please select a different quantity.`);
                    printProducts();
                }
            }
        });
    })
}

// HELPER FUNCTIONS //
// Validate is a Postive Non-Zero Number
const isValidNumber = function(value) {
    const number = Number.isInteger(parseFloat(value));
    const sign = Math.sign(value);

    if(number && sign === 1) {
        return true;
    } else {
        return false;
    }
}

// Close the database connection and exit NodeJS
const exit = function(ErrorCode) {
    db.end();
    return process.exit(ErrorCode);
}

// RUNTIME
main();