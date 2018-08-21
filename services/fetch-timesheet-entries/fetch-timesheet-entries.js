const fetchTimesheetEntries = () => (
  fetch('http://localhost:3001/api/timesheets/')
    .then(response => response.json())
);

const postTimesheetEntry = timesheetEntry => (
  fetch('http://localhost:3001/api/timesheets/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timesheetEntry)
  })
);


export { fetchTimesheetEntries, postTimesheetEntry };
