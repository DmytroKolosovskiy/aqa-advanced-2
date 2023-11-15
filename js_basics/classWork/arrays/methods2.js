// const numbers = [1, 2, 3, 4, 5];
// const cb = (value, index, array) => {
//   console.log(value, index, array);
// };
// numbers.forEach(cb);

// const numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach((value) => {
//   console.log(value);
// });

// const numbers = [1, 2, 3, 4, 5];  // метод filter
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// const users = [
//   { name: "Joe", age: 12 },
//   { name: "Alice", age: 22 },
//   { name: "Piter", age: 38 },
// ];
// const adultUsers = users.filter((user) => user.age >= 18);
// console.log(adultUsers);

//Метод fined
// const users = [
//   { name: "Joe", age: 12 },
//   { name: "Alice", age: 22 },
//   { name: "Piter", age: 38 },
// ];
// const joe = users.find((user) => user.name === "Joe");
// const unknown = users.find((user) => user.name === "ololo");
// console.log(joe);
// console.log(unknown);
//Метод map
// const fruits = ["apple", "banana", "orange"];
// const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
// console.log(upperFruits);
// Метод sort
// const fruits = ["apple", "banana", "orange", "grape"];
// fruits.sort();
// console.log(fruits);
// Метод reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, number) => {
//   acc = acc + number;
//   return acc;
// });
// console.log(sum);
// ще коротший спосіб:
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, number) => acc + number);
// console.log(sum);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, number) => acc + number, 10);
console.log(sum);
