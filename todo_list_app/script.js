document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todosCount = document.getElementById('todos-count');
    const clearCompletedBtn = document.getElementById('clear-completed');
    const allFilter = document.getElementById('all-filter');
    const activeFilter = document.getElementById('active-filter');
    const completedFilter = document.getElementById('completed-filter');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let currentFilter = 'all';

    renderTodos();

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    clearCompletedBtn.addEventListener('click', clearCompleted);
    allFilter.addEventListener('click', () => setFilter('all'));
    activeFilter.addEventListener('click', () => setFilter('active'));
    completedFilter.addEventListener('click', () => setFilter('completed'));

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todo = {
                id: Date.now(),
                text: todoText,
                completed: false
            };
            todos.push(todo);
            saveTodos();
            renderTodos();
            todoInput.value = '';
        }
    }

    function renderTodos() {
        const filteredTodos = filterTodos();
        todoList.innerHTML = '';
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            if (todo.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
                <span>${todo.text}</span>
                <button onclick="deleteTodo(${todo.id})"><i class="fas fa-trash"></i></button>
            `;
            todoList.appendChild(li);
        });
        updateTodosCount();
    }

    function filterTodos() {
        switch (currentFilter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }

    function setFilter(filter) {
        currentFilter = filter;
        [allFilter, activeFilter, completedFilter].forEach(btn => btn.classList.remove('active'));
        document.getElementById(`${filter}-filter`).classList.add('active');
        renderTodos();
    }

    function updateTodosCount() {
        const activeTodos = todos.filter(todo => !todo.completed).length;
        todosCount.textContent = `${activeTodos} item${activeTodos !== 1 ? 's' : ''} left`;
    }

    function clearCompleted() {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    window.toggleTodo = (id) => {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos();
        renderTodos();
    };

    window.deleteTodo = (id) => {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    };
});
