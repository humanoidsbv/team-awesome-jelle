
const convertDateToUs = (date) => {
  const splittedDate = date.split('-');
  return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
};


const convertTime = (prevState) => {
  const { date, startTime, endTime } = prevState.timeEntry;

  const convertedDate = convertDateToUs(date);

  const convertedStartTime = new Date(`
    ${convertedDate} ${startTime.replace('.', ':')}
  `).toISOString();

  const convertedEndTime = new Date(`
    ${convertedDate} ${endTime.replace('.', ':')}
  `).toISOString();


  return {
    ...prevState.timeEntry,
    date: convertedDate,
    startTime: convertedStartTime,
    endTime: convertedEndTime
  };
};

export default convertTime;
