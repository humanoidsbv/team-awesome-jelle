const api = 'http://localhost:3001/api/';

export const fetchGetTeamMembers = () => (
  fetch(`${api}team-members/`)
    .then(response => response.json())
);

export default fetchGetTeamMembers;
