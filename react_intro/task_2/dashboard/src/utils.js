//return the current year
export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  let res = undefined;
  isIndex
    ? (res = 'Holberton School')
    : (res = 'Holberton School main dashboard');
  return res;
};

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD'
};
