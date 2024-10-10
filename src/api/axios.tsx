import axios from 'axios';

const baseURL = 'https://newsapi.org/v2/';
const config = {
  ApiKey: 'c5d7705ca6954e04b62bea782addf74f',
  // 9176b2bb76e74344abf17bd0456a2971   c5d7705ca6954e04b62bea782addf74f

};

const HttpAxiosResponse = axios.create({
  baseURL: baseURL,
  params: {
    ...config,
  },
});
export default HttpAxiosResponse;
