const api = 'http://localhost:3001/api/';

export const fetchGetTeamMembers = () => (
  fetch(`${api}team-members/`)
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
