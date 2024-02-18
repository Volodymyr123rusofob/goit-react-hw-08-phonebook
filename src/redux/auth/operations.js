import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from '../../api/contacts-api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await contactApi.registerContact(credentials);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await contactApi.loginContact(credentials);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await contactApi.clearAuthContact();
      contactApi.clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      contactApi.setAuthHeader(persistedToken);
      const res = await contactApi.setAuth();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
