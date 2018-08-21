export const convertDateToIso = date => (
  date
    .split('-')
    .reverse()
    .join('-')
);

export const convertTimeToIso = (time, date) => {
  const convertedTime = new Date(`
    ${convertDateToIso(date)} ${time.replace('.', ':')}
  `).toISOString();

  return convertedTime;
};
