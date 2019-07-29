const { strip } = require('./util');

const render = (state, { onAddTask, onUpdateTask }) => {
  const { tasks } = state;

  const el = document.getElementById('app');
  el.innerHTML = `
    <ul>
      ${tasks.map(task => `
        <li id="${task.id}">
          ${strip(task.title)}
          |
          ${task.status} 
          <input type="checkbox" name="checkbox" ${task.status==='DONE' ? 'checked' : ''}> 
          <button id=${task.id} name="deleteBtn">Delete</button>
        </li>
      `).join('')}
    </ul>
    <div>
      <input type="text" name="todo" />
      <button name="addBtn">Add</button>
    </div>
  `;
  el.querySelector('button[name=addBtn]').addEventListener('click', () => {
    const title = el.querySelector('input[name=todo]').value;
    if (title.trim() !== "") {
      onAddTask(title);
    }
  });
  el.querySelectorAll('input[name=checkbox]').forEach(e => e.addEventListener('change', () => {
    e.checked ? onUpdateTask(e.parentNode.id, "DONE") : onUpdateTask(e.parentNode.id, "TODO");
  }));
};

module.exports = {
  render,
};
