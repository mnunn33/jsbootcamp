const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false

};


renderTodos(todos, filters);


document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});




document.querySelector("#text-form").addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({ 
        id: uuidv4(),
        text: e.target.elements.todoText.value, 
        completed: true 
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.todoText.value = '';
});

document.querySelector("#hide-completed").addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters);
});

//Fetch existing todos from local storage
//getSaved todos

//SaveTodos to local storage
//savetodos

// Get the DOM elements for an individual note
//generateTodoDom

// Get DOM elements for list summary
//generateSummaryDOM