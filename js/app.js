import addTodo from './add-todo.js';
import todoList from './todo-list.js';

todoList.init(todos);

addTodo.init(function(todo) {
  todoList.add(todo);
});

