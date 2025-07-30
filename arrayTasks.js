// task -1 
let fruits = ['Apple', 'Grapes', 'Mangoes', 'Suger cane', 'Banana'];
console.log('4th Element(3rd index) of the array is:', fruits[3]);

// Chaning the 3re element to jambura 
fruits[2] ='jambura';
console.log(fruits);

// task - 2
let touristDestination = ['Meghalaya', 'Thanchi, Bandarban', 'Pink Lake, Australia'];
touristDestination.push('Coxs Bazar');
touristDestination.push('DabuDil');
touristDestination.push('SirajGanj');
touristDestination.pop();
console.log(touristDestination);

// task - 2  checking it the javascript book is availabe in the book array
let books = ['The God Father', 'Isabel', 'Cindarella', 'BishBrikkho'];

if(books.includes('JavaScript Book')){
    console.log('The Book is present in the array');
}
else{
    console.log('The Book is not present in the Array');
}

// task-4  checking the type if a type is a array type

let num = 90;
let bool = false;
let numbers = [2, 4, 5];

console.log(Array.isArray(num));
console.log(Array.isArray(bool));
console.log(Array.isArray(numbers));

// task - 5 How to concat two array togather

let array1 = [1, 2, 4];
let array2 = [4, 6, 8];
let margedArray = array1.concat(array2);
console.log(margedArray);