import { createSlice } from '@reduxjs/toolkit';
import { registerUse, logIn, logOut, refreshUser } from './Operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: null,
};

const handlePending = state => {
  state.authIsLoading = true;
};

const handleRejected = (state, action) => {
  state.authError = action.payload;
  state.authIsLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUse.pending]: handlePending,
    [registerUse.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authIsLoading = false;
      state.authError = null;
    },
    [registerUse.rejected]: handleRejected,
    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authIsLoading = false;
      state.authError = null;
    },
    [logIn.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.authError = null;
      state.authIsLoading = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.authIsLoading = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.authError = null;
      state.authIsLoading = false;
    },
    [refreshUser.rejected](state, action) {
      state.authError = action.payload;
      state.isRefreshing = false;
      state.authIsLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
