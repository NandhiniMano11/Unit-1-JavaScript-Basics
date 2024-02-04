document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });
    taskList.appendChild(li);
  }
});
