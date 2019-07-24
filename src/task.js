const axios = require('axios');

const fetchTasks = async () => {
  const { data } = await axios.get('http://localhost:3000/tasks');
  const { tasks } = data;
  return {
    tasks,
  };
};

const addTask = async (state, title) => {
  await axios.post('http://localhost:3000/tasks', {
    task: { title },
  });
  return await fetchTasks();
  // const { tasks } = state;
  // return {
  //   ...state,
  //   tasks: [...tasks, { title }],
  // };
};

module.exports = {
  fetchTasks,
  addTask,
};
