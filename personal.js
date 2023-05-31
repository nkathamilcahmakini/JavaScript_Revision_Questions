//1.Print the odd numbers less than 100	"for(let i = 1; i <= 100; i ++)
function printOddNumbers(){
  for(let x = 1; x < 100; x += 2)
  console.log(x)
}
printOddNumbers();

//2."Given a string, reverse each word in the sentence.
//Welcome to Javascript class"
function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

const sentence = 'Welcome to Javascript class';
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);

function reverseWords(str) {
  const words = str.split(" ");
  const reversedWords = words.map(word => word.split("").reverse().join(""));
  const reversedString = reversedWords.join(" ");
  return reversedString;
}
const originalString = "Welcome to Javascript class";
console.log(reverseWords(originalString));

//3.Write a JavaScript function that accepts a string as a parameter and 
//converts the first letter of each word of the string in upper case	

function capitalizeWords(str) {
  let words = str.split(' '); 
  for (let z = 0; z < words.length; z++) {
    let word = words[z];
    words[z] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(' ');
}
const name1 = "favour makena"
console.log(capitalizeWords(name1));

//4.Write a JavaScript function that accepts a string as a parameter
//and counts the number of vowels within the string
function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let w = 0; w < str.length; w ++) {
    if (vowels.includes(str[w])){
      count++;
    }
  }
  return count;
}
console.log(countVowels("Milcah Nkatha"));
console.log(countVowels("Samuel Kimathi"));
console.log(countVowels("Evans Makini"));

//5.Write a JS code to calculate the sum of digits in a number
function sumOfDigits(num) {
  let sum = 0;
// Convert number to string to access each digit
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    // Convert each digit back to a number and add to the sum
    sum += parseInt(strNum[i]);
  }

  return sum;
}
console.log(sumOfDigits(1234)); 
console.log(sumOfDigits(45678)); 
console.log(sumOfDigits(99935));

//6.Write a JavaScript program to sort the items of an array	

function sortArray(arr){
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr;
}
const numbers = [5, 8, 7, 1, 4, 6, 3, 2];
const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers);

//7.Write a function that takes an array of numbers as an argument and 
//returns the sum of all the even numbers in the array?	

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumEvenNumbers(nums));

//8.Write a function that takes a string as an argument and returns
//the number of uppercase letters in the string?
function countUpperCaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count++;
    }
  }
  return count;
}

const word = "Milcah Nkatha Makini";
console.log(countUpperCaseLetters(word));
 	
//9.Print the multiplication table with 7
function printMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
printMultiplicationTable(7);

//10.Write a JavaScript for loop that will iterate from 0 to 15. For each
//iteration, it will check if the current number is odd or even, and
//display a message	
 
//11.How do you find the maximum value in an array using JavaScript?	


 //12.Write a JavaScript function that prints out all the even Numbers 
//between the range of (0-10)?

// Expected output = 0,2,4,6,8,10"

//13.Write a function that calculates the sum of numbers in an array of numbers	

//14.Write a JavaScript program to sum the multiples of 3 and 5 under 1000.


//15.Create a function that receives an array of numbers and returns an 
//array containing only the positive numbers	

//16.Write a function that calculates the average of the numbers in an array of numbers
	
//17.Check if a string contains the letter “y”. Print “yes”
//if it does and “no” 
//if it does not.
//let str2 = ""don’t know why"";



//18.Write a program that will check if two strings are palindromes
//let str3=""racecar""
//let str4=""java"""	

//19.Write a JavaScript program that prompts the user to enter their 
//name,and then displays a message that says ""Hello, [name]!""
//If the user does not enter a name, the program should display a
//message saying "Hello, world!"	

//20.Write and invoke one function that takes in a random string and returns the
//following values: first character, last character, length of the string and
//whether it begins with a vowel or not.

function analyzeString(str) {
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);
  const length = str.length;
  const beginsWithVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstChar.toLowerCase());

  return { firstChar, lastChar, length, beginsWithVowel };
}
const stringToAnalyze = "Milcah Nkatha";
const analysis = analyzeString(stringToAnalyze);
console.log(analysis);

// Write a function, timesTables, that prints out multiplication tables 
function multiplicationTable(nums){
  for(i = 1; i<= 12; i++){
    console.log(`${nums} x ${i} = ${nums * i}`)
  }
}
multiplicationTable(12);


// Changing a string to a number and a number to a string
  let str = "9";
  console.log(typeof(+str));

  let num = 10;
  console.log(typeof(num + " "));

// Ternary Operator --They are a shorthand way of writing conditional
// expressions and are often used to make code more concise and readable.
// Here's the basic syntax of a ternary operator in JavaScript:
// condition ? valueIfTrue : valueIfFalse

  let age = 18;
  let warning;
  age >= 18? (warning = "You can play")
           : (warning = "You cannot play")
  console.log(warning);         








