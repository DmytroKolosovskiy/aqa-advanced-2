// console.log("Before loop");
// for (let i = 0; i < 10; i++) {
//   console.log(`index: ${i}`);
//   if (i === 5) {
//     throw new Error("Index should not be equal to 5 ever");
//   }
// }
// console.log("After loop");
try {
  console.log("Before loop");
  for (let i = 0; i < 10; i++) {
    console.log(`index: ${i}`);
    if (i === 5) {
      throw new Error("Index should not be equal to 5 ever");
    }
  }
} catch (err) {
  console.log(err.message);
} finally {
  console.log("From finally block");
}

console.log("After loop");
