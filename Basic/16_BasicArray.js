//Array
 let name = ["mohit",24,true,"kumar"];
 console.log(name);
 console.log(name[0]);
 console.log(name[1]);
 console.log(name[2]);
 console.log(name[3]);
 console.log(name[4]);

 name[4]="singh";
 console.log(name);
 console.log(name[4]);
 name[1]=25;
 console.log(name);
 console.log(name[1]);
 console.log(name.length);

// Array Method
//push
let fruits = ["apple", "banana", "orange"];
 fruits.push("mango");
 console.log(fruits); 
 console.log(fruits.length); 

//pop
 let lastFruit = fruits.pop();
 console.log(lastFruit); 
 console.log(fruits); 
 console.log(fruits.length); 

//shift
let firstFruit = fruits.shift();
console.log(firstFruit); 
console.log(fruits); 
console.log(fruits.length); 

//unshift
fruits.unshift("kiwi", "grape");
console.log(fruits); 
console.log(fruits.length); 