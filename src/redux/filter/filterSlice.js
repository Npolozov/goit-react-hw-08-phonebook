import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/Operations';



const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return (state = action.payload);
    },
  },

  extraReducers: {
    [logOut.fulfilled](state) {
      return (state = '');
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
