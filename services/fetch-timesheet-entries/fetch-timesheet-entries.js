import apiRoot from '../../apiRoot';

export const fetchGetTimesheetEntries = () => (
  fetch(`${apiRoot}timesheets/?_sort=startTime&_order=desc`)
    .then(response => response.json())
);

export const fetchPostTimesheetEntry = timesheetEntry => (
  fetch(`${apiRoot}timesheets/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timesheetEntry)
  }).then(response => response.json())
);

export const fetchDeleteTimesheetEntry = timesheetEntryId => (
  fetch(`${apiRoot}timesheets/${timesheetEntryId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
);
