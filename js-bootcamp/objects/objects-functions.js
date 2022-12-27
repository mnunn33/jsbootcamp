let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
   };

   let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
   };
   
   
   let getSummary = function (book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
   }

  let bookSummary =  getSummary(myBook);
  let otherBookSummary =  getSummary(otherBook);

  console.log(bookSummary.pageCountSummary);

  // Challenge area
  // Create Function - take fahrenheit in  - return object with all three


//   let convertFahrenheitToCelsius = function (fahrenheit)
//   {
//   let celsius = (fahrenheit - 32) * (5/9);
//   return celsius;
  
//   }

//   let convertFarenheitToKelvin = function(fahrenheit){
//       let kelvin = (fahrenheit -32)* (5/9) +273.15;
//       return kelvin;

  //}
  

let tempConvertor = function(temperature){
    return{
        fahrenheit: temperature ,
        celsius: (temperature- 32) * (5/9),
        kelvin:  (temperature + 459.67) * (5/9)
    }
}
    let temp = tempConvertor(74);

    console.log(temp)

