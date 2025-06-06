import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";

export const CalendarLegend: React.FC = () => {
  return (
    <Paper sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1.5 }}>
        Calendar Legend
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'text.secondary', mb: 1, display: 'block' }}>
          Appointment Types:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 12, height: 12, bgcolor: 'primary.main', mr: 1 }} />
            <Typography variant="caption">Consultation</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 12, height: 12, bgcolor: 'secondary.main', mr: 1 }} />
            <Typography variant="caption">Chemo Review</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 12, height: 12, bgcolor: 'warning.main', mr: 1 }} />
            <Typography variant="caption">Follow-up</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 12, height: 12, bgcolor: 'info.main', mr: 1 }} />
            <Typography variant="caption">Lunch Break</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 12, height: 12, bgcolor: 'text.disabled', mr: 1 }} />
            <Typography variant="caption">Out of Office</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 12, height: 12, bgcolor: 'success.main', mr: 1 }} />
            <Typography variant="caption">Research / Half day</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'text.secondary', mb: 1, display: 'block' }}>
          Utilization:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 12, height: 8, bgcolor: 'success.main', borderRadius: 0.5, mr: 1 }} />
            <Typography variant="caption">75-100% (Good)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 12, height: 8, bgcolor: 'warning.main', borderRadius: 0.5, mr: 1 }} />
            <Typography variant="caption">50-74% (Medium)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 12, height: 8, bgcolor: 'error.main', borderRadius: 0.5, mr: 1 }} />
            <Typography variant="caption">0-49% (Low)</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'text.secondary', mb: 1, display: 'block' }}>
          Top Booked Physicians:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="caption">1. Dr. Martinez - 90% Utilization</Typography>
          <Typography variant="caption">2. Dr. Thompson - 90% Utilization</Typography>
          <Typography variant="caption">3. Dr. Williams - 78% Utilization</Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'text.secondary', mb: 1, display: 'block' }}>
          Under-booked Physicians:
        </Typography>
        <Box>
          <Typography variant="caption">1. Dr. Johnson - 35% Utilization</Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            (Priority scheduling opportunity)
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="caption" sx={{ fontWeight: 'medium', color: 'text.secondary', mb: 1, display: 'block' }}>
          Total Appointments:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="caption">• 47 Consultations</Typography>
          <Typography variant="caption">• 26 Chemo Reviews</Typography>
          <Typography variant="caption">• 18 Follow-ups</Typography>
        </Box>
      </Box>
    </Paper>
  );
};