import axios from 'axios';
import { bttvUrl } from './constants';

export const fetchBTTV = (user = '') => {
  return axios.get(`${bttvUrl}/${user}`);
};
