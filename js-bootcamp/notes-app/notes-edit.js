
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
let note = notes.find(function (note){
    return note.id == noteId;
});

if(note === undefined){
 
}

titleElement.value = note.title;
bodyElement.value = note.body;

 titleElement.addEventListener('input',function(e){
  note.title= e.target.value;
 saveNotes(notes);
 });




bodyElement.addEventListener('input',function(e){
  note.body= e.target.value;
  saveNotes(notes);
});


removeElement.addEventListener('click', function(){
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});


window.addEventListener('storage', function(e){
  if (e.key === 'notes'){
   notes = JSON.parse(e.newValue);

    let note = notes.find(function (note){
      return note.id == noteId;
  });
  
  if(note === undefined){
   
  }
  
  titleElement.value = note.title;
  bodyElement.value = note.body;
  }
});
