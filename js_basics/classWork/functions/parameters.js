// function printGreeting(name = "Anonymous") {
//   console.log(`Hello ${name}!`); // передаємо сюди наш шаблонний рядок name
// }
// printGreeting("Joe");
// printGreeting("Elise");
// printGreeting();

// function calculateSum() {
//   const args = Array.from(arguments);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   return sum;
// }
// console.log(calculateSum(1, 2, 4));
// console.log(calculateSum(1, 2, 4, 5));

function calculateSum(num1, num2) {
  console.log(num1);
  console.log(num2);
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  return sum;
}

console.log(calculateSum(1, 2, 4, 5));
