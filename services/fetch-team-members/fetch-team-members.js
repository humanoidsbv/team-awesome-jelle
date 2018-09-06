import environment from '../../apiRoot';

export const fetchGetTeamMembers = () => (
  fetch(`${environment}team-members/`)
    .then(response => response.json())
);

export default fetchGetTeamMembers;
