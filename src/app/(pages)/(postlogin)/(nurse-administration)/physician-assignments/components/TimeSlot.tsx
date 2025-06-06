// src/components/PhysicianCalendar/TimeSlot.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TimeSlot as TimeSlotType } from '../schedule';

interface TimeSlotProps {
  slot: TimeSlotType;
  onClick?: () => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ slot, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (slot.status === 'out-of-office') {
    return (
      <Box 
        sx={{ 
          fontSize: '0.75rem', 
          color: 'text.secondary', 
          bgcolor: 'action.hover', 
          p: 0.5, 
          mb: 0.5, 
          borderRadius: 1, 
          textAlign: 'center' 
        }}
      >
        Out of Office
      </Box>
    );
  }

  const bgColor = slot.status === 'booked' ? 'primary.main' : 'error.main';
  const hoverColor = slot.status === 'booked' ? 'primary.dark' : 'error.dark';

  return (
    <Box
      sx={{
        bgcolor: bgColor,
        color: 'common.white',
        fontSize: '0.75rem',
        p: 0.5,
        mb: 0.5,
        borderRadius: 1,
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background-color 0.2s',
        '&:hover': {
          bgcolor: hoverColor
        }
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slot.time}
    </Box>
  );
};

export default TimeSlot;