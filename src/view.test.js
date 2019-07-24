const { render } = require('./view');

test('render', () => {
  expect(typeof(render)).toBe("function");
});
