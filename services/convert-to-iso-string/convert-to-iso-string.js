const ConvertToIsoString = (date, time) => new Date(`${date} ${time}`).toISOString();

export default ConvertToIsoString;
