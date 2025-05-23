import BusinessIcon from '@mui/icons-material/Business';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Card, Grid, Typography } from '@mui/material';

function ExternalLinks() {
    const items = [
        { icon: <BusinessIcon fontSize="large" />, label: 'Manage Facility', link: '/facility' },
        { icon: <DesignServicesIcon fontSize="large" />, label: 'Manage Services', link: '/services' },
        { icon: <PersonAddIcon fontSize="large" />, label: 'Add Staff', link: '/staff' },
        { icon: <FileDownloadIcon fontSize="large" />, label: 'Export Reports', link: '/reports' },
    ];

    return (
        <>
            {items.map((item, index) => (
                <Grid size={{ xs: 12, md: 3 }} key={index}>
                    <Card
                        variant="outlined"
                        component={"a"}
                        href={item.link}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            py: 4,
                            '&:hover': {
                                boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
                                transition: 'box-shadow 0.3s ease-in-out',
                            },
                        }}
                    >
                        {item.icon}
                        <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                            {item.label}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </>
    );
}

export default ExternalLinks;