import React from 'react';

import './team-member.scss';

class TeamMember extends React.Component {
  state = {
    isTeamMemberExpanded: false
  }

  toggleExpand = () => {
    this.setState(({ isTeamMemberExpanded }) => ({ isTeamMemberExpanded: !isTeamMemberExpanded }));
  }

  render() {
    const { isTeamMemberExpanded } = this.state;
    return (
      <div className="team-member-wrapper">
        <div className={`
          team-member
          team-member${isTeamMemberExpanded ? '--expanded' : '--collapsed'}
          `}
        >
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
            onClick={this.toggleExpand}
            type="button"
          >
            <img
              alt="arrow down sign"
              className="team-member__expand-button-icon"
              src="/static/icons/arrow-down-2.svg"
            />
          </button>
        </div>
        <div className={`
          team-member__expand
          team-member__expand${isTeamMemberExpanded ? '--expanded' : '--collapsed'}
        `}
        >
          <div className="team-member__expand-detail-title">
            Detailed information about Jelle
          </div>
          <div className="team-member__expand-current-employer">
            <p className="team-member__expand-title">
              Hike One
            </p>
            <p className="team-member__expand-subtitle">
              Current employer
            </p>
          </div>
          <div className="team-member__expand-starting-date">
            <p className="team-member__expand-title">
              February 2018
            </p>
            <p className="team-member__expand-subtitle">
              Starting date
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
