import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

import { spikeIcon, spikeErrorIcon } from "@/app/svg";

interface SatisfactionRating {
    label: string;
    value: string;
    change: string;
    danger?: boolean;
}

interface SatisfactoryCardProps {
    satisfactionRatings: SatisfactionRating[];
    gridValue: number;
    bgColor: string;
    greenContent?: boolean,
    headingFontSize?: number,
    subHeadingFontSize?: number,
    statsPercentage?: boolean,
    isAnnualProjectionData?: boolean
}

const SatisfactoryCard: React.FC<SatisfactoryCardProps> = ({
    satisfactionRatings,
    gridValue,
    bgColor,
    greenContent = false,
    headingFontSize = 12,
    subHeadingFontSize = 14,
    statsPercentage = true,
    isAnnualProjectionData = false
}) => {
    return (
        <Grid container spacing={1} sx={{ marginBottom: '20px' }}>
            {satisfactionRatings.map((rating, idx) => (
                <Grid size={{ xs: 12, sm: gridValue, md: gridValue }} key={idx}>
                    <Box
                        p={1}
                        bgcolor={bgColor}
                        border={'1px solid'}
                        borderColor={`${greenContent ? 'success.main' : 'primary.main'}`}
                        sx={{ borderRadius: '12px' }}
                    >
                        {greenContent ? (
                            isAnnualProjectionData ? (
                                <>
                                    <Typography fontWeight="700" fontSize={subHeadingFontSize} color='success.main' sx={{ mb: 1 }}>
                                        {rating.label}
                                    </Typography>
                                    <Typography fontWeight="600" fontSize={headingFontSize} color='success.main'>
                                        {rating.value}
                                    </Typography>
                                    <Typography fontWeight="600" fontSize={headingFontSize} color='success.main'>
                                        {rating.change}
                                    </Typography>
                                </>
                            ) : (
                                <Typography fontWeight="600" fontSize={headingFontSize} color='success.main'>
                                    {rating.label} {rating.value} {rating.change}
                                </Typography>
                            )
                        ) : (
                            <>
                                <Typography fontSize={headingFontSize} color='primary.main'>
                                    {rating.label}
                                </Typography>
                                <Typography fontSize={subHeadingFontSize}>
                                    {rating.value}
                                </Typography>
                                {statsPercentage && (
                                    <Box display="flex" alignItems="center">
                                        {!rating.danger ? (
                                            <Image src={spikeIcon} alt="spike Icon" width={12} height={12} />
                                        ) : (
                                            <Image src={spikeErrorIcon} alt="spike Icon" width={12} height={12} />
                                        )}
                                        <Typography
                                            variant="caption"
                                            fontSize={10}
                                            color={rating.danger ? 'error.main' : 'success.main'}
                                        >
                                            {rating.change}
                                        </Typography>
                                    </Box>
                                )}
                            </>
                        )}
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default SatisfactoryCard
