// Function - Input (argument), code, output (return value)

let greetUser = function (){
    console.log('Welcome user!');
}

greetUser();
greetUser();
greetUser();

let square = function (num) {

    let result = num * num;
    return result;
}


let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);


// Challenge Area

// convert fahrenheit to Celesius

let convertFahrenheitToCelsius = function (fahrenheit)
{
let celsius = (fahrenheit - 32) * (5/9);
return celsius;

}

// call a couple of times ( 32 -> 0) (68 -> 0 )
let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
