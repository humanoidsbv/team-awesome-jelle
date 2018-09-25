import React from 'react';
import { shallow } from 'enzyme';

import TimesheetEntry from '../TimesheetEntry.tsx';

const timesheetEntry = {
  employer: 'Port of Rotterdam',
  endTime: '2018-12-13T18:30:00.000Z',
  id: 1,
  startTime: '2018-12-13T18:00:00.000Z'
};

const handleDeleteTimesheetEntry = () => {};

it('Renders Entry Component correctly', () => {
  const wrapper = shallow(
    <TimesheetEntry
      employer={timesheetEntry.employer}
      endTime={timesheetEntry.endTime}
      id={timesheetEntry.id}
      onDelete={handleDeleteTimesheetEntry}
      startTime={timesheetEntry.startTime}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
