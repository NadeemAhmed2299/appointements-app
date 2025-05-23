import BusinessIcon from '@mui/icons-material/Business';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Card, Grid, Typography } from '@mui/material';
import {manageResources, manageServices, manageUsers} from "@/app/svg";
import Image from 'next/image';

function ExternalLinks() {
    const items = [
        { icon: manageResources, label: 'Manage Resourse', link: '/' },
        { icon: manageServices, label: 'Manage Services', link: '/' },
        { icon: manageUsers, label: 'Manage Services', link: '/' }
    ];

    return (
        <>
            {items.map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
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
                        <Image src={item.icon} alt="footer Icon" />
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