import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

import {
  toggleMenu
} from '../../../ducks/header';

const isMenuVisibleSelector = false;

it('Renders Entry Component correctly', () => {
  const wrapper = shallow(
    <Header
      isMenuVisible={isMenuVisibleSelector}
      onToggleMenu={toggleMenu}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
