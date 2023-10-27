const averageAge = 101;
switch (true) {
  case averageAge <= 60:
    console.log("He задовільно");
    break;
  case averageAge >= 60 && averageAge <= 70:
    console.log("Задовільно");
    break;
  case averageAge >= 71 && averageAge <= 80:
    console.log("Добре");
    break;
  case averageAge >= 81 && averageAge <= 90:
    console.log("Дуже добре");
    break;
  case averageAge >= 91 && averageAge <= 100:
    console.log("Відмінно");
    break;
  default:
    console.log("A person is too smart");
}
