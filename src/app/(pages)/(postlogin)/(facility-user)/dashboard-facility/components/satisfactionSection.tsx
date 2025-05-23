import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
import SatisfactoryCard from './satisfactoryCard';

const satisfactionRatings = [
  { label: 'Provider Satisfaction', value: '3.85', change: '0.35' },
  { label: 'Nurse Satisfaction', value: '4.15', change: '0.45' },
  { label: 'Admin Satisfaction', value: '4.25', change: '0.31' },
  { label: 'Avg Wait Time', value: '12 min', change: '3 min', danger: true },
];

const satisfactionRatingsGreen = [
  { label: 'App Engagement', value: '76%', change: '(4%)' },
  { label: 'Digital Check-in', value: '83%', change: '(7%)' },
]

function SatisfactionSection() {
  return (
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none', height: '100%' }} >
            <CardContent>
              <Typography variant="h2" mb={3}>Satisfaction Ratings</Typography>
              <SatisfactoryCard satisfactionRatings={satisfactionRatings} gridValue={3} bgColor='#7F56D91A' />
              <SatisfactoryCard satisfactionRatings={satisfactionRatingsGreen} gridValue={6} bgColor='#00b69b1a' greenContent={true} />
            </CardContent>
          </Card>
        </Grid>
  )
}

export default SatisfactionSection;
