 //Write a function that takes a string as input and 
 //returns the length of the string.
 function getStringLength(str) {
    return str.length;
  }
let myString = "Hello, world!";
let length = getStringLength(myString);
console.log(length);

 //Write a function that takes a string as input and 
 //returns the string in uppercase letters.
 function toUpperCase(str) {
    return str.toUpperCase();
  }
let name = "milcah nkatha";
let upperCaseString = toUpperCase(name);
console.log(upperCaseString);

//Write a function that takes a string as input and 
//returns the string in lowercase letters.
function toLowerCase(str){
  return str.toLowerCase();
}
let names = "FAVOUR MAKENA";
let lowerCaseString = toLowerCase(names);
console.log(lowerCaseString);

//Write a function that takes a string as input and 
//returns the first character of the string.
function getFirstCharacter(str) {
  return str.charAt(0);
}
let character = "Faith Kinya";
let firstCharacter = getFirstCharacter(character);
console.log(firstCharacter); 

//Write a function that takes a string as input and 
//returns the last character of the string.
function getLastCharacter(str) {
  return str.charAt(str.length - 1);
}
let person = "Sally Moraa";
let lastCharacter = getLastCharacter(person);
console.log(lastCharacter); 
//Write a function that takes two strings as 
//input and concatenates them together.
function concatenateStrings(str1, str2, str3) {
  return str1 + str2 + str3;
}
let myString1 = "Samuel ";
let myString2 = "Kimathi ";
let myString3 = "Makini";
let concatenatedString = concatenateStrings(myString1, myString2, myString3);
console.log(concatenatedString); 
//Write a function that takes two strings as 
//input and checks if they are equal.
function areStringsEqual(str1, str2) {
  return str1 === str2;
}
let myString4 = "milcah";
let myString5 = "Milcah";
let result = areStringsEqual(myString4, myString5);
console.log(result);
//Write a function that takes two strings as input and returns the index 
//of the first occurrence of the second string in the first string. 
//If the second string does not occur in the first string, the function should return -1.
function findIndexOfSubstring(str1, str2) {
  return str1.indexOf(str2);
}
let name1 = "Nelson Bonnke";
let name2 = "Bonnke";
let index = findIndexOfSubstring(name1, name2);
console.log(index); 

//Write a function that takes a string as input and 
//returns a new string with all the vowels removed.


//Write a function that takes a string as input and 
//returns a new string with all the consonants removed.

