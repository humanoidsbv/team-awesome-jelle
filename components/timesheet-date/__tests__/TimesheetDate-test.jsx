import React from 'react';
import { shallow } from 'enzyme';

import TimesheetDate from '../TimesheetDate.tsx';

const date = '2018-12-13';

it('Renders Date Component correctly', () => {
  const wrapper = shallow(
    <TimesheetDate
      date={date}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
