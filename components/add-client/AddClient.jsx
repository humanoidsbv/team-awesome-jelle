import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import './add-client.scss';

class AddClient extends React.Component {
  static propTypes = {
    onPostClient: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.clientForm = React.createRef();
  }

  state = {
    client: {},
    validity: {}
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      client: {
        ...prevState.client,
        [target.name]: target.value
      }
    }));
  };

  handleBlur = ({ target }) => {
    this.setState(prevState => ({
      validity: {
        ...prevState.validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  validateForm = () => this.clientForm.current && Array
    .from(this.clientForm.current.elements)
    .every(formItem => formItem.validity.valid)

  handleSubmit = (event) => {
    const { client } = this.state;
    event.preventDefault();

    const newClient = {
      ...client,
      avatar: 'static/icons/humanoids-avatar.jpg'
    };
    this.props.onPostClient(newClient);
    Router.push('/clients');
  }

  render() {
    const {
      clientName, vatNumber, remarks,
      address, city, zipCode, webAddress,
      email, phoneNumber
    } = this.state.client;
    return (
      <div className="add-client">
        <form
          className="add-client__form"
          onSubmit={this.handleSubmit}
          ref={this.clientForm}
        >
          <div className="add-client__title-wrapper">
            <p className="add-client__title">
              Add new client
            </p>
            <Link href="/clients">
              <button
                className="add-client__cancel-button"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <button
              className="add-client__save-button"
              type="submit"
              disabled={!this.validateForm()}
            >
              Save
            </button>
          </div>
          <div className="add-client__form-wrapper">
            <div className="add-client__form-header">
              <div className="add-client__header-item">
                Client details
              </div>
            </div>
            <div className="add-client__form-fields">
              <fieldset className="add-client__left-form-column">
                <img
                  alt="avatar"
                  className="add-client__avatar"
                  src="/static/icons/humanoids-avatar.jpg"
                />
                <div
                  className="add-client__avatar-label"
                >
                    Edit logo
                </div>
              </fieldset>
              <fieldset className="add-client__middle-form-column">
                <div className="add-client__client-name">
                  <label
                    className="add-client__label"
                    htmlFor="clientName"
                  >
                    Client name
                    <input
                      className="add-client__input"
                      id="clientName"
                      name="clientName"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={clientName}
                    />
                  </label>
                </div>
                <div className="add-client__vatNumber">
                  <label
                    className="add-client__label"
                    htmlFor="vatNumber"
                  >
                    VAT Number
                    <input
                      className="add-client__input"
                      id="vatNumber"
                      name="vatNumber"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={vatNumber}
                    />
                  </label>
                </div>
                <div className="add-client__remarks">
                  <label
                    className="add-client__label"
                    htmlFor="remarks"
                  >
                    Remarks
                    <textarea
                      className="add-client__textarea"
                      id="remarks"
                      name="remarks"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      value={remarks}
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className="add-client__right-form-column">
                <div className="add-client__address">
                  <label
                    className="add-client__label"
                    htmlFor="address"
                  >
                    Address
                    <input
                      className="add-client__input"
                      id="address"
                      name="address"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={address}
                    />
                  </label>
                </div>
                <div className="add-client__location-wrapper">
                  <div className="add-client__zip-code">
                    <label
                      className="add-client__label"
                      htmlFor="address"
                    >
                      ZIP code
                      <input
                        className="add-client__input"
                        id="zip-code"
                        name="zipCode"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={zipCode}
                      />
                    </label>
                  </div>
                  <div className="add-client__city">
                    <label
                      className="add-client__label"
                      htmlFor="city"
                    >
                      City
                      <input
                        className="add-client__input"
                        id="city"
                        name="city"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={city}
                      />
                    </label>
                  </div>
                </div>
                <div className="add-client__contact-information">
                  <label
                    className="add-client__label"
                    htmlFor="social-profiles"
                  >
                    Contact information
                    <span className="add-client__contact-information-input-wrapper">
                      <div className="add-client__phone-number-box">
                        <img
                          alt="Phone number icon"
                          className="add-client__phone-number-icon"
                          src="/static/icons/phone-solid.svg"
                        />
                      </div>
                      <input
                        className="add-client__input-contact-information"
                        id="phoneNumber"
                        name="phoneNumber"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={phoneNumber}
                      />
                    </span>
                    <span className="add-client__contact-information-input-wrapper">
                      <div className="add-client__email-icon-box">
                        <img
                          alt="Email icon"
                          className="add-client__email-icon"
                          src="/static/icons/envelope-regular.svg"
                        />
                      </div>
                      <input
                        className="add-client__input-contact-information"
                        id="email"
                        name="email"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={email}
                      />
                    </span>
                    <span className="add-client__contact-information-input-wrapper">
                      <div className="add-client__web-icon-box">
                        <img
                          alt="Web icon"
                          className="add-client__web-icon"
                          src="/static/icons/globe-americas-solid.svg"
                        />
                      </div>
                      <input
                        className="add-client__input-contact-information"
                        id="webAddress"
                        name="webAddress"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={webAddress}
                      />
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddClient;
