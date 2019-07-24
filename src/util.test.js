const { strip } = require('./util');

test('strip', () => {
  expect(strip('a')).toBe('a');
  expect(strip('<b>abc</b>')).toBe('&lt;b&gt;abc&lt;/b&gt;');
});
