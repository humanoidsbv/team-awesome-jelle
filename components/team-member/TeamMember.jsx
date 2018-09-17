import React from 'react';
import PropTypes from 'prop-types';

import './team-member.scss';

class TeamMember extends React.Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    currentEmployer: PropTypes.string.isRequired,
    employeeNumber: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    startingDate: PropTypes.string.isRequired
  }

  state = {
    isTeamMemberExpanded: false
  }

  toggleExpand = () => {
    this.setState(({ isTeamMemberExpanded }) => ({ isTeamMemberExpanded: !isTeamMemberExpanded }));
  }

  render() {
    const { isTeamMemberExpanded } = this.state;
    const {
      avatar, currentEmployer, employeeNumber,
      firstName, jobTitle, lastName,
      startingDate
    } = this.props;
    return (
      <div className="team-member">
        <div className={`
          team-member__wrapper
          team-member__wrapper${isTeamMemberExpanded ? '--expanded' : '--collapsed'}
          `}
        >
          <img
            alt="team member avatar"
            className="team-member__avatar"
            src={avatar}
          />
          <div className="team-member__name">
            <p className="team-member__title">
              {`${firstName} ${lastName}`}
            </p>
            <p className="team-member__subtitle">
              {jobTitle}
            </p>
          </div>
          <div className="team-member__employee-information">
            <div className="team-member__employee-id">
              <p className="team-member__title">
                {employeeNumber}
              </p>
              <p className="team-member__subtitle">
                Employee number
              </p>
            </div>
            <div className="team-member__current-employer">
              <p className="team-member__title">
                {currentEmployer}
              </p>
              <p className="team-member__subtitle">
                Current employer
              </p>
            </div>
            <div className="team-member__starting-date">
              <p className="team-member__title">
                {new Date(startingDate)
                  .toLocaleDateString(
                    'en-NL',
                    { year: 'numeric', month: 'long' }
                  )
                }
              </p>
              <p className="team-member__subtitle">
                Starting date
              </p>
            </div>
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
            {`Detailed information about ${firstName}`}
          </div>
          <div className="team-member__expand-current-employer">
            <p className="team-member__expand-title">
              {currentEmployer}
            </p>
            <p className="team-member__expand-subtitle">
              Current employer
            </p>
          </div>
          <div className="team-member__expand-starting-date">
            <p className="team-member__expand-title">
              {new Date(startingDate)
                .toLocaleDateString(
                  'en-NL',
                  { year: 'numeric', month: 'long' }
                )
              }
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
