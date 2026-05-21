//Heap vs Stack memory

//Heap memory example
let person1 = {
    name: "Sajid",
    age: 30
};
let person2 = person1
person2.name = "Vajid";
console.log(person1.name); 
console.log(person2.name); 

//Stack memory example
let a = 10;
let b = a;
b = 20;
console.log(a); 
console.log(b); 