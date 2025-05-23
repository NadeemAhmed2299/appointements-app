import { Card, CardContent, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

interface InfoCardProps {
    title: string;
    value: string;
}

interface waitListData {
    treatment: string;
    count: string;
    nextAvailable: string;
}

const waitListManagement: InfoCardProps[] = [
    { title: 'Current', value: '37' },
    { title: 'Avg. Wait', value: '3.2 d' },
    { title: 'Conversion', value: '82%' }
];

const waitListTreatmentData: waitListData[] = [
    { treatment: 'Chemotherapy', count: '18', nextAvailable: 'April 26' },
    { treatment: 'Radiation', count: '09', nextAvailable: 'April 28' },
];


function WaitListManagement() {
    const columns = [
        { field: 'treatment', headerName: 'Treatment', flex: 1 },
        { field: 'count', headerName: 'Count', flex: 1 },
        { field: 'nextAvailable', headerName: 'Next Available', flex: 1 }
    ]
    return (

        <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
                <CardContent>
                    <Typography variant="h2" mb={3}>Waitlist Management</Typography>
                    <Grid container spacing={2} sx={{ paddingBottom: '20px' }}>
                        {waitListManagement.map((listVal, index) => {
                            return (
                                <Grid size={{ xs: 12, md: 12, lg: 4 }} key={index}>
                                    <Card
                                        sx={{
                                            border: `1px solid ${Number(listVal.value) < 5 ? '#FF0000' : ''}`,
                                            boxShadow: 'none',
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h5" color={Number(listVal.value) < 5 ? 'error.main' : ''} fontWeight="700" sx={{ textAlign: 'center' }}>{listVal.title}</Typography>
                                            <Typography variant="h2" color={Number(listVal.value) < 5 ? 'error.main' : ''} fontWeight="700" sx={{ textAlign: 'center' }}>{listVal.value}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>

                    <DataGrid
                        rows={waitListTreatmentData.map((row, index) => ({ id: index, ...row }))}
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Grid>
    )
}

export default WaitListManagement;
