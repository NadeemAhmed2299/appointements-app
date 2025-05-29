"use client"

import TextBox from "@/app/lib/TextBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardActions, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { clinicalPersonnelSchema } from "./clinical-personnel";
import { useState } from "react";
import SelectBox from "@/app/lib/SelectBox";
import { oncologySpecialties, countries } from "./formListValues";
import TextAreaBox from "@/app/lib/TextAreaBox";

export const ClinicalPrsonnelForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof clinicalPersonnelSchema>>({
        resolver: zodResolver(clinicalPersonnelSchema),
        defaultValues: {
            resourceDetails: {
                resourceType: ""
            }
        }
    });

    const onSubmit = (data: z.infer<typeof clinicalPersonnelSchema>) => {
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
                        {...register("resourceDetails.resourceFirstName")}
                        error={!!errors.resourceDetails?.resourceFirstName}
                        helperText={errors.resourceDetails?.resourceFirstName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Last Name"
                        fullWidth
                        required
                        {...register("resourceDetails.resourceLastName")}
                        error={!!errors.resourceDetails?.resourceLastName}
                        helperText={errors.resourceDetails?.resourceLastName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Resource Category"
                        fullWidth
                        required
                        {...register("resourceDetails.resourceCategory")}
                        error={!!errors.resourceDetails?.resourceCategory}
                        helperText={errors.resourceDetails?.resourceCategory?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="resourceDetails.resourceType"
                        control={control}
                        rules={{ required: "Resource Type is required" }}
                        render={({ field, fieldState }) => (
                            <SelectBox
                                label="Resource Type"
                                required
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={!!errors.resourceDetails?.resourceType}
                                helperText={errors.resourceDetails?.resourceType?.message}
                                options={oncologySpecialties.map((d) => ({ label: d, value: d }))}
                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Department"
                        fullWidth
                        required
                        {...register("resourceDetails.department")}
                        error={!!errors.resourceDetails?.department}
                        helperText={errors.resourceDetails?.department?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Email"
                        fullWidth
                        required
                        {...register("resourceDetails.emailId")}
                        error={!!errors.resourceDetails?.emailId}
                        helperText={errors.resourceDetails?.emailId?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Phone Number"
                        fullWidth
                        required
                        {...register("resourceDetails.phoneNumber")}
                        error={!!errors.resourceDetails?.phoneNumber}
                        helperText={errors.resourceDetails?.phoneNumber?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="License Number"
                        fullWidth
                        required
                        {...register("resourceDetails.licenseNumber")}
                        error={!!errors.resourceDetails?.licenseNumber}
                        helperText={errors.resourceDetails?.licenseNumber?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12}}>
                <TextAreaBox
                    label="Certifications and Specializations"
                    fullWidth
                    multiline

                    {...register("resourceDetails.certificationAndSpecialization")}
                />                
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Address Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Address Line 1"
                        fullWidth
                        required
                        {...register("addressDetails.address1")}
                        error={!!errors.addressDetails?.address1}
                        helperText={errors.addressDetails?.address1?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
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
                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="addressDetails.country"
                        control={control}
                        rules={{ required: "Country is required" }}
                        render={({ field, fieldState }) => (
                            <SelectBox
                                label="Country"
                                required
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                options={countries.map((d) => ({ label: d, value: d }))}
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <CardActions sx={{ justifyContent: "flex-end", pt: 3 }}>
                <Button type="reset" variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Add Resource</Button>
            </CardActions>
        </Card>
    );
};