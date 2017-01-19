import axios from 'axios';

const BASE_API_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top';

export const fetchRecent = () => {
  return axios.get(`${BASE_API_URL}/recent`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

export const fetchAllTime = () => {
  return axios.get(`${BASE_API_URL}/alltime`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}
