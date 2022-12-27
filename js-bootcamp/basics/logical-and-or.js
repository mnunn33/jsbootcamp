let temp = 55;

// Logical AND Operator - True if both sides are true. False otherwise.
// Logical OR Operator - True if atleast one side is true. False otherwise

if(temp >= 60 && temp <= 90){
    console.log('It is pretty nice out');
} else if(temp <= 0  || temp >=120){
    console.log('Dont Go outside');
}
else{
    console.log('Eh, do what you want')
}

// Challenge Area

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

//Are both Vegan? Only offer up Vegan Dishes.
if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer Vegan Dishes')
}
// At least one Vegan?  Make sure to offer up some Vegan options.
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some Vegan options')
}
//Else, offer up anything on the menu.
else{
    console.log('Offer up anything on the menu')
}
