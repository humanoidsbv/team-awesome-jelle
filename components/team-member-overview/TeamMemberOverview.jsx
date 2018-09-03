import React from 'react';

import './team-member-overview.scss';

import TeamMember from '../team-member/TeamMember';

class TeamMemberOverview extends React.Component {
  static propTypes = {

  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="team-member__top-wrapper">
          <p className="team-member__top-title">
            All Humanoids
          </p>
          <button
            className="team-member__add-button"
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
          <TeamMember />
        </div>
      </React.Fragment>
    );
  }
}

export default TeamMemberOverview;
