import axios from '@/api/axios';

export const register = (credentials) => {
  return axios.post('/users', {user: credentials});
};

export const login = (credentials) => {
  return axios.post('/users/login', {user: credentials});
};

export const getCurrentUser = () => {
  return axios.get('/user');
};

export const updateCurrentUser = (currentUserInput) => {
  return axios
    .put('/user', {user: currentUserInput})
    .then((response) => response.data.user);
};
