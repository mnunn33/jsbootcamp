// Global Scope (convert Fahreneheit to Celsius, temp1 and temp2)
// Local scope (fahrenheit, celsisus)
    // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit)
{
let celsius = (fahrenheit - 32) * (5/9);

if(celsius <= 0){
    let isFreezing = true;
}
return celsius;

}

// call a couple of times ( 32 -> 0) (68 -> 0 )
let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);