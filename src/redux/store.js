import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice/contactsSlice';
import { filterSlice } from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
