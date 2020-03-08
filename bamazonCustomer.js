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
    console.log("connected as id" + connection.threadId);
});

function startApp() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        // Draws table
        console.table(res);
        
        // prompt customer product id and quantity
        promptCustomer();
    }
    
)};


    function promptCustomer() {
        inquirer.prompt([
            {
                name: "productID",
                type:"input",
                message: "Please enter the ID of the product you would like to purchase."
            },
            {
                name: "productQuantity",
                type:"input",
                message: "Please enter the product quantity you would like to purchase."
            },
        
        ])
        
                .then(function (response) {
                var idRequest = response.productID;
                var qRequest = response.productQuantity;
                Order(idRequest,qRequest);
        
                });
        };

    function Order(productID, qNeeded) {
        connection.query("Select * FROM products WHERE item_id = " + productID, function (err, res) {
            if(err) {
                console.log(err)
            };

            if (qNeeded <= res[0].stock_quantity) {
                var costTotal = res[0].price * qNeeded;
                console.log("Your in luck, item is in stock!");
                console.log("Total cost for " + ""+ qNeeded + " " + res[0].product_name +" "+ "is" + " " + costTotal + " ,"+ "Thank you!");
                // console.log("UPDATE products SET stock_quantity = stock_quantity - " + qNeeded + " Where item_id = " + productID);
                connection.query("UPDATE products SET stock_quantity = stock_quantity - " + qNeeded + " Where item_id = " + productID);

            } else {
                console.log("Sorry, insufficient amount in stock for requested item. Please try again.")
            };
            startApp();
           
        });
                
    };
    
    startApp();

        

