import React from 'react';
import PropTypes from 'prop-types';

import './client-selector.scss';

const ClientSelector = ({ onChangeActiveFilter, activeFilter }) => (
  <select
    className="client-selector"
    onChange={({ target: { value } }) => onChangeActiveFilter(value)}
    value={activeFilter}
  >
    <option value="">
      All clients
    </option>
    <option>
      Port of Rotterdam
    </option>
    <option>
      Hike One
    </option>
    <option>
      Humanoids
    </option>
  </select>
);

ClientSelector.propTypes = {
  onChangeActiveFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired
};

export default ClientSelector;
