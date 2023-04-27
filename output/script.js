"use strict";
function multiply(a, b) {
    return a * b;
}
console.log(multiply('pobitrodeb', 15)); // This is not working because when I send param I decleared param type() a: number)
console.log(multiply(3, 4));
// Array Type 
let friuts = ['Apple', 'Banana', 'Orange'];
let newFriuts = friuts.push('mango');
console.log(newFriuts);
// When you send mix array 
let mixData = ['12', 'Fist name ', true, 'Ok'];
let newMixData = mixData.push('New Data');
console.log(newMixData);
//Object 
let student = {
    name: 'KeyaMoni Roy',
    roll: 301974,
    depatment: 'CSE'
};
student.name = 'Pobitro Deb';
// Explicit & Union Types Session: 
let a = [];
let b = []; // this is union 
b.push(54521, 'this is string');
// Dynamic Type Session 
let d = [];
d.push('this is sting');
d.push(451215);
// How to use Functions - TypeScript
// ---------- TypeScript Function --------- 
let myFunction;
myFunction = () => {
    console.log('function working');
};
myFunction();
// when set param with data type 
const students = (a, b, c) => {
    console.log(`Hello ${a} , ${b}`);
};
students('Rajib', 'Swapon');
// Function Signatures
let userDetails; // void is return type 
userDetails = (id, userInfo) => {
};
// Classes - TypeScript
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name}, ${this.age}, ${this.country} is playing`);
    }
}
const mashrafi = new Player('Mashrafi', 40, 'Ban');
const shakib = new Player('Sakib', 39, 'Ban');
// console.log(mashrafi.name);
// console.log(shakib.age);  
const players = [];
players.push(shakib);
