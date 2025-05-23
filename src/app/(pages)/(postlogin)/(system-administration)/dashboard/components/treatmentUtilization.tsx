

import ComponentHeader from '@/app/components/componentHeader';
import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react';

interface UtilizationData {
    department: string;
    utilization: number; // percentage from 0 to 100
}

// interface TreatmentUtilizationProps {
//     data: UtilizationData[];
// }

// Sample data for demonstration
export const sampleUtilizationData: UtilizationData[] = [
    { department: 'Cardiology', utilization: 75 },
    { department: 'Radiology', utilization: 60 },
    { department: 'Oncology', utilization: 90 },
    { department: 'Neurology', utilization: 45 },
];

const TreatmentUtilization: React.FC = () => {
    return (
        <Card sx={{ p: 4, flex: 1, height: "100%" }}>

            <ComponentHeader pageName={"Treatment Utilization"} />

            <Box>
                {sampleUtilizationData.map((item, index) => (
                    <Box key={index} mb={2}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid>
                                <Typography variant="body1">{item.department}</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{item.utilization}%</Typography>
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
        </Card>
    );
};

export default TreatmentUtilization;

