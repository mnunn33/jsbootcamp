let myBook = {
 title: '1984',
 author: 'George Orwell',
 pageCount: 326
};


console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);


// Challenge area

// name, age, location

// Mike is 45 and lives in Denver
// Increase the age by 1 and print message again

let person = {
    name : 'Mike',
    age: 45,
    location : 'Denver'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;    


console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
