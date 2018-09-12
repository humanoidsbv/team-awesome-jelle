import React from 'react';
import PropTypes from 'prop-types';

import './client.scss';

class Client extends React.Component {
  static propTypes = {
    client: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }

  state = {
    isClientExpanded: false
  }

  toggleExpand = () => {
    this.setState(({ isClientExpanded }) => ({ isClientExpanded: !isClientExpanded }));
  }

  render() {
    const { isClientExpanded } = this.state;
    const { client, id } = this.props;
    return (
      <div className="client">
        <div className={`
          client__top-wrapper
          client__top-wrapper${isClientExpanded ? '--expanded' : '--collapsed'}
          `}
        >
          <img
            alt="client avatar"
            className="client__avatar"
            src="/static/icons/humanoids-avatar.jpg"
          />
          <div className="client__name">
            <p className="client__title">
              {client}
            </p>
            <p className="client__subtitle">
              {id}
            </p>
          </div>
          <div className="client__web-address">
            <p className="client__title">
              {client}
            </p>
            <p className="client__subtitle">
              Web address
            </p>
          </div>
          <div className="client__phone-number">
            <p className="client__title">
              {client}
            </p>
            <p className="client__subtitle">
              Phone number
            </p>
          </div>
          <div className="client__email">
            <p className="client__title">
              {client}
            </p>
            <p className="client__subtitle">
              Email address
            </p>
          </div>
          <button
            className="client__expand-button"
            onClick={this.toggleExpand}
            type="button"
          >
            <img
              alt="arrow down sign"
              className="client__expand-button-icon"
              src="/static/icons/arrow-down-2.svg"
            />
          </button>
        </div>
        <div className={`
          client__expand
          client__expand${isClientExpanded ? '--expanded' : '--collapsed'}
        `}
        >
          <div className="client__expand-detail-title">
            {`Detailed information about ${id}`}
          </div>
          <div className="client__expand-phone-number">
            <p className="client__expand-title">
              {id}
            </p>
            <p className="client__expand-subtitle">
              Current employer
            </p>
          </div>
          <div className="client__expand-email">
            <p className="client__expand-title">
              26
            </p>
            <p className="client__expand-subtitle">
              Starting date
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
