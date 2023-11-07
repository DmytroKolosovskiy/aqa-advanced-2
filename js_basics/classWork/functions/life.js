(function () {
  //функція яка викликається одразу під час її оголошення
  console.log("Hello From Life!");
})();

foo(function () {
  // звичайна функція
  console.log("Hi!!");
});

foo(() => {
  //стрілочна функція
  console.log("Hi!!");
});
