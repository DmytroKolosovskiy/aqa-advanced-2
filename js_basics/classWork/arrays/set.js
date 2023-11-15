const arr = [1, 1, 2, 3, 1, 2, 3, 4, 4, 5];
const set = new Set([1, 1, 2, 3, 1, 2, 3, 4, 4, 5]);
set.add(1);
set.add(7);
console.log([...set]);
