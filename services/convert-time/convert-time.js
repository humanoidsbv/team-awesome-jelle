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

export const calculateDifferenceToSeconds = (startTime, endTime) => (
  (Date.parse(endTime) - Date.parse(startTime)) / 1000
);

export const secondsToHourString = (seconds) => {
  const hours = Math
    .floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math
    .floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const calculateDuration = (startTime, endTime) => (
  secondsToHourString(calculateDifferenceToSeconds(startTime, endTime))
);

export const calculateCumulativeDuration = (startTime, timeEntries) => {
  const isoString = timeEntries
    .filter(item => new Date(item.startTime).toLocaleDateString()
      === new Date(startTime).toLocaleDateString())
    .reduce((accumulator, item) => accumulator
     + calculateDifferenceToSeconds(item.startTime, item.endTime), 0);
  return secondsToHourString(isoString);
};
