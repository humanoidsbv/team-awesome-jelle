import environment from '../../apiRoot';

export const fetchGetTeamMembers = () => (
  fetch(`${environment}team-members/`)
    .then(response => response.json())
);

export const fetchPostTeamMember = teamMember => (
  fetch(`${api}team-members/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(teamMember)
  }).then(response => response.json())
);

export default fetchGetTeamMembers;
