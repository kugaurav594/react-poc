import React from 'react';
import EventList from '../components/EventList';
import AddEventForm from '../components/AddEventForm';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
       <Link to="/add-event">Add New Event</Link>
      </Typography>
      {/* <AddEventForm /> */}
      <Typography variant="h2" gutterBottom>
        Upcoming Events
      </Typography>
      <EventList />
    </Container>
  );
};

export default HomePage;
