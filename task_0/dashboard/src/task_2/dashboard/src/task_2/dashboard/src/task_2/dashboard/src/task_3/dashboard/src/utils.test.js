import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear should return the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy should return "Holberton School" when the argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy should return "Holberton School main dashboard" when the argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification should return the correct string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
});