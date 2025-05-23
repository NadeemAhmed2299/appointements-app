'use client';

import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    Grid,
} from '@mui/material';
import { Button, ButtonProps } from '@mui/material';
import Image from 'next/image';
import { cube, graph, people } from '@/app/svg';


interface CardDataProps {
    icon: any;
    title: string;
    description: string;
}

const cardData: CardDataProps[] = [
    {
        icon: people,
        title: 'Provider Workload Optimization',
        description:
            'Dr. Roberts is consistently overbooked (95% capacity). Redistribute 3 appointments per day to Dr. Patel to balance workload and improve satisfaction.',
    },
    {
        icon: cube,
        title: 'No-Show Rate Reduction',
        description:
            'Patients with afternoon appointments have a 12% no-show rate. Implement targeted reminder system with transportation options for these patients.',
    },
    {
        icon: graph,
        title: 'Waitlist Optimization',
        description:
            '3 predicted cancellations tomorrow for chemotherapy appointments. Contact waitlisted patients with 89% probability of acceptance (patients identified).',
    },
];

const AiPoweredCard = () => {
    return (
        <Grid container spacing={2} mb={2}>
            <Grid size={{ xs: 12, md: 12 }}>
                <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
                    <CardContent>
                        <Typography variant="h2" mb={3}>Al-Powered Recommendations</Typography>
                        <Grid container spacing={3}>
                            {cardData.map((card, index) => (
                                <Grid key={index} size={{ xs: 12, md: 4 }}>
                                    <Card
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 2,
                                            minHeight: 220,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            padding: 2,
                                        }}
                                    >
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Image src={card.icon} alt="image-icon" width={60} height={60} />
                                            <Typography fontWeight={600} color="text.primary">{card.title}</Typography>
                                        </Box>

                                        <CardContent sx={{ pl: 0 }}>
                                            <Typography fontSize={14} color="text.secondary">
                                                {card.description}
                                            </Typography>
                                        </CardContent>

                                        <Stack direction="row" spacing={1} mt="auto">
                                            <Button
                                                variant="contained"
                                                size="small"                                                
                                                sx={{ backgroundColor: '#7F56D9', color: '#fff' }}
                                            >Apply</Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{ backgroundColor: '#fff', color: '#7F56D9', border: '1px solid #7F56D9' }}
                                            >Details</Button>
                                        </Stack>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default AiPoweredCard;
