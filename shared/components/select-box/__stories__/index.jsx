import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SelectBox from '../SelectBox';

import '../select-box.scss';

import { changeSortByProperty } from '../../../../ducks/team-members';

const sortBy = 'firstName';

const divStyle = {
  width: '130px'
};

storiesOf('SelectBox', module)
  .add('default', withInfo(`
    A generic selectbox that accepts an array of option objects, eacht containing a label, and value.
    The SelectBox then maps over the entire array adding an html option tag with correct values for each option.

    ~~~js
    <option value={option.value}>option.label</option>
    ~~~

    Three variations exists, sort and filter are very similair and appear on top of the Clients and TeamMember pages.
    The third, 'form', applies styling that corresponds with TeamAwesome's form styling.
  `)(() => (
    <div style={divStyle}>
      <SelectBox
        activeValue={sortBy}
        name="sort-by"
        onChange={event => changeSortByProperty(event.target.value)}
        options={[{ label: 'First Name', value: 'firstName' },
          { label: 'Last name', value: 'lastName' }
        ]}
      />
    </div>
  )));
storiesOf('SelectBox', module)
  .add('form', withInfo(`
  A generic selectbox that accepts an array of option objects, eacht containing a label, and value.
  The SelectBox then maps over the entire array adding an html option tag with correct values for each option.

  ~~~js
  <option value={option.value}>option.label</option>
  ~~~

  Three variations exists, sort and filter are very similair and appear on top of the Clients and TeamMember pages.
  The third, 'form', applies styling that corresponds with TeamAwesome's form styling.

  `)(() => (
    <div style={divStyle}>
      <SelectBox
        activeValue={sortBy}
        name="sort-by"
        onChange={event => changeSortByProperty(event.target.value)}
        options={[{ label: 'First Name', value: 'firstName' },
          { label: 'Last name', value: 'lastName' }
        ]}
        type="form"
      />
    </div>
  )));

storiesOf('SelectBox', module)
  .add('filter', withInfo(`
  A generic selectbox that accepts an array of option objects, eacht containing a label, and value.
  The SelectBox then maps over the entire array adding an html option tag with correct values for each option.

  ~~~js
  <option value={option.value}>option.label</option>
  ~~~

  Three variations exists, sort and filter are very similair and appear on top of the Clients and TeamMember pages.
  The third, 'form', applies styling that corresponds with TeamAwesome's form styling.

  `)(() => (
    <div style={divStyle}>
      <SelectBox
        activeValue={sortBy}
        name="sort-by"
        onChange={event => changeSortByProperty(event.target.value)}
        options={[{ label: 'First Name', value: 'firstName' },
          { label: 'Last name', value: 'lastName' }
        ]}
        type="filter"
      />
    </div>
  )));
