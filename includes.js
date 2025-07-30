let friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam', 'khailam'];

// Determines whether an array includes a certain element, returning true or false as appropriate.
// and includes is a case sensetive 
console.log(friends.includes('salam'));

if(friends.includes('khailam')){
    console.log('Parrty!!!');
}
else{
    console.log('There will be no party and food is not available');
}