const { addTask } = require('./task');

test('addTask', async () => {
  const state = {
    tasks: [{ title: 'oldTask' }],
  };
  const { tasks } = await addTask(state, 'Rest');

  expect(tasks.length).toBe(2);
  expect(tasks[1].title).toBe('Rest');
});
