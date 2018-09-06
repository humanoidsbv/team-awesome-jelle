import apiRoot from '../../apiRoot';

export const fetchGetTeamMembers = () => (
  fetch(`${apiRoot}team-members/`)
    .then(response => response.json())
);

export const fetchPostTeamMember = teamMember => (
  fetch(`${apiRoot}team-members/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(teamMember)
  }).then(response => response.json())
);

export default fetchGetTeamMembers;
