import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactOperations';
import { logOut } from 'redux/auth/Operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const fetchTasksFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addTaskFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteTaskFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const updateContactFulfilledReducer = (state, action) => {
  state.items.map(item => {
    if (item.id === action.payload.id) {
      item.name = action.payload.name;
      item.number = action.payload.number;
    }
    return item;
  });
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const logOutTasksFulfilledReducer = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchTasksFulfilledReducer)
      .addCase(addContact.fulfilled, addTaskFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteTaskFulfilledReducer)
      .addCase(updateContact.fulfilled, updateContactFulfilledReducer)
      .addCase(logOut.fulfilled, logOutTasksFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
