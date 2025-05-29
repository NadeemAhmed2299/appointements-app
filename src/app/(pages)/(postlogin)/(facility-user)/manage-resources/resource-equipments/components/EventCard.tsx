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
  const { title, location, time, organizer, isRecurring, priority, icon } = event;

  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: '#F4EBFF', color: '#7F56D9' }}>
          {iconMap[icon]}
        </Avatar>
        <Box flexGrow={1}>          
          <Stack direction="row" spacing={1} sx={{ mt: 0.5, mb: 0.5, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography fontWeight="bold">{title}</Typography>
            {isRecurring && <Chip label="Recurring" color="secondary" size="small" sx={{ backgroundColor: '#7F56D9', color: '#fff' }} />}
            {priority && <Chip label={priority} color={getPriorityStatusColor(priority)} size="small" />}
          </Stack>
          <Typography variant="body2" color="text.secondary">{location}</Typography>
          <Typography variant="body2" color="text.secondary">{time}</Typography>
          <Typography variant="body2" color="text.secondary">{organizer}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default EventCard;
