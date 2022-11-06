function Plan(name, price, pages) {

    this.name = name;
    this.price = price;
    this.pages = pages;

}

Plan.prototype.calcAnnual = function () {   //with prototyping we can add member functions and data members to class and also in object in js
    return this.price * 12;
}

var plan1 = new Plan("Basic", 3.99, 10)
var plan2 = new Plan("Professional", 5.99, 50)
var plan3 = new Plan("Ultimate", 9.99, 500)


plan1.calcAnnual()