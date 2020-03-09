# bamazon-Node/MySQL


## Description
Bamazon is a store application with functualities similar to Amazon using node 
and MySql to store and update stock based on user's input.

### MySQL Database

* To create a table database of products for the bamazon I made a mySql Schema and then transferred it to VScode by requiring the package.

![mysql](https://user-images.githubusercontent.com/54917461/76154970-41990980-609a-11ea-8cad-19ec988ff3b8.png)

### Bamazon Interface
* To access Bamazon in the terminal, the customer has to run "node bamazonCustomer" which will display
a table of products including it's quanitity and the price as shown in the picture below.

* The user will be prompt with two questions asking which item would they like to buy by entering in the item_id number
and the quantity they would like to purchase.

![image1](https://user-images.githubusercontent.com/54917461/76154974-478eea80-609a-11ea-8f89-b086cc37d7de.png)

* Once the customer chooses their product and desired quanitity, they are given the total cost of their amount of items. 
* Once their total cost is given, the mySQL data will then update the amount of items left in the inventory and be displayed in Bamazon. 
* It will then prompt the customer to choose an item again to choose and item and re-updating the stock.

![image2](https://user-images.githubusercontent.com/54917461/76154973-452c9080-609a-11ea-9429-588452236403.png)

* If customer chooses a quantity of a product thats over the amount that is available on Bamazon, it will alert the customer of insufficient funds and prompt them to choose an item again and the quantity.

![image3](https://user-images.githubusercontent.com/54917461/76154972-42ca3680-609a-11ea-9939-082f8f8ba8df.png)


