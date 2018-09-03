import React from 'react';

import './team-member.scss';

const TeamMember = () => (
  <React.Fragment>
    <div className="team-member">
      <img
        alt="team member avatar"
        className="team-member__avatar"
        src="/static/icons/jelle.jpg"
      />
      <div className="team-member__name">
        <p className="team-member__title">
          Jelle Bouwman
        </p>
        <p className="team-member__subtitle">
          Front-End Developer
        </p>
      </div>
      <div className="team-member__employee-id">
        <p className="team-member__title">
          HUM_001
        </p>
        <p className="team-member__subtitle">
          Employee number
        </p>
      </div>
      <div className="team-member__current-employer">
        <p className="team-member__title">
          Hike One
        </p>
        <p className="team-member__subtitle">
          Current employer
        </p>
      </div>
      <div className="team-member__starting-date">
        <p className="team-member__title">
          February 2018
        </p>
        <p className="team-member__subtitle">
          Starting date
        </p>
      </div>
      <button
        className="team-member__expand-button"
        type="button"
      >
        <img
          alt="arrow down sign"
          className="team-member__expand-button-icon"
          src="/static/icons/arrow-down-2.svg"
        />
      </button>
    </div>
    <div className="team-member-expanded">
      <div className="team-member-expanded__detail-title">
        Detailed information about Jelle
      </div>
      <div className="team-member-expanded__current-employer">
        <p className="team-member-expanded__title">
          Hike One
        </p>
        <p className="team-member-expanded__subtitle">
          Current employer
        </p>
      </div>
      <div className="team-member-expanded__starting-date">
        <p className="team-member-expanded__title">
          February 2018
        </p>
        <p className="team-member-expanded__subtitle">
          Starting date
        </p>
      </div>
    </div>
  </React.Fragment>
);

export default TeamMember;
