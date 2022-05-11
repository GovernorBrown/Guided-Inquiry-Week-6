//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
//.reduce is a method that adds all elements within an array together
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));

