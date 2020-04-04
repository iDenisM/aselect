// const { domMock } = require('./_mocks');
const { getSelects } = require('../src/aselect.utils');

test('Get select by class', () => {
  // document.body.innerHTML = domMock;
  expect(getSelects('.select')).toBeDefined();
})