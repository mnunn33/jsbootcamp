
const getSavedTodos = function (){
const todosJSON = localStorage.getItem('todos');
if(todosJSON != null){
    return JSON.parse(todosJSON);
}else{
    return [];
}
}


//SaveTodos to local storage
const saveTodos = function (todos){
localStorage.setItem('todos',JSON.stringify(todos));
}

//Render application todos based on filters
const renderTodos = function (todos, filters) {
        const filteredTodos = todos.filter(function(todo) {
           const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
           const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    
        return searchTextMatch && hideCompletedMatch;
        });
    
        
        const incompleteTodos = filteredTodos.filter(function(todo){
            return !todo.completed;
        });        
        document.querySelector('#todos').innerHTML = '';
       
    
    
        filteredTodos.forEach(function (todo) {
            document.querySelector('#todos').appendChild(generateTodoDOM(todo));
        });
       
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    

    }
  const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
            return todo.id === id;
    })
  
    if(todoIndex > -1){
        todos.splice(todoIndex, 1);
    }

}

const toggleTodo = function(id){
        const todo = todos.find(function(todo){
            return todo.id ===id
        });
        if(todo !== undefined){
            todo.completed = !todo.completed
        }
         
        }



// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo){

    const todoEl = document.createElement('div');
    const todoText = document.createElement('span');
    const removebutton = document.createElement('button');
    
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute("type","checkbox"); 
    checkbox.checked = todo.completed;
        
    
  

     todoEl.appendChild(checkbox);
     checkbox.addEventListener('change', function(e){
        toggleTodo(todo.id);
        saveTodos(todos);
         renderTodos(todos,filters);
     });
     
     
      todoText.textContent = todo.text;
      
      todoEl.appendChild(todoText);
    
      todoEl.appendChild(removebutton);
      removebutton.textContent = 'x'
      removebutton.addEventListener('click', function(){
          removeTodo(todo.id);
          saveTodos(todos);
          renderTodos(todos, filters);
      })


      


    return todoEl;
    


}

// Get DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos){
    const newMessage = document.createElement('h2');
        newMessage.textContent = ` You have ${incompleteTodos.length} todos left.`
        return newMessage;
       

}