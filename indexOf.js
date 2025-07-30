let friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam', 'khailam'];

console.log(friends.indexOf('pailam'));

// -1 means the Element is not in the array 
console.log(friends.indexOf('tomato'));
let bool = true;

// Checking if a particular data type is an array or not 
let food = 'roso gol l a';
console.log(Array.isArray(food));
console.log(Array.isArray(friends));
console.log(Array.isArray(bool));