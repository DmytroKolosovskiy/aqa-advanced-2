// const sentence = "Це речення яке має кілька слів";
// const words = sentence.split(" ");
// console.log(words);
//
// const newSentence = words.join("_");
// console.log(newSentence);

// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.indexOf(15);
// console.log(index);

// const numbers = [10, 20, 30, 40, 50];
// const hasTwenty = numbers.includes(20);
// console.log(hasTwenty);
// const stack = [1, 2];
// stack.push(3);
// console.log(stack);

// const stack = [1, 2];
// const lastEl = stack.pop();
// console.log(lastEl);
// console.log(stack);

// const stack = [1, 2, 3, 4];
// const firstEl = stack.shift();
// console.log(firstEl);
// console.log(stack);

// const stack = [1, 2, 3, 4];
// stack.unshift(9, 10, 15, 18);
// console.log(stack);

// робимо з двох масивів один
// const arr1 = [1, 2];
// const arr2 = [3, 4];
//
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// метод slice
// const numbers = [1, 2, 3, 4, 5];
// const sliceArray = numbers.slice(0, 3);
// console.log(sliceArray);
// не передаємо аргументи- робить копію нашого масиву повністю
// const numbers = [1, 2, 3, 4, 5];
// const sliceArray = numbers.slice(1);
// console.log(sliceArray);

// const arr1 = [1, 2];
// const arr2 = [3, 4];
//
// const arr3 = arr2.concat([]);
// console.log(arr3);

//const colors = ["Червоний", "зелений", "синій"];
// colors.splice(1, 0, "Жовтий", "Оранжевий");
// console.log(colors);

// const colors = ["Червоний", "зелений", "синій"];
// colors.splice(1, 1);
// console.log(colors);

const colors = ["Червоний", "зелений", "синій"];
colors.splice(2, 1, "Оранжевий");
console.log(colors);
