const { strip } = require('./util');

const render = (state, { onAddTask }) => {
  const { tasks } = state;

  const el = document.getElementById('app');
  el.innerHTML = `
    <ul>
      ${tasks.map(task => `
        <li id="task-${task.id}">
          ${strip(task.title)}
          |
          ${task.status}
        </li>
      `).join('')}
    </ul>
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  `;
  el.querySelector('button').addEventListener('click', () => {
    const title = el.querySelector('input').value;
    onAddTask(title);
  });
};

module.exports = {
  render,
};
