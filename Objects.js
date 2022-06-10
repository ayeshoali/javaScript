// let myCar = {
//     speed: 60,
//     Model: "Audi",
//     drive: function() {
//         console.log("i'm driving");
//     },
//     getSpeed: function() {
//         console.log("my speed is " + this.speed);
//     }
// }

function myCar(speed, Model) {
    this.speed = speed;
    this.Model = Model;
    this.drive = function() {
        console.log("i'm driving");
    };
    this.getSpeed = function() {
        console.log("my speed is " + this.speed);
    };
}
let car = new myCar(40, "Honda");
car.drive();
car.getSpeed();
console.log(car);


//Date Object

let today = new Date();
console.log(today);
console.log("month " + today.getMonth());
console.log("day " + today.getDay());
console.log("date " + today.getDate());
console.log("year " + today.getFullYear());
console.log("time " + today.getTime());