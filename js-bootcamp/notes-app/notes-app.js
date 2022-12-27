let notes = getSavedNotes();



const filters = {
  searchText: ''
};


renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e){
 const id = uuidv4()
  notes.push({ 
  id: id,
  title: '',
  body: ''
});


let y = 0;
let z = notes.forEach(function(note) {
  y = note;
  return y;
});



localStorage.setItem('notes', JSON.stringify(notes));

location.assign(`/edit.html#${id}`);


});

document.querySelector('#search-text').addEventListener('input', function(e){
 filters.searchText = e.target.value;
 renderNotes(notes,filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e){
  console.log(e.target.value);

});

window.addEventListener('storage', function(e){
  if(e.key === 'notes'){
    notes = JSON.parse(e.newValue);
    renderNotes(notes,filters);
  }
});

//Unix Epic - January 1st 1970 00:00:00 
const now  = new Date('January 21 2001 6:25:01');
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(now.toString());
// console.log(`Year:${now.getFullYear()}`);
// console.log(`Month:${now.getMonth()}`);
// console.log(`Day of month:${now.getDate()}`);
// console.log(`Hour:${now.getHours()}`);
// console.log(`Minutes:${now.getMinute()}`);
// console.log(`Seconds:${now.getSeconds()}`);

// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time(use toString)


const myBday = new Date('August 27 1975 6:32:01');
const danBday = new Date('July 2 1972 11:32:01');
const myBdaytimestamp = myBday.getTime();
const danBdaytimestamp = danBday.getTime();

if(myBdaytimestamp > danBdaytimestamp)
  {
    const datePrinter = new Date(myBdaytimestamp);
    const danBdayPrinter = new Date(danBdaytimestamp);
    console.log(`Mike your younger then Dan because your bithday is ${datePrinter.getFullYear()}`);
    console.log(`Dan is older because his bithday is in ${danBdayPrinter.getFullYear()}`);
    console.log(myBdaytimestamp);
    console.log(danBdaytimestamp);
  }
  else
  {
    const datePrinter = new Date(danBdaytimestamp);
    console.log(`Dan's birthday is ${datePrinter.getFullYear()}`);
    console.log(danBdaytimestamp);

  }

