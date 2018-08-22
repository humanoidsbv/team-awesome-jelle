const api = 'http://localhost:3001/api/';

export const fetchTimesheetEntries = () => (
  fetch(`${api}timesheets/`)
    .then(response => response.json())
);

export const postTimesheetEntry = timesheetEntry => (
  fetch(`${api}timesheets/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timesheetEntry)
  }).then(response => response.json())
);

export const deleteTimesheetEntry = (timesheetEntryId) => {
  fetch(`${api}timesheets/${timesheetEntryId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timesheetEntryId)
  });
};
