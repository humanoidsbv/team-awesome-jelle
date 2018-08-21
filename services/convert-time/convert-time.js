import ConvertDateToUs from '../convert-date-to-us/convert-date-to-us';
import ConvertToIsoString from '../convert-to-iso-string/convert-to-iso-string';

const convertTime = (prevState) => {
  const { date, startTime, endTime } = prevState.timeEntry;

  const convertedDate = ConvertDateToUs(date);

  const convertedStartTime = ConvertToIsoString(
    convertedDate, startTime.replace('.', ':')
  );
  const convertedEndTime = ConvertToIsoString(
    convertedDate, endTime.replace('.', ':')
  );

  return {
    ...prevState.timeEntry,
    date: convertedDate,
    startTime: convertedStartTime,
    endTime: convertedEndTime
  };
};

export default convertTime;
