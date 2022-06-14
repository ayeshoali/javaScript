//SPREAD 

let num1 = [1, 2, 3];
let num2 = [...num1, 4, 5, 6];
let num3 = [num1, 4, 5, 6];
console.log(num2);
console.log(num3);


function add(a, b, c) {
    console.log("sum: " + (a + b + c));
}
add(...num1);

// REST

let X = [1, 2, 3];
let Y = [4, 5, X];
let Z = [4, 5, 6, ...X];
console.log(Y);
console.log(Z);

//TEMPLATE STRINGS

let myString = `Hi, i'm Ayesha 
 and i'm practicing JS`;
console.log(myString);

//ENHANCED OBJECT LITERALS

// let speed = 60;
// let model = "Audi";
// let myCarr = {
//     speed,
//     model,
//     drive() {
//         console.log("i'm driving");
//     },
//     getSpeed() {
//         console.log("my speed is " + this.speed);
//     }
// };
// console.log(`${myCarr.drive()}`);


//ARROW FUNCTIONS

let myNewCar = {
    speed: 60,
    model: "audi",
    drive() {
        console.log("i'm driving");
    },
    getSpeed() {
        speeD = () => {
            console.log("my speed is " + this.speed);
        };
        speeD();

    }
};

myNewCar.getSpeed();


//SETS

let mySet = new Set();
mySet.add("ayesha", "ali", "farhan", "waris");
mySet.size;
mySet.has("ayesha");