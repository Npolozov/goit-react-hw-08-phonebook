import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

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
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
