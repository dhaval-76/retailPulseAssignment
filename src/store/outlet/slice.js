import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  outlets: [],
  isLoading: false,
  error: '',
};

const outletSlice = createSlice({
  name: 'outlet',
  initialState,
  reducers: {
    searchOutlet(state, {payload}) {
      state.isLoading = true;
    },
    searchOutletSuccess(state, {payload}) {
      state.outlets = payload;
      state.isLoading = false;
    },
    searchOutletFail(state, {payload}) {
      state.error = payload;
      state.isLoading = false;
    },
    outletRemoveError(state) {
      state.error = '';
    },
    removeOutlet(state, {payload}) {
      state.outlets = [];
    },
  },
});

export const {
  searchOutlet,
  searchOutletSuccess,
  searchOutletFail,
  outletRemoveError,
  removeOutlet,
} = outletSlice.actions;

export default outletSlice.reducer;
