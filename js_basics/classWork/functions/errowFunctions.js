// const calculateArea = (width, height) => {
//   return width * height;
// };
// const calculateArea = (width, height) => {   // явне приведення
//   return width * height;
// };
//
// const calculateArea = (width, height) => width * height;  //неявне приведення

//Лексичне значення this

// const user = {
//   name: "Alice", // не стрілочна функція
//   printName: function () {
//     console.log(this.name);
//   },
// };
// user.printName();

// const user = {
//   name: "Alice",
//   printName: function () {
//     console.log(this.name);
//   },
// };
//
// const user2 = {
//   name: "Joe",
// };
// user.printName();
// user.printName.call(user2);

// function foo() {
//   console.log(Array.from(arguments));
// }
// foo(1, 2, 3);
const bar = (num1, num2, ...rest) => {
  console.log(num1, num2);
  console.log(rest);
};
bar(1, 2, 3, "Hello", true);
