//Lexical Scope
function outer() {
  let name = "Sajid Shaikh";
  function inner() {
    console.log(name);
  }
  inner();

}
outer();

//Closure
function greet(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}
const greetSajid = greet("Sajid");
greetSajid(); 