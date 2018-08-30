import { convertDateToIso, convertTimeToIso } from '../convert-time';

test('Split, reverse and join Dutch date notation', () => {
  expect(convertDateToIso('01-01-2000')).toBe('2000-01-01');
});

test('Combine a date and time string to an ISO string', () => {
  expect(convertTimeToIso('10:00', '01-01-2000')).toBe('2000-01-01T09:00:00.000Z');
});
