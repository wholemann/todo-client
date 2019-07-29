import { render } from './view';
import { fetchTasks, addTask, updateTask } from './task';

const update = (state) => {
  render(state, {
    async onAddTask(title) {
      const newState = await addTask(state, title);
      update(newState);
    },
    async onUpdateTask(id, status) {
      const newState = await updateTask(id, status);
      update(newState);
    }
  });
};

(async () => {
  const state = await fetchTasks();
  update(state);  
})();
