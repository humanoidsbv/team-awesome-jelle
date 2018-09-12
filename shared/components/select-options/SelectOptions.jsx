import React from 'react';

import PropTypes from 'prop-types';

import './select-options.scss';

const SelectOptions = ({ activeValue, onChangeActiveValue, options }) => (
  <select
    onChange={({ target: { value } }) => onChangeActiveValue(value)}
    value={activeValue}
  >
    <option>
      Ascending
    </option>
    <option>
      Descending
    </option>
  </select>
);

SelectOptions.propTypes = {
  activeValue: PropTypes.string.isRequired,
  onChangeActiveValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf().isRequired
};

export default SelectOptions;
