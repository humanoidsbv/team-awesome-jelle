import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './team-member-overview.scss';

import TeamMember from '../team-member/TeamMember';

class TeamMemberOverview extends React.Component {
  static propTypes = {
    teamMembers: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      currentEmployer: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      employeeNumber: PropTypes.string.isRequired,
      facebookHandle: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      jobTitle: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      startingDate: PropTypes.string.isRequired,
      twitterHandle: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired
    })).isRequired,
    onRequestTeamMembers: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onRequestTeamMembers();
  }

  render() {
    const { teamMembers } = this.props;
    return (
      <React.Fragment>
        <div className="team-member__top-wrapper">
          <h1 className="team-member__top-title">
            All Humanoids
          </h1>
          <Link href="/add-team-member">
            <button
              className="team-member__add-button"
              type="button"
            >
              New Humanoid
            </button>
          </Link>
          <button
            className="team-member__sort-button"
            type="button"
          >
            Sort by:
            <img
              alt="arrow down sign"
              className="team-member__sort-button-icon"
              height="5px"
              src="/static/icons/arrow-down.svg"
              width="5px"
            />
          </button>
        </div>
        <div className="team-member__content-wrapper">
          {teamMembers.map(teamMember => (
            <React.Fragment key={teamMember.id}>
              <TeamMember
                avatar={teamMember.avatar}
                currentEmployer={teamMember.currentEmployer}
                employeeNumber={teamMember.employeeNumber}
                firstName={teamMember.firstName}
                jobTitle={teamMember.jobTitle}
                lastName={teamMember.lastName}
                startingDate={teamMember.startingDate}
              />
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TeamMemberOverview;
