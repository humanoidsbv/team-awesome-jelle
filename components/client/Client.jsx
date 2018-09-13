import React from 'react';
import PropTypes from 'prop-types';

import './client.scss';

class Client extends React.Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    remarks: PropTypes.string.isRequired,
    webAddress: PropTypes.string.isRequired
  }

  state = {
    isClientExpanded: false
  }

  toggleExpand = () => {
    this.setState(({ isClientExpanded }) => ({ isClientExpanded: !isClientExpanded }));
  }

  render() {
    const { isClientExpanded } = this.state;
    const {
      avatar, city, clientName, email,
      phoneNumber, remarks, webAddress
    } = this.props;
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
            src={avatar}
          />
          <div className="client__name">
            <p className="client__title">
              {clientName}
            </p>
            <p className="client__subtitle">
              {city}
            </p>
          </div>
          <div className="client__contact-information">
            <div className="client__web-address">
              <p className="client__title">
                {webAddress}
              </p>
              <p className="client__subtitle">
                Web address
              </p>
            </div>
            <div className="client__phone-number">
              <p className="client__title">
                {phoneNumber}
              </p>
              <p className="client__subtitle">
                Phone number
              </p>
            </div>
            <div className="client__email-address">
              <p className="client__title">
                {email}
              </p>
              <p className="client__subtitle">
                Email address
              </p>
            </div>
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
            {remarks}
          </div>
          <div className="client__expand-phone-number">
            <p className="client__expand-title">
              {phoneNumber}
            </p>
            <p className="client__expand-subtitle">
              Phone number
            </p>
          </div>
          <div className="client__expand-email">
            <p className="client__expand-title">
              {email}
            </p>
            <p className="client__expand-subtitle">
              Email address
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
