// відповідає умові більше 18 років
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
checkAge(25);
console.log(checkAge(25));

// не відповідає умові більше 18 років
function checkAge1(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
checkAge(15);
console.log(checkAge1(15));
