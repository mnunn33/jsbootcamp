const todos = [{
    text: 'Work out', 
    completed: true,
},
{
text:'Study', 
completed: true,
},
{
   text: 'Clean Apartment', 
   completed:true,
 },
 {
    text: 'Read Spanish Lit', 
    completed: true,
  },
 {
     text: 'Go to Work',
    completed: false
}];

// 1. Convert Array to array of objects -> text , completed
// 2. Create function to remove a todo by text value

const deleteTodo = function(todos, todoText){   
   const index =  todos.findIndex(function(todo){
     return todo.text.toLowerCase() === todoText.toLowerCase();
         });
      if (index > -1){
     todos.splice(index,1);
      }
        }


    const getThingsTodo = function(todos){
    return todos.filter(function(todo){
     return !todo.completed; 
    });
    }
    //  console.log(getThingsTodo(todos));


  const sortTodos = function(todos){
    todos.sort(function(a,b){
      if(!a.completed && b.completed) {
        return -1;
      }
      else if(a.completed && !b.completed){
        return 1
      } else {
        return 0;
      }

    });
  }

sortTodos(todos);
console.log(todos);


// console.log(todos);
// deleteTodo(todos, 'xxxread spanish lit');
// console.log(todos);
    



