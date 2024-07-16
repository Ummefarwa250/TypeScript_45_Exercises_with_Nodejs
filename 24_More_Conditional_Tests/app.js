"use strict";
//Test for equality and inequality with strings.
Object.defineProperty(exports, "__esModule", { value: true });
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
//Test using the lower case function.
const text1 = "Hello World";
const text2 = "hello wprld";
console.log(text1.toLowerCase() === text2);
//Numerical test involving equality ,inequality, greater than and less than,greater than or equal to and  less than or equal to.
const num1 = 20;
const num2 = 15;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//Tests using "and" and "or" operators.
const a = 20;
const b = 40;
const c = 60;
console.log(a < b && b < c);
console.log(a < b || b < c);
console.log(a > b && b < c);
console.log(a > b || b > c);
//Test  whether an item is not in an array.
const fruits = ['Strawberry', 'Water melon', 'orange', 'Cherry'];
console.log(fruits.includes("orange"));
console.log(fruits.includes("kiwi"));
//test whether an item is not in an array.
const color = ['blue', 'yellow', 'green', 'pink'];
console.log(!color.includes("black"));
console.log(!color.includes("blue"));
