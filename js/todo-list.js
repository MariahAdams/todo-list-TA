function makeFruit(todo) {
  const html = /*html*/`
      <li class="todo">
          <h3>
              ${todo.task}
          </h3>
          <p class="${new Date(todo.due) < Date.now() ? 'overdue' : ''}">${todo.due}</p>
      </li>
  `;

  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

const list = document.getElementById('todos');

const todoList = {
  init(todos) {
      for(let i = 0; i < todos.length; i++) {
          todoList.add(todos[i]);
      }
  },
  add(todo) {
      const dom = makeFruit(todo);

      list.appendChild(dom);
  }
};

export default todoList;