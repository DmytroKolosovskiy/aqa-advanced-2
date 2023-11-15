// value type
// let a = 12;
// let b = a;
// console.log("a", a);
// console.log("b", b);
// a = 25;
// console.log("a", a);
// console.log("b", b);

// referenceType
// const array1 = ["Hello", "World"];
// const array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// console.log("-------------------------");
// array1[1] = "JS";
// console.log("array1", array1);
// console.log("array2", array2);

// const age = 25;
// function foo(userAge) {
//   userAge = 12;
//   console.log("Inside the function", userAge);
// }
// foo(age);
// console.log("Outside the function", age);

// const ageList = [25, 34, 32];
// function foo(ages) {
//   ages[0] = 18;
//   console.log("Inside the function", ages);
// }
// function foo(ages) {
//   const agesList = Array.from(ages);
//   agesList[0] = 18;
//   console.log("Inside the function", agesList);
// }
// console.log("Outside the function", ageList);
// foo(ageList);
// console.log("Outside the function", ageList);

const ageList = [25, 34, 32];
function foo(ages) {
  // const agesList = Array.from(ages);
  const agesList = [...ages];
  agesList[0] = 18;
  console.log("Inside the function", agesList);
}
console.log("Outside the function", ageList);
foo(ageList);
console.log("Outside the function", ageList);
