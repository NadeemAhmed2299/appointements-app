import ComponentHeader from '@/app/components/componentHeader';
import { formatTimeAgo } from '@/app/utils/util';
import { notificationIcon } from '@/app/svg';
import { Box, Button, Card, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const notifications = [
    {
        id: 1,
        header: 'System Update Scheduled',
        body: 'A system update will occur on Saturday at 2 AM. Please save your work and log out beforehand.',
        timestamp: '2025-05-15 09:30 AM',
    },
    {
        id: 2,
        header: 'New Policy Announcement',
        body: 'A new workplace flexibility policy has been released. Read the full document in the internal portal.',
        timestamp: '2025-05-14 04:00 PM',
    },
    {
        id: 3,
        header: 'Task Completed',
        body: 'Your monthly compliance training has been completed successfully. You may download the certificate now.',
        timestamp: '2025-05-13 11:15 AM',
    },
    {
        id: 4,
        header: 'Security Alert',
        body: 'Unusual login detected from a new device. If this wasn’t you, please change your password immediately.',
        timestamp: '2025-05-12 07:45 AM',
    },
];

const RecentNotifications: React.FC = () => {
    return (

        <Card sx={{ p: 4, flex: 1 }}>

            <ComponentHeader pageName={"System Activity"} />

            <Box>
                <List disablePadding>
                    {notifications.map((notification) => (
                        <ListItem key={notification.id} alignItems="flex-start" sx={{ p: 0, m: 0 }}>
                            <ListItemIcon sx={{
                                minWidth: 'auto',
                                mr: 2,
                                padding: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0.85
                            }}>
                                <Image src={notificationIcon} alt="notification-icon" />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {notification.header}
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography
                                            variant="body2"
                                            component="span"
                                            color="textSecondary"
                                            sx={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {notification.body.slice(0, 240)}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary" display="block" mt={1}>
                                            {formatTimeAgo(notification.timestamp)}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box>
                <Button variant='text'>View All Notifications</Button>
            </Box>
        </Card>
    );
};

export default RecentNotifications;
