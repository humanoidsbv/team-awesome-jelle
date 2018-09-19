import React from 'react';
import { shallow } from 'enzyme';

import AddTimesheet from '../AddTimesheet';

test('ComponentName', () => {
  const addTimesheet = shallow(<AddTimesheet />);

  expect(addTimesheet.state()).toEqual({
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
const handleAddTimesheetEntry = () => {};
const isFormSavingSelector = false;

it('TimesheetInput should render without crashing', () => {
  const wrapper = shallow(
    <AddTimesheet
      isFormSaving={isFormSavingSelector}
      onSave={handleAddTimesheetEntry}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
