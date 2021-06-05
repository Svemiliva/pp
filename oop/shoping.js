"use strict";

(function () {
  // console.log("Hi");
  function Product(productName, productPrice, expirationDate) {
    this.productID = Math.floor(10000 * Math.random() * 9);
    this.productName = productName;
    this.productPrice = productPrice.toFixed(2);
    this.expirationDate = expirationDate;
    this.getInfo = function () {
      this.firstLetter = this.productName[0];
      this.lastLetter = this.productName[productName.length - 1];
      return this.firstLetter.toUpperCase() + this.lastLetter.toUpperCase() + "" + this.productID + ", " + this.productName + ", " + this.productPrice;
    };
  };
  function ShoppingBag() {
    this.date = new Date();
    console.log(this.date);
    this.currentYear = this.date.getFullYear();
    this.listOfProducts = [];
    this.addProduct = function (product) {
      if (this.currentYear <= product.expirationDate) {
        this.listOfProducts.push(product);
      };
    };
    //find total price first, to find average
    this.getTotalPrice = function () {
      var sum = 0;
      this.listOfProducts.forEach(function (element) {
        sum += parseFloat(element.productPrice);
      });
      return sum.toFixed(2);
    };
    this.getAveragePrice = function () {
      return (this.getTotalPrice() / this.listOfProducts.length).toFixed(3)
    }
    this.getMostExpensive = function () {
      var mostExpensivePrice = 0;
      var mostExpensiveProduct;
      this.listOfProducts.forEach(function (num) {
        if (parseFloat(num.productPrice) > mostExpensivePrice) {
          mostExpensivePrice = parseFloat(num.productPrice);
          mostExpensiveProduct = num.productName;
        }
      })
      return "The most Expensive Product is " + mostExpensiveProduct + ", and his price is " + mostExpensivePrice;
    };
  };
  function PaymentCard(accountBallance, status, validity) {
    this.accountBallance = accountBallance.toFixed(2);
    this.status = status;
    this.validity = validity;
  }
  function checkoutAndBuy(shoppingBag, paymentCard) {
    if (shoppingBag.getTotalPrice() <= parseFloat(paymentCard.accountBallance)) {
      return "Purchase is successful";
    } else {
      return "There is not enough money. The missing ammount is: " + (shoppingBag.getTotalPrice() - paymentCard.accountBallance);
    }
  }
  try {
    var shoppingBag1 = new ShoppingBag();
    var product1 = new Product("Bannana", 330, "2022.");
    var product2 = new Product("Aple", 100, "2028.");
    var product3 = new Product("Kivi", 30, "2032.");
    var paymentCard1 = new PaymentCard(3000, "active", "valid");
    shoppingBag1.addProduct(product1);
    shoppingBag1.addProduct(product2);
    shoppingBag1.addProduct(product3);
    console.log(shoppingBag1.listOfProducts);
    console.log(shoppingBag1.listOfProducts[0].productPrice);
    console.log(shoppingBag1.getTotalPrice());
    console.log(shoppingBag1.getMostExpensive());
    console.log(checkoutAndBuy(shoppingBag1, paymentCard1));
    console.log();
  } catch (error) {
    console.log("Error message: " + error.message)
  }
})();




