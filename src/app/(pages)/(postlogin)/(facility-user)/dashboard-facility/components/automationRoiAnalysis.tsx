import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import SatisfactoryCard from './satisfactoryCard'

interface laborCostDataPorps {
    label: string;
    value: string;
    change: string;
}

interface annualProjectionDataProps {
    label: string;
    value: string;
    change: string;
}

const laborCostData: laborCostDataPorps[] = [
  { label: 'Labor Cost Savings', value: '$3,260/mo', change: '' },
  { label: 'Increased Capacity', value: '+8.5%', change: '' }
];

const annualProjectionData: annualProjectionDataProps[] = [
  {
    label: 'Annual Projection',
    value: '$39,120 staff savings',
    change: '$142,000 additional revenue',
  },
];

function AutomationRoiAnalysis() {
  return (
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none', height: '100%' }} >
            <CardContent>
              <Typography variant="h2" mb={3}>Satisfaction Ratings</Typography>
              <SatisfactoryCard
                satisfactionRatings={laborCostData}
                gridValue={6}
                bgColor="#f4edfa"
                headingFontSize={12}
                subHeadingFontSize={14}
                statsPercentage={false}
              />
              <SatisfactoryCard
                satisfactionRatings={annualProjectionData}
                gridValue={12}
                bgColor="#e6f6f4"
                greenContent= {true}
                headingFontSize={20}
                subHeadingFontSize={18}
                isAnnualProjectionData = {true}
              />
            </CardContent>
          </Card>
        </Grid>
  )
}

export default AutomationRoiAnalysis
