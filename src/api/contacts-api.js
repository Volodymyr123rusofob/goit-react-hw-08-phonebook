import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  contactInstance.defaults.headers.common.authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  contactInstance.defaults.headers.common.authorization = '';
};

export const requestContacts = async () => {
  const { data } = await contactInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await contactInstance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactInstance.delete(`/contacts/${id}`);
  return data;
};

// !========================================

export const registerContact = async dataUser => {
  const { data } = await contactInstance.post('/users/signup', dataUser);
  setAuthHeader(data.token);
  return data;
};

export const loginContact = async dataUser => {
  const { data } = await contactInstance.post('/users/login', dataUser);
  setAuthHeader(data.token);
  return data;
};

export const clearAuthContact = async () => {
  const { data } = await contactInstance.post('/users/logout');
  clearAuthHeader();
  return data;
};

export const setAuth = async token => {
  setAuthHeader(token);
  try {
    const { data } = await contactInstance.get('/users/current');
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};
