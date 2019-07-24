import { render } from './view';
import { fetchTasks, addTask } from './task';

const update = (state) => {
  render(state, {
    async onAddTask(title) {
      const newState = await addTask(state, title);
      update(newState);
    },
  });
};

(async () => {
  const state = await fetchTasks();
  update(state);  
})();
