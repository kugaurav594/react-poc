import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const EventCard = ({ event }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={event.title}
        height="140"
        image={event.image}
        title={event.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {event.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {event.location}
        </Typography>
        <Link to={`/events/${event.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default EventCard;
