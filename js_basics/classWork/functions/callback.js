// function foo(callback) {
//   console.log("before callback");
//   callback();
//   console.log("after callback");
// }
// function sayHallo() {
//   console.log("Hello");
// }
// foo(sayHallo);
// console.log("---------------------------");
// foo(function () {
//   console.log("Hi");
// });

// function getCardType(cardNumber) {
//   switch (true) {
//     case cardNumber.startsWith("4111"):
//       return "Visa";
//     case cardNumber.startsWith("5555") && cardNumber.endsWith("4444"):
//       return "MasterCard";
//     default:
//       throw new Error("Unknown Card Provider");
//   }
// }
// function processPayment(cb) {
//   console.log("Before Payment Actions");
//   cb();
// }
// const processVisa = () => console.log("Processing Visa Payment");
// const processMasterCard = () => console.log("Processing MasterCard Payment");
// const cardNumber = "4111 4444 4444 4449";
//
// if (getCardType(cardNumber) === "Visa") {
//   processPayment(processVisa);
// } else if (getCardType(cardNumber) === "MasterCard") {
//   processPayment(processMasterCard);
// }

function readFile(onSuccess, onFailure) {
  try {
    if (Date.now() % 2 !== 0) throw new Error("Something Went Wrong");
    onSuccess();
  } catch (e) {
    console.log(e.message);
    onFailure();
  }
}
const onSuccess = () => console.log("SUCCESS");
const onError = () => console.log("ERROR HAPPENED");
readFile(onSuccess, onError);
