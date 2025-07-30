let numbers = [10, 11, 15, 17, 19, 21];
let age = [];

console.log(numbers.length);
console.log(numbers);

//Pushing element in the array through the push operation like [arrayName.push(value)]
numbers.push(40);
numbers.push(60, 98, 11, 9);

console.log(numbers.length);
console.log(numbers);

let friends =['balam', 'kalam', 'salam'];
console.log(friends.length);

friends.push('Khailam');
console.log(friends.length);
console.log(friends);
// Elemenating Element from the array using the pop operation 

// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let popEle = friends.pop();
console.log(popEle);
console.log(friends);

// Push and Pop operation always works in the backside of an array when we are pushing an element in the array it goes to the backside of the array and when we are 
// popping an elements its also done in the backside of an array

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
friends.shift();
console.log(friends);
friends.unshift('ghumailam');
console.log(friends);