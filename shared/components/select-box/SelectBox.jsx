import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  activeValue, name,
  onChange, options
}) => (
  <div className="select-box">
    <select
      className="select-box__select"
      name={name}
      onChange={event => onChange(event)}
      value={activeValue}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

SelectBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  activeValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf((PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))).isRequired
};

export default SelectBox;
