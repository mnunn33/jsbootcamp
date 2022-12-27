const notes = [{
     title: 'Reading and Professional Development',
     body: 'Sculpting skills and talents is as important as excercise'
}, {
    title: 'Rocking a gray t shirt',
    body: 'The importance of wearing comfortable cloths'
},
{
  title: 'adapting to the new reality',
  body: 'Lift, workout, work, and find happiness',
}];



const sortNotes = function(notes){
  notes.sort(function(a,b){
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1;
    }else if(b.title.toLowerCase() < a.title.toLowerCase()){
      return 1;
    }
    else{
      return 0;
    }
  

  });
}
const findNote =  function (notes, noteTitle){
     return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
     }
    
     const findNotes = function(notes,query){
          return notes.filter(function(note, index){
            const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
            const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
      
              return isTitleMatch || isBodyMatch;
           });
      }
//         console.log(findNotes(notes,'adapting'));

     

// const note = findNote(notes, 'rocking a gray t shirt');
// console.log(note);

sortNotes(notes);
console.log(notes);