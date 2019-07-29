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
    title,
  });
  return await fetchTasks();
  // const { tasks } = state;
  // return {
  //   ...state,
  //   tasks: [...tasks, { title }],
  // };
};

const updateTask = async (id, status) => {
  await axios.patch(`http://localhost:3000/tasks/${id}`, { status });

  return await fetchTasks();
};

const removeTask = async (id) => {
  await axios.delete(`http://localhost:3000/tasks/${id}`);

  return await fetchTasks();
};

module.exports = {
  fetchTasks,
  addTask,
  updateTask,
  removeTask,
};
