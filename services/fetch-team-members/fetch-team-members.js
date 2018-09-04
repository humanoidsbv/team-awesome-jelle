const api = 'http://localhost:3001/api/';

export const getTeamMembers = () => (
  fetch(`${api}teamMembers/`)
    .then(response => response.json())
);

export default getTeamMembers;
