import { convertDateToIso } from '../convert-time';

test('Split, reverse and join Dutch date notation', () => {
  expect(convertDateToIso('01-01-2000')).toBe('2000-01-01');
});
