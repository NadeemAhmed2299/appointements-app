"use client"

import TextBox from "@/app/lib/TextBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardActions, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import SelectBox from "@/app/lib/SelectBox";
import { newEventSchema } from "./newEvent";
import { oncologySpecialties } from "../formListValues";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import CheckBox from "@/app/lib/CheckBox";
import TextAreaBox from "@/app/lib/TextAreaBox";

export const NewEventForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof newEventSchema>>({
        resolver: zodResolver(newEventSchema),
        defaultValues: {
            eventDetails: {
                EventType: ""
            }
        }
    });

    const onSubmit = (data: z.infer<typeof newEventSchema>) => {
        alert("Form Data: " + JSON.stringify(data, null, 2));
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Card variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Personal Details</Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <TextBox
                            label="Event Title"
                            fullWidth
                            required
                            {...register("eventDetails.EventTitle")}
                            error={!!errors.eventDetails?.EventTitle}
                            helperText={errors.eventDetails?.EventTitle?.message}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Controller
                            name="eventDetails.EventType"
                            control={control}
                            rules={{ required: "Type is required" }}
                            render={({ field, fieldState }) => (
                                <SelectBox
                                    label="Type"
                                    required
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    error={!!errors.eventDetails?.EventTitle}
                                    helperText={errors.eventDetails?.EventTitle?.message}
                                    options={oncologySpecialties.map((d) => ({ label: d, value: d }))}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <TextBox
                            label="Organizer/Technician"
                            fullWidth
                            required
                            {...register("eventDetails.Organizer")}
                            error={!!errors.eventDetails?.Organizer}
                            helperText={errors.eventDetails?.Organizer?.message}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <TextBox
                            label="Number of Attendees*"
                            fullWidth
                            required
                            {...register("eventDetails.NumberOfAttendees")}
                            error={!!errors.eventDetails?.NumberOfAttendees}
                            helperText={errors.eventDetails?.NumberOfAttendees?.message}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Controller
                            name="eventDetails.StartDateAndTime"
                            control={control}
                            defaultValue={dayjs().toDate()}
                            render={({ field }) => (
                                <DateTimePicker
                                    label="Opening Time (Operating)"
                                    value={dayjs(field.value)}
                                    onChange={field.onChange}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                        },
                                    }}
                                    sx={{ mt: 3 }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Controller
                            name="eventDetails.EndDateAndTime"
                            control={control}
                            defaultValue={dayjs().toDate()}
                            render={({ field }) => (
                                <DateTimePicker
                                    label="Closing Time (Operating)"
                                    value={dayjs(field.value)}
                                    onChange={field.onChange}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                        },
                                    }}
                                    sx={{ mt: 3 }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Controller
                            name="eventDetails.IsrecurringEvent"
                            control={control}
                            render={({ field }) => (
                                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                    <CheckBox
                                        checked={!!field.value}
                                        onChange={e => field.onChange(e.target.checked)}
                                    />
                                    <label htmlFor="isRecurring">Recurring Event</label>
                                </div>
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextAreaBox
                            label="Note"
                            fullWidth
                            required
                            {...register("eventDetails.notes")}
                            error={!!errors.eventDetails?.notes}
                            helperText={errors.eventDetails?.notes?.message}
                        />
                    </Grid>


                </Grid>

                <CardActions sx={{ justifyContent: "flex-end", pt: 3 }}>
                    <Button type="reset" variant="outlined">Cancel</Button>
                    <Button type="submit" variant="contained">Add Resource</Button>
                </CardActions>
            </Card>
        </LocalizationProvider>
    );
};