import apiRoot from '../../apiRoot';

export const fetchGetClients = () => (
  fetch(`${apiRoot}clients/`)
    .then(response => response.json())
);

export const fetchPostClient = client => (
  fetch(`${apiRoot}clients/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client)
  }).then(response => response.json())
);
