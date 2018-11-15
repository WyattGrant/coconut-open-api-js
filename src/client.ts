import axios, { AxiosInstance } from 'axios';

const Client = (domain: string): AxiosInstance => {
  return axios.create({
    baseURL: `https://${domain}.coconutcalendar.com/api/v2/open`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
};

export default Client;
