import React from 'react';
import { Box, Typography } from '@mui/material';
import EventCard, { EventData } from './EventCard';

const events: EventData[]= [
  {
    title: 'Equipment Calibration',
    location: 'Treatment Room 5',
    time: '5/20/2025 08:00 AM - 12:00 PM',
    organizer: 'Maintenance Team',
    attendees: 2,
    isRecurring: true,
    priority: 'High',
    icon: 'event'
  },
  {
    title: 'Patient Consultation',
    location: 'Patient Consultation Room',
    time: '5/20/2025 01:00 PM - 02:00 PM',
    organizer: 'Dr. Williams',
    attendees: 2,
    priority: 'High',
    icon: 'person'
  },
  {
    title: 'Weekly Management Meeting',
    location: 'Conference Room A1',
    time: '5/21/2025 09:00 AM - 10:30 AM',
    organizer: 'Sarah Johnson',
    attendees: 8,
    isRecurring: true,
    priority: 'Medium',
    icon: 'calendar'
  }
];

const UpcomingEvents = () => {
  return (
    <Box pt={4}>
      <Typography variant="h2" mb={2}>Upcoming Events</Typography>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </Box>
  );
};

export default UpcomingEvents;
