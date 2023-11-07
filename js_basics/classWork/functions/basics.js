// console.log("Before Function Declaration");
// parameters
// function calculateSum(num1, num2) {
//   const sum = num1 + num2;
//   console.log("Sum:", sum);
// }
// console.log("After Function Declaration");
// console.log("Before function call");
// arguments (це те що у круглих дужках)
// calculateSum(2, 3);
// console.log("After function call");

//function printHello() {
//   console.log("Hello JS");
// }
// printHello();

function calculateSum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const sum = calculateSum(2, 4);
//const sum = 6
console.log(sum);
