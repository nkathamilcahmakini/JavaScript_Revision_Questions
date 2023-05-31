//1.Write a function that takes a string as input and 
//returns the length of the string.

 function getStringLength(str) {
    return str.length;
  }
let myString = "Hello, world!";
let length = getStringLength(myString);
console.log(length);

//2.Write a function that takes a string as input and 
//returns the string in uppercase letters.

 function toUpperCase(str) {
    return str.toUpperCase();
  }
let name = "milcah nkatha";
let upperCaseString = toUpperCase(name);
console.log(upperCaseString);

//3.Write a function that takes a string as input and 
//returns the string in lowercase letters.

function toLowerCase(str){
  return str.toLowerCase();
}
let names = "FAVOUR MAKENA";
let lowerCaseString = toLowerCase(names);
console.log(lowerCaseString);

//4.Write a function that takes a string as input and 
//returns the first character of the string.

function getFirstCharacter(str) {
  return str.charAt(0);
}
let character = "Faith Kinya";
let firstCharacter = getFirstCharacter(character);
console.log(firstCharacter); 

//5.Write a function that takes a string as input and 
//returns the last character of the string.

function getLastCharacter(str) {
  return str.charAt(str.length - 1);
}
let person = "Sally Moraa";
let lastCharacter = getLastCharacter(person);
console.log(lastCharacter); 
//6.Write a function that takes two strings as 
//input and concatenates them together.

function concatenateStrings(str1, str2, str3) {
  return str1 + str2 + str3;
}
let myString1 = "Samuel ";
let myString2 = "Kimathi ";
let myString3 = "Makini";
let concatenatedString = concatenateStrings(myString1, myString2, myString3);
console.log(concatenatedString); 
//7.Write a function that takes two strings as 
//input and checks if they are equal.

function areStringsEqual(str1, str2) {
  return str1 === str2;
}
let myString4 = "milcah";
let myString5 = "Milcah";
let result = areStringsEqual(myString4, myString5);
console.log(result);
//8.Write a function that takes two strings as input and returns the index 
//of the first occurrence of the second string in the first string. 
//If the second string does not occur in the first string, the function should return -1.

function findIndexOfSubstring(str1, str2) {
  return str1.indexOf(str2);
}
let name1 = "Nelson Bonnke";
let name2 = "Bonnke";
let index = findIndexOfSubstring(name1, name2);
console.log(index); 

//9.Write a function that takes a string as input and 
//returns a new string with all the vowels removed.

function removevowels(vowels){
  return vowels.replace(/[a,e,i,o,u]/ig," ");
  }
  let vowels="Milcah Nkatha";
    console.log(removevowels(vowels));

//10.Write a function that takes a string as input and 
//returns a new string with all the consonants removed.

function removeConsonants(consonants){
  let vowels ="a,e,i,o,u"
  let newString = " ";
  for(let i = 0; i < consonants.length; i++){
    const low = consonants[i];
    if(vowels.includes(low) && low.match(/[a-z]/i)){
      newString += low
    }
  }
  return newString 
}
let name4 = "Sally Moraa Makini";
console.log(removeConsonants(name4));

//11.Write a function that takes a string as input and 
//returns a new string with all the digits removed.

function digitsRemoved(str){
    return str.match(/\D/g).join(" ");
}
let str="My number is 0734526754 from Kenya"
console.log(digitsRemoved(str))
//12.Write a function that takes a string as input and returns
// a new string with all the non-alphanumeric characters removed.

   function removeNonAlphaNumeric(char){
    return char.replace(/[^A-Za-z0-9]/g, " ");
   }
   let name5 = "My*name_is-Favour_Makena^and&$I/am 5 years old"
   console.log(removeNonAlphaNumeric(name5));
//13.Write a function that takes a string as input and returns 
//a new string with the first letter of each word capitalized.

//14.Write a function that takes a string as input and returns 
//a new string with the first letter of each sentence capitalized.
//15.Write a function that takes a string as input and 
//returns the reverse of the string.
//16.Write a function that takes a string as input and 
//checks if it is a palindrome (reads the same backwards as forwards).
//17.Write a function that takes a string as input 
//and returns the number of words in the string.
//18.Write a function that takes a string as input 
//and returns the number of sentences in the string.
//19.Write a function that takes a string as input and 
//returns the most frequent character in the string.
//20.Write a function that takes a string as input and 
//returns the longest word in the string.

//21.How do you find the missing number in a given integer array of 1 to 100?
function findMissedNum(arrayOfNumbers, n = 100) {
  if(arrayOfNumbers.length === n) {
    console.log("no number is missed");
  }
  if(arrayOfNumbers.length < (n - 1) ) {
    console.log("more than one number is missed")
  }
  let totalSum = (n * (n+1)) / 2;
  let sumOfArray = 0;
  
  for(let i of arrayOfNumbers){
      sumOfArray += i;
  }
  
  return totalSum - sumOfArray;
}
let arrayOfNumbers = Array.from( Array(101).keys())
arrayOfNumbers.shift();
arrayOfNumbers.splice(50, 1)
let missedNum = findMissedNum(arrayOfNumbers, 100);
console.log("The missing number is :", missedNum)





