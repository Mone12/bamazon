var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    localhost: '',
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connection successful');
    
});