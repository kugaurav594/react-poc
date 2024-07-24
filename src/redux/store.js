import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    theme: themeReducer,
  },
});

export default store;
