function ShopProduct (title, price) {
    this.title = title
    this.price = price
}
ShopProduct.prototype.getTitle = function () {
    return this.title
}
ShopProduct.prototype.setTitle = function (title) {
    this.title = title
}
ShopProduct.prototype.setPrice = function (price) {
    this.price = price
}
ShopProduct.prototype.getPrice = function (price) {
    return this.price
}
ShopProduct.prototype.getInfo = function () {
    return 'Info'
}

function CDProduct(title, price, playLength) {
    this.playLength = playLength;
    ShopProduct.call(this, title, price);
}
CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = ShopProduct;

CDProduct.prototype.setPlayLength = function(playLength) {
    return this.playLength = playLength
}

CDProduct.prototype.getPlayLength = function() {
    return this.playLength
}

function BookProduct(title, price, numPages) {
    this.numPages = numPages;
    ShopProduct.call(this, title, price)
}
BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = ShopProduct;

BookProduct.prototype.setNumPages = function(numPages) {
    return this.numPages = numPages
}

BookProduct.prototype.getNumPages = function() {
    return this.numPages
}

const shopProduct = new ShopProduct('cap', '25$')
console.log(shopProduct)

const cdProduct = new CDProduct('CD', '5$')
console.log(cdProduct)

const bookProduct = new BookProduct('Eloquent JS', '30$')
console.log(bookProduct)

console.log(bookProduct.setNumPages(100))
console.log(bookProduct.getNumPages())
