// forEach
 let fruits = ["apple", "banana", "cherry"];
 fruits.forEach((item, index) => {
   console.log(`Item: ${item}, Index: ${index}`);
 });

// map
 let numbers = [1, 2, 3, 4, 5];
 let doubled = numbers.map((num) => {
     return num * 2;
 });
 console.log(numbers)
console.log(doubled);

// filter
 let numbers1 = [1, 2, 3, 4, 5];
 let evenNumbers = numbers1.filter((num) => num % 2 === 0);
 console.log(evenNumbers);

//find
 let numbers2 = [1, 2, 3, 4, 5];
 let foundNumber = numbers2.find((num) => num > 3);
 console.log(foundNumber);

//indexOf
 let fruits1 = ["apple", "banana", "cherry"];
 let index = fruits1.indexOf("banana");
 console.log(index); 

//sort
 let name = ["apple", "banana", "aherry"];
 name.sort();
 console.log(name); 
 let numbers3 = [5, 300, 8, 50, 2];
 numbers.sort((a, b) => a - b);
 console.log(numbers3); 

//Real Life Example
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 60 },
  { name: "Jim", score: 95 },
];

const passedStudents = students.filter((student) => student.score >= 70);
console.log(passedStudents.map(s=>s.name)); 