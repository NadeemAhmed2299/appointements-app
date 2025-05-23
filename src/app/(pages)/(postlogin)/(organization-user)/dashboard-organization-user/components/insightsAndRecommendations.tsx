import ComponentHeader from '@/app/components/componentHeader';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsightsIcon from '@mui/icons-material/Insights';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { cube, graph, people } from '@/app/svg';
import Image from 'next/image';

const items = [
    {
        icon: people,
        title: 'Resource Optimization',
        description: 'Efficient allocation and utilization of resources to improve workflow.',
        link: {
            text: 'Apply Recommendation',
            url: '/apply-recommendation'
        }
    },
    {
        icon: cube,
        title: 'Treatment Forecast',
        description: 'Predictive analysis to forecast patient treatment pathways. Each inline card now has a subtle gray border (#ccc) for clearer visual separation. Let me know if you want to tweak the border style or add hover effects.',
        link: {
            text: 'View Forecast Details',
            url: '/view-forecast-details'
        }
    },
    {
        icon: graph,
        title: 'Wait Time Reduction',
        description: 'Strategies to minimize patient wait times for better experience.',
        link: {
            text: 'Apply Recommendation',
            url: '/apply-recommendation'
        }
    }
];

function InsightsAndRecommendations() {

    return (
        <Grid size={{ xs: 12, md: 12 }}>
            <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
                <CardContent>
                    <ComponentHeader pageName={"AI Insights & Recommendations"} />
                    <Grid container spacing={3}>
                        {items.map((item, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        flex: { xs: '1 1 100%', sm: '1 1 30%' },
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        p: 2,
                                        height: '100%',
                                    }}
                                >
                                    <Box sx={{ mr: 2 }}>
                                        <Image src={item.icon} alt="image-icon" width={60} height={60} />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <Button sx={{ mt: 1 }} variant='text' href={item.link.url}>{item.link.text}</Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default InsightsAndRecommendations