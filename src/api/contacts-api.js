// import axios from 'axios';

// const contactInstance = axios.create({
//   baseURL: 'https://65c7eb18e7c384aada6f1634.mockapi.io/contacts/contacts',
// });

// export const requestContacts = async () => {
//   const { data } = await contactInstance.get('/');
//   return data;
// };

// export const requestAddContact = async body => {
//   const { data } = await contactInstance.post('/', body);
//   return data;
// };

// export const requestDeleteContact = async id => {
//   const { data } = await contactInstance.delete(`/${id}`);
//   return data;
// };

import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

export const requestContacts = async token => {
  const { data } = await contactInstance.get(`/${token}`);
  return data;
};

export const requestAddContact = async body => {
  const { data } = await contactInstance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactInstance.delete(`/${id}`);
  return data;
};

// !========================================

const contactRegisterLogin = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerContact = async dataUser => {
  const { data } = await contactRegisterLogin.post('/signup', dataUser);
  return data;
};

export const loginContact = async dataUser => {
  const { data } = await contactRegisterLogin.post('/login', dataUser);
  return data;
};

export const clearAuthContact = async () => {
  const { data } = await contactRegisterLogin.post('/logout');
  return data;
};

export const setAuth = async () => {
  const { data } = await contactRegisterLogin.get('/current');
  return data;
};

// email: 'kozachokx@gmail.com';
// name: 'volodymyr';
// password: 'sdfwer2345dfg';
// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…yMzF9.YyYFaZYcbVLr3woFUQQJESeOPQsFVliD_KXS37rjNvc'}

// email: 'kozacokx@gmail.com';
// name: 'volodymyr';
// password: 'sdfwer2345dfg';
