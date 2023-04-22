// 1.Implement a function that takes an array of numbers as 
// input and returns a sorted array using mergesort.

function mergeSort(num){
  if(num.length<=1){
    return num;
  }
  let middle = Math.floor(num.length/2);
  let left = num.slice(0,middle);
  let right = num.slice(middle);
  return sortedArray(mergeSort(left),mergeSort(right));
  }
  function sortedArray(left,right){
  let emptyArray=[];
  while(left.length && right.length ){
  if(left[0]<right[0]){
  emptyArray.push(left.shift());
  }
  else{
  emptyArray.push(right.shift());
  }
  }
  return[...emptyArray,...left,...right];
  }
   let num =mergeSort([5, 3, 1, 4, 2]);
   console.log(mergeSort(num));
  
// 2.How does the time complexity of mergesort compare to other 
// sorting algorithms like quicksort and insertion sort?
// 3.Implement a function that takes an array of strings as 
//input and returns a sorted array using mergesort.

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left,right){
  let result = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift());    
  } else{
    result.push(right.shift());
  }
}
return[...result,...left,...right];
}
let arr = ["Apple", "Banana", "Cherry", "Dates", "Berry"];
console.log(mergeSort(arr));

//4.How does mergesort handle arrays with duplicate elements?


//5.What is the space complexity of mergesort and how 
//does it compare to other sorting algorithms?
//6.Implement a function that takes an array of objects with a numeric "value" 
//property and returns a sorted array based on the "value" property using mergesort.

function mergeSort(str){
  if(str.length <= 1){
    return str;
  }
  let middle = Math.floor(str.length / 2);
  let left = str.slice(0,middle);
  let right = str.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let emptyStr = [];
  while (left.length && right.length) {
    if (left[0].value <= right[0].value) {
      emptyStr.push(left.shift());
    } else {
      emptyStr.push(right.shift());
    }
  }
  return [...emptyStr,...left,...right]
}
const str = [
  { name: "Apple", value: 5 },
  { name: "Banana", value: 3 },
  { name: "Cherry", value: 7 },
  { name: "Dates", value: 1 },
  { name: "Berry", value: 2 },
];
// const sortedArr = mergeSort(arr);
console.log(mergeSort(str)); 



//7.How does mergesort handle arrays of different lengths?
//8.Implement a function that takes an array of arrays as input and 
//returns a sorted array of the elements in the sub-arrays using mergesort.
//9.How can you modify the mergesort algorithm to sort an array in reverse order?

//10.Write a function that takes two strings as input and returns the index of
// the first occurrence of the second string in the first string,
//If the second string does not occur in the first string.

function findIndex(str1, str2) {
  return str1.indexOf(str2);
}
const str1 = "Milcah Nkatha";
const str2 = "Nkatha";
const index = findIndex(str1, str2);
console.log(index);



