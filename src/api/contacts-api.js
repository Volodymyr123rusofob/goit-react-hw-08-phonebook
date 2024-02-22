import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

const setToken = token => {
  if (token) {
    return (contactInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  contactInstance.defaults.headers.authorization = '';
};

export const requestContacts = async () => {
  const { data } = await contactInstance.get();
  console.log(data);
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

export const registerContact = async dataUser => {
  const { data } = await contactRegisterLogin.post('/signup', dataUser);
  setToken(data.token);
  return data;
};

export const loginContact = async dataUser => {
  const { data } = await contactRegisterLogin.post('/login', dataUser);
  setToken(data.token);
  return data;
};

export const clearAuthContact = async () => {
  const { data } = await contactRegisterLogin.post('/logout');
  setToken();
  return data;
};

export const setAuth = async token => {
  setToken(token);
  try {
    const { data } = await contactRegisterLogin.get('/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// email: 'kozachokx@gmail.com';
// name: 'volodymyr';
// password: 'sdfwer2345dfg';
// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…yMzF9.YyYFaZYcbVLr3woFUQQJESeOPQsFVliD_KXS37rjNvc'}

// email: 'kozacokx@gmail.com';
// name: 'volodymyr';
// password: 'sdfwer2345dfg';
