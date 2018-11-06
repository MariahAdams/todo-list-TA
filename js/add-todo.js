

const addTodo = {
  init(onAdd) {
    const form = document.getElementById('add-form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const elements = form.elements;

      const todo = {
        task: elements.task.value,
        due: elements.due.value
      }
  
      onAdd(todo);

      form.reset();
    })
  }
}

export default addTodo;