"use strict";

(function (){
  function Product (productName, productPrice, expirationDate, productCode) {
    this.productID = Math.floor(10000 * Math.random() * 9);
    this.productName = productName;
    this.productPrice = productPrice;
    this.expirationDate = expirationDate;
    this.productCode = productCode;
    this.shopingBag = [];
    this.getInfo = function () {
      this.firstLetter = this.productName[0];
      this.lastLetter = this.productName[productName.length - 1];
      return this.firstLetter.toUpperCase() + this.lastLetter.toUpperCase() + "" + this.productID;
    }
    this.addProduct = function () {

    }
  }
  var product = new Product("Banana");
  console.log(product.getInfo());

})();
