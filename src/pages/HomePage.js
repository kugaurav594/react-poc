import React from 'react';
import EventList from '../components/EventList';
import AddEventForm from '../components/AddEventForm';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Add New Events
      </Typography>
      <AddEventForm />
      <Typography variant="h2" gutterBottom>
        Upcoming Events
      </Typography>
      <EventList />
    </Container>
  );
};

export default HomePage;
