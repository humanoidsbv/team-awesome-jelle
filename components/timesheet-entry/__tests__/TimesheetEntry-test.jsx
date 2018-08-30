import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TimesheetEntry from '../TimesheetEntry';

it('Renders Entry Component correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimesheetEntry />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<TimesheetEntry />).toJSON();
  expect(tree).toMatchSnapshot();
});
