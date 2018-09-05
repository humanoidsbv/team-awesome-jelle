const api = 'http://localhost:3001/api/';

export const fetchGetTimesheetEntries = () => (
  fetch(`${api}timesheets/?_sort=startTime&_order=desc`)
    .then(response => response.json())
);

export const fetchPostTimesheetEntry = timesheetEntry => (
  fetch(`${api}timesheets/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timesheetEntry)
  }).then(response => response.json())
);

export const fetchDeleteTimesheetEntry = timesheetEntryId => (
  fetch(`${api}timesheets/${timesheetEntryId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
);
