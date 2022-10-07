//union types => uses for selecting one type from multiple 
//literal types => these types are basically user defined types.



// function combine(input1:number | string, input2: number | string, resultConversion: 'as-string' | 'as-number') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' && resultConversion === 'as-number') {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }

//     return result

//     // if (resultConversion === 'as-number') {
//     //     return +result;
//     // } else {
//     //     return result.toString();
//     // }
    
// }
// console.log(combine(4,29, "as-number"));
// console.log(combine(4,29, "as-string"));




//type aliases

// type conversionDescriptor = 'as-string' | 'as-number'  //type aliases

// function combine(input1:number | string, input2: number | string, resultConversion: conversionDescriptor) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' && resultConversion === 'as-number') {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }

//     return result

//     // if (resultConversion === 'as-number') {
//     //     return +result;
//     // } else {
//     //     return result.toString();
//     // }
    
// }
// console.log(combine(4,29, "as-number"));
// console.log(combine(4,29, "as-string"));




// Never type

function generateError(message: string, code: number) {
    throw  { message: message, errorCode: code};
}



generateError("An error occurred!", 500) 



























