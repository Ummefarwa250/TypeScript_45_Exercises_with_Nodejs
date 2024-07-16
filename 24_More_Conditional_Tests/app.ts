//Test for equality and inequality with strings.

const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2);
console.log(str1 !== str2 );

//Test using the lower case function.

const text1: string = "Hello World";
const text2: string = "hello wprld";
console.log(text1.toLowerCase() === text2);

//Numerical test involving equality ,inequality, greater than and less than,greater than or equal to and  less than or equal to.

const num1: number = 20;
const num2: number = 15;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//Tests using "and" and "or" operators.

const a: number = 20;
const b: number = 40;
const c: number = 60;

console.log(a < b && b < c);
console.log(a < b || b < c);
console.log(a > b && b < c);
console.log(a > b || b > c );

//Test  whether an item is not in an array.

const fruits: string[] =['Strawberry', 'Water melon', 'orange','Cherry' ];

console.log(fruits.includes("orange"));
console.log(fruits.includes("kiwi"));

//test whether an item is not in an array.

const color: string[] = ['blue', 'yellow','green','pink'];

console.log(!color.includes("black"));
console.log(!color.includes("blue"));


 
