import React from 'react';

import './add-team-member.scss';

const AddTeamMember = () => (
  <div className="add-team-member">
    <div className="add-team-member__header">
      <div className="add-team-member__header-item">
        Personal details
      </div>
    </div>
    <form className="add-team-member__form">
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
                type="text"
              />
            </label>
          </div>
          <div className="add-team-member__last-name">
            <label
              className="add-team-member__label"
              htmlFor=""
            >
              Last Name
              <input
                className="add-team-member__input"
                id=""
                type="text"
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
              type="text"
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
              type="textarea"
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
                id="social-profiles"
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
                id="social-profiles"
              />
            </span>
          </label>
        </div>
      </div>
    </form>
  </div>
);

export default AddTeamMember;
