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
      onChange={onChange}
      value={activeValue}
    >
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
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
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number]).isRequired
  }))).isRequired
};

export default SelectBox;
