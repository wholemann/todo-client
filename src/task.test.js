const { addTask, updateTask, removeTask } = require('./task');

// test('addTask', async () => {
//   const state = {
//     tasks: [{ title: 'oldTask' }],
//   };
//   const { tasks } = await addTask(state, 'Rest');

//   expect(tasks.length).toBe(2); 
//   expect(tasks[1].title).toBe('Rest');
// });

test('updateTask', async () => {
  const id = '48caf5dc-34ec-49bc-8a47-0f0b766709d0';

  const { tasks } = await updateTask(id, 'DONE');

  expect(tasks[0].status).toBe('DONE');
});

test('removeTask', async () => {
  const id = '48caf5dc-34ec-49bc-8a47-0f0b766709d0';

  const { tasks } = await removeTask(id);

  expect(tasks.find(v => v.id === id)).toBeUndefined();

});

