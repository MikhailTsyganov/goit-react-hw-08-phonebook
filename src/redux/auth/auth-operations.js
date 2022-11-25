import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/signup', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(
      'Request failed. Perhaps a user with such data already exists.'
    );
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('User is not defined.');
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/logout');
    token.unset();
  } catch (error) {
    toast.error('Something went wrong. Try again later.');
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/current');
      return data;
    } catch (error) {}
  }
);
