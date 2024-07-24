import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../redux/eventsSlice';
import EventCard from './EventCard';
import { Grid } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const { state } = useTheme();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <Grid container spacing={3} style={{ backgroundColor: state.theme === 'light' ? '#fff' : '#333' }}>
      {events.map(event => (
        <Grid item key={event.id} xs={12} sm={6} md={4}>
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventList;
