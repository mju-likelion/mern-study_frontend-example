import axios from 'axios';

const token = localStorage.getItem('jwtToken');
let header;

if (token) {
  header = { Authorization: `Bearer ${token}` };
}

const instance = axios.create({
  url: '/',
  headers: header,
  timeout: 1000,
});

export default instance;
