import React from 'react';
import { shallow } from 'enzyme';

import TimesheetInput from '../TimesheetInput';

test('ComponentName', () => {
  const timesheetInput = shallow(<TimesheetInput />);

  expect(timesheetInput.state()).toEqual({
    isFormVisible: false,
    timeEntry: {
      employer: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      startTime: '',
      endTime: ''
    },
    validity: {
      employer: true,
      activity: true,
      date: true,
      startTime: true,
      endTime: true
    }
  });
});
