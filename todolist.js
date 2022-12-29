

// var input = document.querySelector('input');
// var button = document.querySelector('button');
// var form = document.querySelector('form');
// var todos = document.querySelector('.todos');

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // prevents the page from refreshing
//     let val = input.value.trim()
//     if (val) {
//         addTodoElement({
//             text: val,
//         })
//         saveTodoList();
//     }
//     input.value = '';
// })
// function addTodoElement(todo) {
//     var li = document.createElement('li');
//     li.innerHTML = `
//         <span>${todo.text}</span>
//         <i class="fas fa-trash"></i>
//     `
//     if (todo.status === 'completed') {
//         li.setAttribute('class', 'completed')
//     }
//     li.addEventListener('click', function () {
//         this.classList.toggle('completed');
//         saveTodoList();
//     })
//     li.querySelector('i').addEventListener('click', function () {
//         this.parentElement.remove();
//         saveTodoList();
//     })


//     todos.appendChild(li);

// }

// function saveTodoList(item) {
//     let todoList = document.querySelectorAll('li')
//     let todoStorage = []
//     todoList.forEarch(function (item) {
//         let text = item.querySelector('span').innerText;
//         let status = item.getAttribute('class');
//         todoStorage.push({
//             text,
//             status
//         })
//     })
//     localStorage.setItem('todoList', JSON.stringify(todoStorage));
// }
// function init() {
//     let data = JSON.parse(localStorage.getItem('todoList'));
//     data.forEach(function (item) {
//         addTodoElement(item);
//     })

// }
// init();

const input = document.querySelector('form input')
const ul = document.querySelector('.todos')
const form = document.querySelector('form')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach((todo) => addTodo(todo))
}

function addTodo(todo) {
    const li = document.createElement('li')

    li.setAttribute('class', todo.completed ? 'completed' : '')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash"></i>
    `

    li.addEventListener('click', function () {
        this.classList.toggle('completed')
        updateTodos()
    })

    li.querySelector('i').addEventListener('click', (e) => {
        e.target.parentElement.remove()
        updateTodos()
    })

    ul.appendChild(li)
    updateTodos()
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = input.value.trim()
    text != '' ? addTodo({ text, completed: false }) : undefined
    input.value = ''
})

function updateTodos() {
    const list = document.querySelectorAll('li')

    const todos = []

    list.forEach((item) => {
        todos.push({
            text: item.querySelector('span').innerHTML,
            completed: item.classList.contains('completed'),
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}



