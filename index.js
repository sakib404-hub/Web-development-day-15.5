let numbers = [1, 5, 10, 15, 20, 30, 10, 11, 41, 57, 45, 37];
let indexi =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// How many elemests we are haiving in the array 
console.log(numbers.length);

console.log(numbers);
console.log('1st Element is : ',numbers[0]);
console.log('10th Element is : ', numbers[9]);

let forth = numbers[4 - 1];
console.log('Forth element is : ',forth);

console.log('7th element before the update : ', numbers[6]);
 
// Changing element value by index :
let sixth = numbers[6] * 2;
numbers[6] = sixth;
console.log('Doubled the previous values : ', numbers[6]);