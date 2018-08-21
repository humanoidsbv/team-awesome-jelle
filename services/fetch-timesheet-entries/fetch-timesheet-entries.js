const api = 'http://localhost:3001/api/timesheets/';

const fetchTimesheetEntries = () => (
  fetch(api)
    .then(response => response.json())
);

export default fetchTimesheetEntries;
