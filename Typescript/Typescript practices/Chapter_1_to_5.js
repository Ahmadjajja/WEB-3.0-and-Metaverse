//Chapter 5 Practices
//Type assertion 
var str = '12345';
var str2 = str; //str is now of type number
console.log(str2);
//infered typing
// In infered typing, TypeScript will find the first usage of the 
// variable within the code, determine the type to which it has been initially set and then 
// assume the same type for this variable in the rest of your code block.
// var num=2; // data type inferred as number
// console.log("value of num "+num);
// num="12";
// console.log(num);
//Above code throws an error because initially variable set to Number and now assigning string value to this number
//Example: Variable Scope
var global_num = 12; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable
    };
    Numbers.sval = 10; //static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable 
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
