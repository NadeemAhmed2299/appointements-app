import { Card, CardContent, Grid, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts';
import React from 'react'

const xLabelsEfficiencyTrends: string[] = [
    'Nov (73%)',
    'Dec (76%)',
    'Jan (79%)',
    'Feb (83%)',
    'Mar (88%)',
    'Apr (92%)',
    'May (94%)',
];

const dataPointsEfficiencyTrends: number[] = [5, 20, 35, 55, 70, 83, 87];

function AutomationEfficiencyTrend() {
    return (
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
                <CardContent>
                    <Typography variant="h2" mb={3}>Automation Efficiency Trend</Typography>
                    <LineChart
                        xAxis={[{ scaleType: 'point', data: xLabelsEfficiencyTrends }]} // <-- Fix added here
                        series={[
                            {
                                data: dataPointsEfficiencyTrends,
                                color: "#7F56D9",
                            },
                        ]}
                        height={300}
                        sx={{
                            '& .MuiChartsLineElement-root': { strokeWidth: 2 },
                            '& .MuiChartsMarkElement-root': { r: 4, fill: '#7F56D9' },
                        }}
                    />
                </CardContent>
            </Card>
        </Grid>
    )
}

export default AutomationEfficiencyTrend
