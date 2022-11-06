function Plan(name, price, pages) {

    this.name = name;
    this.price = price;
    this.pages = pages;

}

Plan.prototype.calcAnnual = function () {
    return this.price * 12;
}

var plan1 = new Plan("Basic", 3.99, 10)
var plan2 = new Plan("Professional", 5.99, 50)
var plan3 = new Plan("Ultimate", 9.99, 500)


plan1.calcAnnual()
// console.log(plan1.calcAnnual())