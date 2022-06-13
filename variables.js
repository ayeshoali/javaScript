// let has block scope while var does not
// VAR IGNORES CODE BLOCK

var number = 45;
console.log({ number });


// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

for (let j = 0; j < 5; j++) {
    console.log(j);
}
//console.log(j);