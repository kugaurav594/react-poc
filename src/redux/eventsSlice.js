import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/events';

// Async thunk to fetch events
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload); // Add new event to state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
