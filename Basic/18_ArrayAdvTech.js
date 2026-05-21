// Array Reduce() method 
// Synax
// array.reduce((accumulator, currentValue
//     )=> [initialValue])
//Example
 const numbers = [10,20,30];
 const sum = numbers.reduce((acc, curr) => {
     return acc + curr;
 }, 0);
 console.log(sum);

//Slice vs Splice
// Slice
//eXAMPLE
 const fruits = ['apple', 'banana', 'cherry', 'date'];
 const slicedFruits = fruits.slice(1, 3); 
 console.log(slicedFruits); 
 console.log(fruits); 

// Splice
//eXAMPLE
 const fruits2 = ['apple', 'banana', 'cherry', 'date'];
 const splicedFruits = fruits2.splice(1, 2,"x","y"); 
 console.log(splicedFruits); 
 console.log(fruits2); 


//concat
// Example
 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];
 console.log(array1.concat(array2));

//Flat
// Example
 const nestedArray = [1, 2, [3, 4], [5, 6,[7,8]]];
 const flattenedArray = nestedArray.flat();
 console.log(flattenedArray); 
 console.log(nestedArray.flat(2)); 

//Spread operator (...)
// Example
 const array5 = [1, 2, 3];
 const array6 = [4, 5, 6];
 console.log([...array1, 10,20,30,...array6]);


//Destructuring
// Example
//syntax
// const [first, second] = ["html", "css"];
const array3 = [1, 2, 3];
const [a, b, c] = array3;
console.log(a); 
console.log(b); 
console.log(c); 
const [first, second] = ["html", "css"];
console.log(first); 
console.log(second);