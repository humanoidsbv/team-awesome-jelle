const api = 'http://localhost:3001/api/';

export const fetchTeamMembers = () => (
  fetch(`${api}team-members/`)
    .then(response => response.json())
);

export default fetchTeamMembers;
