class Plan {

    constructor(name, price, pages){

        this.name = name
        this.price = price
        this.pages = pages

    }

    calcAnnual(){
        return this.price * 12;
    }

}

class AwesomePlan extends Plan{

    somethingWhichIsnotInPlan(){
        console.log("Yahoo")
    }

}

var plan1 = new Plan("Basic", 3.99, 10)
var plan2 = new Plan("Advanced", 5.99, 20)
var plan3 = new Plan("Professional", 7.99, 30)

var plan4 = new AwesomePlan("Ultimate", 7.99, 30)











