const ApiAdress = 'http://localhost:3001/api/timesheets/';

const fetchTimesheetEntries = () => (
  fetch(ApiAdress)
    .then(response => response.json())
);

export default fetchTimesheetEntries;
