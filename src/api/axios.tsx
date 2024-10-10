import axios from 'axios';

const baseURL = 'https://newsapi.org/v2/';
const config = {
  ApiKey: 'c5d7705ca6954e04b62bea782addf74f',
 

};

const HttpAxiosResponse = axios.create({
  baseURL: baseURL,
  params: {
    ...config,
  },
});
export default HttpAxiosResponse;
