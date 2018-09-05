import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import './add-team-member.scss';

class AddTeamMember extends React.Component {
  static defaultState = {
    defaultFormValues: {
    }
  }

  static propTypes = {
    onPostTeamMember: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.teamMemberForm = React.createRef();
  }

  state = {
    teamMember: AddTeamMember.defaultState.defaultFormValues,
    validity: {}
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      teamMember: {
        ...prevState.teamMember,
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

  validateForm = () => this.teamMemberForm.current && Array
    .from(this.teamMemberForm.current.elements)
    .every(formItem => formItem.validity.valid)

  handleSubmit = (event) => {
    const { teamMember } = this.state;
    event.preventDefault();

    const newTeamMember = {
      ...teamMember,
      avatar: 'static/icons/jelle.jpg',
      currentEmployer: 'Humanoids',
      employeeNumber: 'HUM_',
      jobTitle: 'Junior IT',
      startingDate: '2018-07-29T11:00:00.000Z'
    };
    this.handleAddTeamMember(newTeamMember);
    Router.push('/team-members');
  }

  handleAddTeamMember = newTeamMember => this.props.onPostTeamMember(newTeamMember);

  render() {
    const {
      firstName, lastName, email, bio,
      address, city, zipCode, facebookHandle,
      twitterHandle
    } = this.state.teamMember;
    return (
      <div className="add-team-member">
        <form
          className="add-team-member__form"
          onSubmit={this.handleSubmit}
          ref={this.teamMemberForm}
        >
          <div className="add-team-member__title-wrapper">
            <p className="add-team-member__title">
              Add new team member
            </p>
            <Link href="/team-members">
              <button
                className="add-team-member__cancel-button"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <button
              className="add-team-member__save-button"
              type="submit"
              disabled={!this.validateForm()}
            >
              Save
            </button>
          </div>
          <div className="add-team-member__form-wrapper">
            <div className="add-team-member__form-header">
              <div className="add-team-member__header-item">
                Personal details
              </div>
            </div>
            <div className="add-team-member__form-fields">
              <div className="add-team-member__left-form-column">
                <img
                  alt="avatar"
                  className="add-team-member__avatar"
                  src="/static/icons/jelle.jpg"
                />
                <div
                  className="add-team-member__avatar-label"
                >
                    Edit avatar
                </div>
              </div>
              <div className="add-team-member__middle-form-column">
                <div className="add-team-member__name-wrapper">
                  <div className="add-team-member__first-name">
                    <label
                      className="add-team-member__label"
                      htmlFor="first-name"
                    >
                      First Name
                      <input
                        className="add-team-member__input"
                        id="first-name"
                        name="firstName"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={firstName}
                      />
                    </label>
                  </div>
                  <div className="add-team-member__last-name">
                    <label
                      className="add-team-member__label"
                      htmlFor="last-name"
                    >
                      Last Name
                      <input
                        className="add-team-member__input"
                        id="last-name"
                        name="lastName"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        type="text"
                        required
                        value={lastName}
                      />
                    </label>
                  </div>
                </div>
                <div className="add-team-member__email-address">
                  <label
                    className="add-team-member__label"
                    htmlFor="email-address"
                  >
                    E-mail Address
                    <input
                      className="add-team-member__input"
                      id="email-address"
                      name="email"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={email}
                    />
                  </label>
                </div>
                <div className="add-team-member__bio">
                  <label
                    className="add-team-member__label"
                    htmlFor="bio"
                  >
                    Bio
                    <input
                      className="add-team-member__textarea"
                      id="bio"
                      rows="4"
                      cols="30"
                      type="textarea"
                      name="bio"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      value={bio}
                    />
                  </label>
                </div>
              </div>
              <div className="add-team-member__right-form-column">
                <div className="add-team-member__address">
                  <label
                    className="add-team-member__label"
                    htmlFor="address"
                  >
                    Address
                    <input
                      className="add-team-member__input"
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
                <div className="add-team-member__location-wrapper">
                  <div className="add-team-member__zip-code">
                    <label
                      className="add-team-member__label"
                      htmlFor="address"
                    >
                      ZIP code
                      <input
                        className="add-team-member__input"
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
                  <div className="add-team-member__city">
                    <label
                      className="add-team-member__label"
                      htmlFor="city"
                    >
                      City
                      <input
                        className="add-team-member__input"
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
                <div className="add-team-member__social-profiles">
                  <label
                    className="add-team-member__label"
                    htmlFor="social-profiles"
                  >
                    Social Profiles
                    <span className="add-team-member__social-profiles-input-wrapper">
                      <div className="add-team-member__twitter-box">
                        <img
                          alt="Twitter Logo"
                          className="add-team-member__twitter-logo"
                          src="/static/icons/twitter.svg"
                        />
                      </div>
                      <input
                        className="add-team-member__input-social"
                        id="social-profile-twitter"
                        name="twitterHandle"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={twitterHandle}
                      />
                    </span>
                    <span className="add-team-member__social-profiles-input-wrapper">
                      <div className="add-team-member__facebook-box">
                        <img
                          alt="Facebook Logo"
                          className="add-team-member__facebook-logo"
                          src="/static/icons/facebook.svg"
                        />
                      </div>
                      <input
                        className="add-team-member__input-social"
                        id="social-profile-facebook"
                        name="facebookHandle"
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        required
                        type="text"
                        value={facebookHandle}
                      />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTeamMember;
