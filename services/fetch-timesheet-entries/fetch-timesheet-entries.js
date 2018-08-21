const api = 'http://localhost:3001/api/timesheets/';

export const fetchTimesheetEntries = () => (
  fetch(api)
    .then(response => response.json())
);

export const postTimesheetEntry = timesheetEntry => (
  fetch('http://localhost:3001/api/timesheets/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timesheetEntry)
  })
);
