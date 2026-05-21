 let i = 0;
 while (i < 5) {
     console.log(i);
    i++;
 }

 let j = 6;
do {
    console.log(j);
    j++;
} while (j < 5);

//Real Life Example
let password = "";
let correctPassword = "admin";
do {
    password = prompt("Enter your password:");
} while (password !== correctPassword); 
console.log("Access granted!");