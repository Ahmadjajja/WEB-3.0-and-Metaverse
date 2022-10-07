//union types => uses for selecting one type from multiple 
//literal types => these types are basically user defined types.
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' && resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
console.log(combine(4, 29, "as-number"));
console.log(combine(4, 29, "as-string"));
