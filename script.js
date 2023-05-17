//your code here

window.addEventListener('DOMContentLoaded', () => {
  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  addTodoBtn.addEventListener('click', () => {
    const todoText = newTodoInput.value.trim();

    if (todoText !== '') {
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = todoText;
      todoList.appendChild(newTodoItem);

      newTodoInput.value = '';
    }
  });

  newTodoInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addTodoBtn.click();
    }
  });
});
