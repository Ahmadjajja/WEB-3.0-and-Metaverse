// //MCQ #01

// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
//     throw "Error 2"
// })
// .catch(function(error) {
//     console.log(error);
// })

// .then(function() {
//     console.log('Success 4');
// });





// //MCQ #02



// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);   // success

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);      // Defeat

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);    // error

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);     // Error Caught

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
//     throw new Error('test');
// })
// .catch(function(data) {
//     console.log('Error:', data.message);
//     return new Error('test');
// })
// .then(function(data) {
//     console.log('Success:', data.message);
// });

