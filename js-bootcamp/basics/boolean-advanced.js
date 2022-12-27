let isAccountLocked = false;
let userRole = 'user';

if(isAccountLocked){

    console.log('Is account locked');
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
}
else {
    console.log ('Welcome!')
}


// Challenge area
let temp = 45;



//Its freezing outside 31
if(temp <= 32){
    console.log('Its freezing outside');
}
// it's hot outside 110
else if(temp >=110){
console.log('Its pretty hot outside!');
}
// go for. Its pretty nice. 45
else{
 console.log('Go for It. It is pretty nice.')
}

