"use strict";

(function (){
   // console.log("Hi");
  function Product (productName, productPrice, expirationDate, productCode) {
    this.productID = Math.floor(10000 * Math.random() * 9);
    this.productName = productName;
    this.productPrice = productPrice.toFixed(2);
    this.expirationDate = expirationDate;
    this.productCode = productCode;
    this.getInfo = function () {
      this.firstLetter = this.productName[0];
      this.lastLetter = this.productName[productName.length - 1];
      return this.firstLetter.toUpperCase() + this.lastLetter.toUpperCase() + "" + this.productID + ", "+ this.productName + ", " + this.productPrice;
    }
}
    function ShopingBag () {
        this.listOfProducts= [];
    this.addProduct = function (product) {
        product.array.forEach(function (element) {
            if (!expirationDate) {
                throw new Error('Invalid expirationDate')
            }
            this.listOfProducts.push(product);
        });

    }
  }
  var product = new Product ("Banana", 100);
  console.log(product.getInfo(product));
  

})();
