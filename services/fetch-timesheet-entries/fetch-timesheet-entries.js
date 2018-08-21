<<<<<<< HEAD
export const fetchTimesheetEntries = () => (
  fetch('http://localhost:3001/api/timesheets/')
=======
const api = 'http://localhost:3001/api/timesheets/';

const fetchTimesheetEntries = () => (
  fetch(api)
>>>>>>> master
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
