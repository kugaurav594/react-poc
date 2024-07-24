import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">Error: {error}</Typography>;
  }

  if (!event) {
    return <Typography variant="h6">Event not found.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h2">{event.title}</Typography>
      <Typography variant="h6">{event.date}</Typography>
      <Typography variant="body1">{event.location}</Typography>
      <img src={event.image} alt={event.title} style={{ width: '100%', height: 'auto' }} />
    </Container>
  );
};

export default EventDetail;
