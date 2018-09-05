const api = 'http://localhost:3001/api/';

export const fetchTeamMembers = () => (
  fetch(`${api}teamMembers/`)
    .then(response => response.json())
);

export default fetchTeamMembers;
