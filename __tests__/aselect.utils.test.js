import { getSelects } from '../src/aselect.utils';

test('Get select by class', () => {
  expect(getSelects('.select')).toBeDefined();
})