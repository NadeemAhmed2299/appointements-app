"use client"

import TextBox from "@/app/lib/TextBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardActions, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SystemAdminObjectSchema } from "./system-admin";

export const SystemAdminForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof SystemAdminObjectSchema>>({
        resolver: zodResolver(SystemAdminObjectSchema)
    });

    const onSubmit = (data: z.infer<typeof SystemAdminObjectSchema>) => {
        alert("Form Data:" + JSON.stringify(data));
    };

    return (
        <Card variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Personal Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="First Name"
                        fullWidth
                        required
                        {...register("personalDetails.firstName")}
                        error={!!errors.personalDetails?.firstName}
                        helperText={errors.personalDetails?.firstName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Middle Name"
                        fullWidth
                        required
                        {...register("personalDetails.middleName")}
                        error={!!errors.personalDetails?.middleName}
                        helperText={errors.personalDetails?.middleName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Last Name"
                        fullWidth
                        required
                        {...register("personalDetails.lastName")}
                        error={!!errors.personalDetails?.lastName}
                        helperText={errors.personalDetails?.lastName?.message}
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
                        label="State"
                        fullWidth
                        required
                        {...register("addressDetails.state")}
                        error={!!errors.addressDetails?.state}
                        helperText={errors.addressDetails?.state?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Contact Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Phone Number"
                        fullWidth
                        required
                        {...register("contactDetails.phoneNumber")}
                        error={!!errors.contactDetails?.phoneNumber}
                        helperText={errors.contactDetails?.phoneNumber?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Primary Email"
                        fullWidth
                        required
                        {...register("contactDetails.email")}
                        error={!!errors.contactDetails?.email}
                        helperText={errors.contactDetails?.email?.message}
                    />
                </Grid>
            </Grid>
            <CardActions sx={{ justifyContent: "flex-end", pt: 3 }}>
                <Button type="reset" variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Create System Admin</Button>
            </CardActions>
        </Card>
    );
};