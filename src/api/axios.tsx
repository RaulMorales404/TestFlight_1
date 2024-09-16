import axios from 'axios';

const baseURL = 'https://newsapi.org/v2/';
const config = {
  ApiKey: '9176b2bb76e74344abf17bd0456a2971',
};

const HttpAxiosResponse = axios.create({
  baseURL: baseURL,
  params: {
    ...config,
  },
});
export default HttpAxiosResponse;
