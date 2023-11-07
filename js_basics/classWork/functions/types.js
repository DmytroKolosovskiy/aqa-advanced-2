//function declaration
// function calculateSumDeclaration(num1, num2) {
//   return num1 + num2
// }
// console.log(calculateSumDeclaration(calculateSum(1, 2));
//
// function  expression
// const calculateExpression = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(calculateExpression(2, 3));
//
// arrow functions
// const calculateSumArrow = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(calculateSumArrow(2, 3));
//console.log(calculateSumPreciseArrow(10, 50));

// precise arrow function
// const calculateSumPreciseArrow = (num1, num2) => num1 + num2;
// console.log(calculateSumPreciseArrow(2, 8));

// console.log(age);
// var age = 18;
//
//function declaration
// console.log(calculateSumDeclaration(1, 2));
// function calculateSumDeclaration(num1, num2) {
//   return num1 + num2;
// }

const user = {
  name: "Alice",
  age: 12,
  printName: function () {
    console.log(`Hello I am ${this.name} and my age is ${this.age}`);
  },
};
user.printName();
