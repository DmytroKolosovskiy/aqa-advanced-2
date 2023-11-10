function divide(numerator, denominator) {
  if (denominator === 0 || isNaN(numerator) || isNaN(denominator)) {
    throw new Error("Error. Home Work. You need to insert correct data");
  }
  return numerator / denominator;
}
try {
  const div = divide(10, 0);
  console.log(div);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("Work completed");
}
