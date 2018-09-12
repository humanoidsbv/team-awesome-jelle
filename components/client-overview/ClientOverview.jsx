import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Client from '../client/Client';

import './client-overview.scss';

class ClientOverview extends React.Component {
  static propTypes = {
    clients: PropTypes.arrayOf(PropTypes.shape({
      client: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired,
    onRequestClients: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onRequestClients();
  }

  render() {
    const { clients } = this.props;
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
          <select className="client-overview__select">
            <option>
              First Name
            </option>
            <option>
              Last Name
            </option>
          </select>
          <select className="client-overview__select">
            <option>
              First Name
            </option>
            <option>
              Last Name
            </option>
          </select>
        </section>
        <ul className="client-overview__content-wrapper">
          {clients.map(client => (
            <li key={client.id}>
              <Client
                client={client.client}
                id={client.id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClientOverview;
