const production = 'production';
const development = 'development';

const environments = {
  [production]: 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-jelle/',
  [development]: 'http://localhost:3001/api/'
};

const environment = process.env.NODE_ENV === production ? production : development;

export default environments[environment];
