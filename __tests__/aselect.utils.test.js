import { domMock } from './_mocks';
import { getSelects } from '../src/aselect.utils';

test('Get select by class', () => {
  document.body.innerHTML = domMock;
  expect(getSelects('.select')).toBeDefined();
})