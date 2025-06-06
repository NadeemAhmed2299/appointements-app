// src/components/PhysicianCalendar/UtilizationBar.tsx
import { Typography } from '@mui/material';

interface UtilizationBarProps {
  percentage: number;
}

const UtilizationBar: React.FC<UtilizationBarProps> = ({ percentage }) => {
  return (
    <Typography variant="caption" sx={{ color: 'success.main', textAlign: 'center', mt: 0.5, display: 'block' }}>
      Utilization: {percentage}%
    </Typography>
  );
};

export default UtilizationBar;