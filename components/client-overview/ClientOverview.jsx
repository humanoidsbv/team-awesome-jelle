import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Client from '../client/Client';

import './client-overview.scss';

class ClientOverview extends React.Component {
  static propTypes = {
    clients: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      clientName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      remarks: PropTypes.string.isRequired,
      vatNumber: PropTypes.string.isRequired,
      webAddress: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired
    })).isRequired,
    onChangeSortingDirection: PropTypes.func.isRequired,
    onChangeSortByProperty: PropTypes.func.isRequired,
    onRequestClients: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.onRequestClients();
  }

  render() {
    const {
      clients, onChangeSortingDirection,
      onChangeSortByProperty, sortBy, sortDirection
    } = this.props;
    return (
      <div className="client-overview">
        <section className="client-overview__top-wrapper">
          <h1 className="client-overview__top-title">
            All Clients
          </h1>
          <Link href="/add-client">
            <button
              className="client-overview__add-button"
              type="button"
            >
              New Client
            </button>
          </Link>
          <select
            className="client-overview__select"
            onChange={({ target: { value } }) => onChangeSortByProperty(value)}
            name="sortBy"
            value={sortBy}
          >
            <option value="clientName">
              Client name
            </option>
            <option value="city">
              City
            </option>
          </select>
          <select
            className="client-overview__select"
            onChange={({ target: { value } }) => onChangeSortingDirection(value)}
            name="sortDirection"
            value={sortDirection}
          >
            <option value="ascending">
              Ascending
            </option>
            <option value="descending">
              Descending
            </option>
          </select>
        </section>
        <ul className="client-overview__content-wrapper">
          {clients.map(client => (
            <li key={client.id}>
              <Client
                avatar={client.avatar}
                city={client.city}
                clientName={client.clientName}
                email={client.email}
                phoneNumber={client.phoneNumber}
                remarks={client.remarks}
                webAddress={client.webAddress}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClientOverview;
