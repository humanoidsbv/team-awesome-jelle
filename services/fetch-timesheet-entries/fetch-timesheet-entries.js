const fetchTimesheetEntries = () => (
  fetch('http://localhost:3001/api/timesheets/')
    .then(response => response.json())
);

export default fetchTimesheetEntries;
