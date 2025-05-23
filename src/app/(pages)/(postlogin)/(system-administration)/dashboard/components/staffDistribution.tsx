import ComponentHeader from '@/app/components/componentHeader';
import { Box, Button, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react';

interface CenterStaffCount {
    center: string;
    utilization: number; // percentage from 0 to 100
}

// Sample data for demonstration
export const sampleCenterStaffCount: CenterStaffCount[] = [
    { center: 'Comprehensive Cancer Center', utilization: 75 },
    { center: 'North Valley Oncology', utilization: 60 },
    { center: 'East Regional Cancer Institute', utilization: 90 },
];


const StaffDistribution: React.FC = () => {
    return (
        <Card sx={{ p: 4, flex: 1, height: "100%" }}>

            <ComponentHeader pageName={"Staff Distribution"} />

            <Box sx={{ flexGrow: 1, mb: 4 }}>
                <Grid container spacing={2}>
                    {[
                        { department: 'Cardiology', count: 24, percent: '20%' },
                        { department: 'Radiology', count: 18, percent: '15%' },
                        { department: 'Oncology', count: 30, percent: '25%' },
                    ].map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ border: '1px solid #ccc' }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {item.department}
                                    </Typography>
                                    <Typography variant="h4" fontWeight="bold">
                                        {item.count}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {item.percent} of staff
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <ComponentHeader pageName={"Staff by Cancer Center"} />

            <Box>
                {sampleCenterStaffCount.map((item, index) => (
                    <Box key={index} mb={2}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid>
                                <Typography variant="body1">{item.center}</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{item.utilization} staff</Typography>
                            </Grid>
                        </Grid>
                        <LinearProgress
                            variant="determinate"
                            value={item.utilization}
                            sx={{ height: 8, borderRadius: 4, mt: 1 }}
                        />
                    </Box>
                ))}
            </Box>

            <Box>
                <Button variant='text'>Manage Staff</Button>
            </Box>
        </Card>
    );
};

export default StaffDistribution;
