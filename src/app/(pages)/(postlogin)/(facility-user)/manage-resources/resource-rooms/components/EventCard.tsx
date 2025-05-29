// components/EventCard.tsx
import React from 'react';
import { Box, Typography, Chip, Avatar, Stack, Paper } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getPriorityStatusColor } from '@/app/utils/util';

// TODO: update all icons
export interface EventData {
  title: string;
  location: string;
  time: string;
  organizer: string;
  attendees: number;
  isRecurring?: boolean;
  priority?: 'High' | 'Medium' | 'Low';
  icon: 'event' | 'person' | 'calendar';
}

interface EventCardProps {
  event: EventData;
}

const iconMap = {
  event: <EventIcon />,
  person: <PersonIcon />,
  calendar: <CalendarMonthIcon />
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, location, time, organizer, attendees, isRecurring, priority, icon } = event;

  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: '#F4EBFF', color: '#7F56D9' }}>
          {iconMap[icon]}
        </Avatar>
        <Box flexGrow={1}>
          <Typography fontWeight="bold">{title}</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5, mb: 0.5 }}>
            {isRecurring && <Chip label="Recurring" color="secondary" size="small" sx={{ backgroundColor: '#7F56D9', color: '#fff' }} />}
            {priority && <Chip label={priority} color={getPriorityStatusColor(priority)} size="small" />}
          </Stack>
          <Typography variant="body2" color="text.secondary">{location}</Typography>
          <Typography variant="body2" color="text.secondary">{time}</Typography>
          <Typography variant="body2" color="text.secondary">Organizer: {organizer} | Attendees: {attendees}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default EventCard;
