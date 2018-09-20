import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import SelectBox from '../SelectBox';

import '../select-box.scss';

import { changeSortByProperty } from '../../../../ducks/team-members';

const sortBy = 'firstName';

storiesOf('Button', module)
  .add('default', () => (
    <SelectBox
      activeValue={sortBy}
      name="sort-by"
      onChange={event => changeSortByProperty(event.target.value)}
      options={[{ label: 'First Name', value: 'firstName' },
        { label: 'Last name', value: 'lastName' }
      ]}
      type="sort"
    />
  ));
