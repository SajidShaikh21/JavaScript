// //String Length
 let str = "Sajid";
 console.log(str.length); 

// //String to Lower Case and Upper Case
 let str1 = "Sajid";
 console.log(str1.toLowerCase()); 
 console.log(str1.toUpperCase()); 

// //charAt() method
 let str2 = "Sajid";
 console.log(str2.charAt(3));

// //indexOf() method
 let str3 = "Sajid";
 console.log(str3.indexOf("j"));

// //includes() method
 let str4 = "Sajid Shaikh";
 console.log(str4.includes("Shaikh")); // T/F

//slice() vs substring()
 let str5 = "Sajid Shaikh";
 console.log(str5.slice(5)); 
 console.log(str5.substring(5)); //0

// //replace() method
let str6 = "Sajid Shaikh";
console.log(str6.replace("Shaikh", "Singh")); 

// //split() method
let str7 = "HTML,CSS,JS";
console.log(str7.split(",")); 

// //trim() method
let str8 = "   Sajid    ";
console.log(str8.trim()); 

// //String Concatenation
let str9 = "Sajid";
let str10 = " Shaikh";
console.log(str9.concat(str10)); 