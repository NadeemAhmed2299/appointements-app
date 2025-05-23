"use client"

import TextBox from "@/app/lib/TextBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardActions, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OrganizationObjectSchema } from "./organization";

export const OrganizationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof OrganizationObjectSchema>>({
        resolver: zodResolver(OrganizationObjectSchema)
    });

    const onSubmit = (data: z.infer<typeof OrganizationObjectSchema>) => {
        alert("Form Data:" + JSON.stringify(data));
    };

    return (
        <Card variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Organization Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Organization Name"
                        fullWidth
                        required
                        {...register("organizationDetails.organizationName")}
                        error={!!errors.organizationDetails?.organizationName}
                        helperText={errors.organizationDetails?.organizationName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Organization Type"
                        fullWidth
                        required
                        {...register("organizationDetails.organizationType")}
                        error={!!errors.organizationDetails?.organizationType}
                        helperText={errors.organizationDetails?.organizationType?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Address Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Address Line 1"
                        fullWidth
                        required
                        {...register("addressDetails.address1")}
                        error={!!errors.addressDetails?.address1}
                        helperText={errors.addressDetails?.address1?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Address Line 2"
                        fullWidth
                        {...register("addressDetails.address2")}
                        error={!!errors.addressDetails?.address2}
                        helperText={errors.addressDetails?.address2?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="City"
                        fullWidth
                        required
                        {...register("addressDetails.city")}
                        error={!!errors.addressDetails?.city}
                        helperText={errors.addressDetails?.city?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="State"
                        fullWidth
                        required
                        {...register("addressDetails.state")}
                        error={!!errors.addressDetails?.state}
                        helperText={errors.addressDetails?.state?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="ZIP"
                        fullWidth
                        required
                        {...register("addressDetails.zip")}
                        error={!!errors.addressDetails?.zip}
                        helperText={errors.addressDetails?.zip?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Country"
                        fullWidth
                        required
                        {...register("addressDetails.country")}
                        error={!!errors.addressDetails?.country}
                        helperText={errors.addressDetails?.country?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Contact Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Primary Contact Name"
                        fullWidth
                        required
                        {...register("contactDetails.primaryContactName")}
                        error={!!errors.contactDetails?.primaryContactName}
                        helperText={errors.contactDetails?.primaryContactName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Primary Contact Number"
                        fullWidth
                        required
                        {...register("contactDetails.primaryContactNumber")}
                        error={!!errors.contactDetails?.primaryContactNumber}
                        helperText={errors.contactDetails?.primaryContactNumber?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Secondary Contact Number"
                        fullWidth
                        {...register("contactDetails.secondaryContactNumber")}
                        error={!!errors.contactDetails?.secondaryContactNumber}
                        helperText={errors.contactDetails?.secondaryContactNumber?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextBox
                        label="Primary Email"
                        fullWidth
                        required
                        {...register("contactDetails.primaryEmail")}
                        error={!!errors.contactDetails?.primaryEmail}
                        helperText={errors.contactDetails?.primaryEmail?.message}
                    />
                </Grid>
            </Grid>
            <CardActions sx={{ justifyContent: "flex-end", pt: 3 }}>
                <Button type="reset" variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Create Organization</Button>
            </CardActions>
        </Card>
    );
};