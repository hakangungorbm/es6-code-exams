//DINAMIK ELEMENT SILME

//ul etiketini secip icerisinden li silecegiz

const todolist = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");

console.log(todos);

console.log(todolist);

// //REMOVE methodu

// todos[0].remove();

//REMOVE CHILD

// todolist.removeChild(todolist.lastElementChild);

todolist.removeChild(todos[3]);