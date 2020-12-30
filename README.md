# Bamazon (Node/MySQL)
Bamazon is a store application with functualities similar to Amazon using node 
and MySql to store and update stock based on user's input.

### How to access the app
    1. Clone repp
    2. Run `npm install`
    3. Run `node bamazonCustomer` inside the terminal. Make sure you are inside the file.
### Usage

1. A table of products, including it's quanitity and the price, will display and the user will be prompt with two questions:
```
? Please enter the ID of the product you would like to purchase.
? Please enter the product quantity you would like to purchase.
```


2. Once the customer chooses their product and desired quanitity, they are given the total cost of their amount of items. Once their total cost is given, the mySQL data will then update the amount of items left in the inventory and be displayed in Bamazon. 
It will then prompt the customer to choose an item again to choose and item and re-updating the stock.

![image2](https://user-images.githubusercontent.com/54917461/76154973-452c9080-609a-11ea-9429-588452236403.png)

3. If customer chooses a quantity of a product thats over the amount that is available on Bamazon, it will alert the customer of insufficient funds and prompt them to choose an item again and the quantity.

![image3](https://user-images.githubusercontent.com/54917461/76154972-42ca3680-609a-11ea-9939-082f8f8ba8df.png)

Technologies used:
* JavaScript/JQuery
* Node.js
* mySQL

## Credits
<b>Created By:</b> Mone Duncans-Francis -[Mone12](https://github.com/Mone12)
