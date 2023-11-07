function a() {
  b();
  c();
}
function b() {
  console.log("Функція b");
}
function c() {
  console.log("Функція c");
}

a();
