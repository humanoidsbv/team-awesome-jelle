import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  activeValue, name, onChange,
  options, type
}) => (
  <div className={`
    select-box
    select-box${`--${type}`}
  `}
  >
    <select
      className={`
        select-box__select
        select-box__select${`--${type}`}
      `}
      name={name}
      onChange={onChange}
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
  activeValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf((PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))).isRequired,
  type: PropTypes.string.isRequired
};

export default SelectBox;
