let name = ' Mike Nunn ';


// Length property
console.log(name.length); 

// convert to upper case

console.log(name.toUpperCase());

//convert to lowercase
console.log(name.toLowerCase());

//includes method
let password = 'abc123xxx098';

console.log(password.includes('password'));

//Trim

console.log(name.trim());

// Challenge area

//isValidPassword
let isValidPassword = function(password)
{
 return(password.length > 8 && !password.includes('password'));

}
// length is more then 8 and doesn't contain the word password

console.log(isValidPassword('asdpf'));
console.log(isValidPassword('abc123@#@@!'));
console.log(isValidPassword('asdpassdfpoipassword'));


