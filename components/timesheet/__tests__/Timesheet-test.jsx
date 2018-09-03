import React from 'react';
import { shallow } from 'enzyme';

import Timesheet from '../Timesheet';

const deleteTimesheetEntry = () => {};
const requestTimeEntries = () => {};
const postTimesheetEntry = () => {};

const timesheetEntriesSelector = [
  {
    employer: 'Port of Rotterdam',
    activity: 'Design',
    date: '2018-12-13',
    startTime: '2018-12-13T18:00:00.000Z',
    endTime: '2018-12-13T18:30:00.000Z',
    id: 1
  },
  {
    employer: 'Port of Rotterdam',
    activity: 'Design',
    date: '2012-12-13',
    startTime: '2012-12-13T12:00:00.000Z',
    endTime: '2012-12-13T13:00:00.000Z',
    id: 2
  }
];

const isFormSavingSelector = false;

it('Renders Date Component correctly', () => {
  const wrapper = shallow(
    <Timesheet
      isFormSaving={isFormSavingSelector}
      onDeleteTimesheetEntry={deleteTimesheetEntry}
      onPostTimesheetEntry={postTimesheetEntry}
      onRequestTimeEntries={requestTimeEntries}
      timesheetEntries={timesheetEntriesSelector}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
