import React from 'react';
import PropTypes from 'prop-types';

import './team-member-overview.scss';

import AddTeamMember from '../add-team-member/AddTeamMember';
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
    isAdding: PropTypes.bool.isRequired,
    onRequestTeamMembers: PropTypes.func.isRequired,
    onToggleForm: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onRequestTeamMembers();
  }

  render() {
    const { isAdding, onToggleForm, teamMembers } = this.props;
    return (
      <React.Fragment>
        <div className="team-member__top-wrapper">
          <p className="team-member__top-title">
            {isAdding ? 'Add new team member' : 'All Humanoids'}
          </p>
          <button
            className={`
              team-member__add-button
              team-member__add-button${isAdding ? '--invisible' : '--visible'}
            `}
            onClick={onToggleForm}
            type="button"
          >
            <img
              alt="plus sign"
              className="team-member__add-button-icon"
              height="10px"
              src="/static/icons/plus.svg"
              width="10px"
            />
            New Humanoid
          </button>
          <button
            className={`
              team-member__sort-button
              team-member__sort-button${isAdding ? '--invisible' : '--visible'}
            `}
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
          <button
            className={`
              team-member__cancel-button
              team-member__cancel-button${isAdding ? '--visible' : '--invisible'}
            `}
            onClick={onToggleForm}
            type="button"
          >
            Cancel
          </button>
          <button
            className={`
              team-member__save-button
              team-member__save-button${isAdding ? '--visible' : '--invisible'}
            `}
            type="button"
          >
            Save
          </button>
        </div>
        <div className={`
          team-member__form-wrapper
          team-member__form-wrapper${isAdding ? '--visible' : '--invisible'}
        `}
        >
          <AddTeamMember />
        </div>
        <div className={`
          team-member__content-wrapper
          team-member__content-wrapper${isAdding ? '--invisible' : '--visible'}
          `}
        >
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
