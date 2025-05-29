import React from 'react';
import { Box, Typography } from '@mui/material';
import EventCard, { EventData } from './EventCard';

const events: EventData[] = [
  {
    title: 'Coil Replacement',
    location: 'MRI Scanner A',
    time: '5/20/2025 09:00 AM - 5/22/2025 05:00 PM',
    organizer: 'External Vendor - MedTech',
    priority: 'High',
    icon: 'event'
  },
  {
    title: 'Software Update',
    location: 'CT Scanner 2',
    time: '5/20/2025 09:00 AM - 5/22/2025 05:00 PM',
    organizer: 'System Admin Team',
    priority: 'Low',
    icon: 'person'
  },
  {
    title: 'Quarterly Calibration',
    location: 'Linear Accelerator #1',
    time: '5/20/2025 09:00 AM - 5/22/2025 05:00 PM',
    organizer: 'External Vendor - MedTech',
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
