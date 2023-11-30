import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

it('Full Year', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});
it('Footer when true', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
});
it('Footer when false', () => {
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});
it('Latest notification', () => {
  expect(getLatestNotification()).toEqual(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
