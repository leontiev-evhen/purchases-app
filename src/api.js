import { API_URL } from './config';
import axios from 'axios'

export const get = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/purchases`)
      .then(response => {
        if(response.status !== 200) {
          return reject({ status: false, data: response.data });
        }
        resolve({ status: true, data: response.data});
      })
  });
};

export const post = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/purchases`, data)
      .then(response => {
        if(response.status !== 200) {
          return reject({ status: false, data: response.data });
        }
        resolve({ status: true, message: response.data});
      })
  });
};

export const put = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${API_URL}/purchases/${id}`, data)
      .then(response => {
        if(response.status !== 200) {
          return reject({ status: false, data: response.data });
        }
        resolve({ status: true, message: response.data});
      })
  });
};

export const remove = id => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/purchases/${id}`)
      .then(response => {
        if(response.status !== 200) {
          return reject({ status: false, data: response.data });
        }
        resolve({ status: true, message: response.data});
      })
  });
};
