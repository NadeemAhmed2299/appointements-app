"use client"

import TextBox from "@/app/lib/TextBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardActions, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Select, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { resourceRoomSchema } from "./resource-rooms";
import { useEffect, useState } from "react";
import SelectBox from "@/app/lib/SelectBox";
import { oncologySpecialties, days, requirements } from "./formListValues";
import EquipmentTable from "./EquipmentTable";
import TextAreaBox from "@/app/lib/TextAreaBox";

export const ResourceRoomsForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof resourceRoomSchema>>({
        resolver: zodResolver(resourceRoomSchema),
        defaultValues: {
            basicDetails: {
                Type: ""
            },
            bufferMaintenanceRequirements: {
                cleaningRequired: ""
            }
        }
    });

    const [openingTimeOperating, setOpeningTimeOperating] = useState("");
    const [closingTimeOperating, setClosingTimeOperating] = useState("");

    const [openingTimeOff, setOpeningTimeOff] = useState("");
    const [closingTimeOff, setClosingTimeOff] = useState("");

    const [selectedDays, setSelectedDays] = useState(['Monday']);

    const onSubmit = (data: z.infer<typeof resourceRoomSchema>) => {
        const operatingHours = `${openingTimeOperating} - ${closingTimeOperating}`;
        const offHours = `${openingTimeOff} - ${closingTimeOff}`;
        const daysOfOperation = selectedDays.join(', '); // e.g., "Monday, Tuesday"

        const finalData = {
            ...data,
            usageConfiguration: {
                operatingHours,
                offHours,
                daysOfOperation,
            }
        }
        alert("Form Data: " + JSON.stringify(finalData, null, 2));
    };

    const handleDayChange = (day: string) => {
        setSelectedDays((prevDays) =>
            prevDays.includes(day)
                ? prevDays.filter((d) => d !== day)
                : [...prevDays, day]
        );
    };


    return (
        <Card variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Personal Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Name"
                        fullWidth
                        required
                        {...register("basicDetails.Name")}
                        error={!!errors.basicDetails?.Name}
                        helperText={errors.basicDetails?.Name?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Category"
                        fullWidth
                        required
                        {...register("basicDetails.Category")}
                        error={!!errors.basicDetails?.Category}
                        helperText={errors.basicDetails?.Category?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="basicDetails.Type"
                        control={control}
                        rules={{ required: "Type is required" }}
                        render={({ field, fieldState }) => (
                            <SelectBox
                                label="Type"
                                required
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={!!errors.basicDetails?.Type}
                                helperText={errors.basicDetails?.Type?.message}
                                options={oncologySpecialties.map((d) => ({ label: d, value: d }))}
                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Location"
                        fullWidth
                        required
                        {...register("basicDetails.location")}
                        error={!!errors.basicDetails?.location}
                        helperText={errors.basicDetails?.location?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Room Specifications</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Room Capacity"
                        fullWidth
                        required
                        {...register("roomSpecification.roomCapacity")}
                        error={!!errors.roomSpecification?.roomCapacity}
                        helperText={errors.roomSpecification?.roomCapacity?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Square Footage"
                        fullWidth
                        required
                        {...register("roomSpecification.squareFootage")}
                        error={!!errors.roomSpecification?.squareFootage}
                        helperText={errors.roomSpecification?.squareFootage?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Special Features"
                        fullWidth
                        required
                        {...register("roomSpecification.specialFeatures")}
                        error={!!errors.roomSpecification?.specialFeatures}
                        helperText={errors.roomSpecification?.specialFeatures?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Usage Configuration</Typography>
            <Grid size={{ xs: 12 }}>
                <Grid container spacing={2} alignItems="flex-end">
                    {/* Operating Hours Start */}
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextBox
                            type="time"
                            fullWidth
                            required
                            label="Operating Hours"
                            value={openingTimeOperating}
                            onChange={(e) => setOpeningTimeOperating(e.target.value)}
                        />
                    </Grid>
                    <Grid textAlign="center" sx={{ mb: 2 }}>
                        <Typography variant="body1">to</Typography>
                    </Grid>
                    {/* Operating Hours End */}
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextBox
                            type="time"
                            fullWidth
                            value={closingTimeOperating}
                            onChange={(e) => setClosingTimeOperating(e.target.value)}
                        />
                    </Grid>

                    {/* Off Hours Start */}
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <TextBox
                            type="time"
                            fullWidth
                            required
                            label="Off Hours (e.g., Maintenance)"
                            value={openingTimeOff}
                            onChange={(e) => setOpeningTimeOff(e.target.value)}
                            placeholder="HH:MM"
                        />
                    </Grid>
                    <Grid
                        textAlign="center"
                        sx={{
                            mb: { xs: 0, md: 2 },
                        }}
                    >
                        <Typography variant="body1">to</Typography>
                    </Grid>
                    {/* Off Hours End */}
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <TextBox
                            type="time"
                            fullWidth
                            value={closingTimeOff}
                            onChange={(e) => setClosingTimeOff(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* Days of Operation */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Days of Operation<span style={{ color: 'red' }}>*</span></Typography>
                </Grid>

                {days.map((day) => (
                    <Grid size={{ xs: 6, sm: 3, md: 2 }} key={day}>
                        <Paper
                            elevation={0}
                            sx={{
                                border: selectedDays.includes(day) ? '2px solid #9C27B0' : '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '4px 12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '40px',
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedDays.includes(day)}
                                        onChange={() => handleDayChange(day)}
                                        sx={{ padding: '0 8px' }}
                                    />
                                }
                                label={<Typography variant="body2">{day}</Typography>}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Buffer & Maintenance Requirements</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Buffer Time"
                        fullWidth
                        required
                        {...register("bufferMaintenanceRequirements.bufferTime")}
                        error={!!errors.bufferMaintenanceRequirements?.bufferTime}
                        helperText={errors.bufferMaintenanceRequirements?.bufferTime?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="bufferMaintenanceRequirements.cleaningRequired"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label="Cleaning Required"
                                required
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={!!errors.basicDetails?.Type}
                                helperText={errors.basicDetails?.Type?.message}
                                options={requirements.map((d) => ({ label: d, value: d }))}
                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Average Time"
                        fullWidth
                        required
                        {...register("bufferMaintenanceRequirements.averageTime")}
                        error={!!errors.bufferMaintenanceRequirements?.averageTime}
                        helperText={errors.bufferMaintenanceRequirements?.averageTime?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextAreaBox
                        label="Cleaning Protocols"
                        fullWidth
                        required
                        {...register("bufferMaintenanceRequirements.cleaningProtocols")}
                        error={!!errors.bufferMaintenanceRequirements?.cleaningProtocols}
                        helperText={errors.bufferMaintenanceRequirements?.cleaningProtocols?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Equipments</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <EquipmentTable />
                </Grid>
            </Grid>


            <CardActions sx={{ justifyContent: "flex-end", pt: 3 }}>
                <Button type="reset" variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Add Resource</Button>
            </CardActions>
        </Card>
    );
};