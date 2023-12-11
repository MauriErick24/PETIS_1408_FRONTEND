import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://primesoft.tis.cs.umss.edu.bo/',
});

export default instance;
