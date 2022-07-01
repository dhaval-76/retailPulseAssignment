import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  isLoading: false,
  isAuthenticated: true,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    loginSuccess(state, {payload}) {
      state.username = payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFail(state, {payload}) {
      state.error = payload;
      state.isLoading = false;
    },
    removeError(state) {
      state.error = '';
    },
  },
});

export const {login, loginSuccess, loginFail, removeError} = authSlice.actions;

export default authSlice.reducer;
