import axios from 'axios';

const globalURL = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export default globalURL;
