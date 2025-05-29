"use client"

import TextBox from "@/app/lib/TextBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardActions, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Select, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import SelectBox from "@/app/lib/SelectBox";
import { resourceEquipmentSchema } from "./resource-equipments";
import { oncologySpecialties } from "../clinical-personnel/formListValues";

export const ResourceEquipmentForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof resourceEquipmentSchema>>({
        resolver: zodResolver(resourceEquipmentSchema),
    });

    const [alternativeEquipment, setAlternativeEquipment] = useState(false);

    const handleAlternativeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlternativeEquipment(event.target.checked);
    };



    const onSubmit = (data: z.infer<typeof resourceEquipmentSchema>) => {
        alert("Form Data: " + JSON.stringify(data, null, 2));
    };

    function handleAlternativeCbChange(value: boolean) {
        setAlternativeEquipment(value);
    }

    return (
        <Card variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Personal Details</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Name"
                        fullWidth
                        required
                        {...register("identification.EquipmentName")}
                        error={!!errors.identification?.EquipmentName}
                        helperText={errors.identification?.EquipmentName?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="identification.EquipmentType"
                        control={control}
                        rules={{ required: "Type is required" }}
                        render={({ field, fieldState }) => (
                            <SelectBox
                                label="Type"
                                required
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={!!errors.identification?.EquipmentType}
                                helperText={errors.identification?.EquipmentType?.message}
                                options={oncologySpecialties.map((d) => ({ label: d, value: d }))}
                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Model"
                        fullWidth
                        required
                        {...register("identification.Model")}
                        error={!!errors.identification?.Model}
                        helperText={errors.identification?.Model?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Serial Number"
                        fullWidth
                        required
                        {...register("identification.SerialNumber")}
                        error={!!errors.identification?.SerialNumber}
                        helperText={errors.identification?.SerialNumber?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Category"
                        fullWidth
                        required
                        {...register("identification.Category")}
                        error={!!errors.identification?.Category}
                        helperText={errors.identification?.Category?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Primary Location"
                        fullWidth
                        required
                        {...register("identification.PrimaryLocation")}
                        error={!!errors.identification?.PrimaryLocation}
                        helperText={errors.identification?.PrimaryLocation?.message}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Department"
                        fullWidth
                        required
                        {...register("identification.Department")}
                        error={!!errors.identification?.Department}
                        helperText={errors.identification?.Department?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Scheduling Parameters</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Max Daily Usage Count"
                        fullWidth
                        required
                        {...register("schedulingParameters.MaxDailyUsageCount")}
                        error={!!errors.schedulingParameters?.MaxDailyUsageCount}
                        helperText={errors.schedulingParameters?.MaxDailyUsageCount?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Buffer Time"
                        fullWidth
                        required
                        {...register("schedulingParameters.BufferTime")}
                        error={!!errors.schedulingParameters?.BufferTime}
                        helperText={errors.schedulingParameters?.BufferTime?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Max Concurrent Usage"
                        fullWidth
                        required
                        {...register("schedulingParameters.MaxConcurrentUssage")}
                        error={!!errors.schedulingParameters?.MaxConcurrentUssage}
                        helperText={errors.schedulingParameters?.MaxConcurrentUssage?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="schedulingParameters.HasAlternative"
                        control={control}
                        render={({ field }) => (
                            <FormGroup>
                                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                    Has Alternative?
                                </Typography>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={field.value === true}
                                            onChange={() => field.onChange(true)}
                                            checkedIcon={<span style={{ borderRadius: '50%', border: '2px solid #1976d2', background: '#1976d2', width: 18, height: 18, display: 'block' }} />}
                                            icon={<span style={{ borderRadius: '50%', border: '2px solid #1976d2', width: 18, height: 18, display: 'block' }} />}
                                        />
                                    }
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={field.value === false}
                                            onChange={() => field.onChange(false)}
                                            checkedIcon={<span style={{ borderRadius: '50%', border: '2px solid #1976d2', background: '#1976d2', width: 18, height: 18, display: 'block' }} />}
                                            icon={<span style={{ borderRadius: '50%', border: '2px solid #1976d2', width: 18, height: 18, display: 'block' }} />}
                                        />
                                    }
                                    label="No"
                                />
                            </FormGroup>
                        )}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <Controller
                        name="schedulingParameters.ResourceType"
                        control={control}
                        rules={{ required: "Resource type is required" }}
                        render={({ field, fieldState }) => (
                            <SelectBox
                                label="Resource Type"
                                required
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={!!errors.schedulingParameters?.ResourceType}
                                helperText={errors.schedulingParameters?.ResourceType?.message}
                                options={oncologySpecialties.map((d) => ({ label: d, value: d }))}
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Staffing Requirements</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Required Personnel"
                        fullWidth
                        required
                        {...register("staffingRequirements.RequiredPersonnel")}
                        error={!!errors.staffingRequirements?.RequiredPersonnel}
                        helperText={errors.staffingRequirements?.RequiredPersonnel?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Minimum Staff Count"
                        fullWidth
                        type="number"
                        required
                        {...register("staffingRequirements.MinimumStaffCount", { valueAsNumber: true })}
                        error={!!errors.staffingRequirements?.MinimumStaffCount}
                        helperText={errors.staffingRequirements?.MinimumStaffCount?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Average Setup Time"
                        fullWidth
                        required
                        {...register("staffingRequirements.AverageSetupTime")}
                        error={!!errors.staffingRequirements?.AverageSetupTime}
                        helperText={errors.staffingRequirements?.AverageSetupTime?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Treatment Protocol</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Protocol Type"
                        fullWidth
                        required
                        {...register("treatmentProtocol.ProtocolType")}
                        error={!!errors.treatmentProtocol?.ProtocolType}
                        helperText={errors.treatmentProtocol?.ProtocolType?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Clinical Pathway"
                        fullWidth
                        required
                        {...register("treatmentProtocol.ClinicalPathway")}
                        error={!!errors.treatmentProtocol?.ClinicalPathway}
                        helperText={errors.treatmentProtocol?.ClinicalPathway?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="System Integration"
                        fullWidth
                        required
                        {...register("treatmentProtocol.SystemIntegration")}
                        error={!!errors.treatmentProtocol?.SystemIntegration}
                        helperText={errors.treatmentProtocol?.SystemIntegration?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Patient Monitoring Requirements"
                        fullWidth
                        required
                        {...register("treatmentProtocol.PatientMonitoringRequirements")}
                        error={!!errors.treatmentProtocol?.PatientMonitoringRequirements}
                        helperText={errors.treatmentProtocol?.PatientMonitoringRequirements?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Documentation Requirements"
                        fullWidth
                        required
                        {...register("treatmentProtocol.DocumentationRequirements")}
                        error={!!errors.treatmentProtocol?.DocumentationRequirements}
                        helperText={errors.treatmentProtocol?.DocumentationRequirements?.message}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Resource Utilization</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Daily Usage"
                        fullWidth
                        required
                        {...register("resourceUtilization.DailyUsage")}
                        error={!!errors.resourceUtilization?.DailyUsage}
                        helperText={errors.resourceUtilization?.DailyUsage?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Patients Per Day"
                        fullWidth
                        type="number"
                        required
                        {...register("resourceUtilization.PatientsPerDay", { valueAsNumber: true })}
                        error={!!errors.resourceUtilization?.PatientsPerDay}
                        helperText={errors.resourceUtilization?.PatientsPerDay?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Monthly Maintenance"
                        fullWidth
                        required
                        {...register("resourceUtilization.MonthlyMaintenance")}
                        error={!!errors.resourceUtilization?.MonthlyMaintenance}
                        helperText={errors.resourceUtilization?.MonthlyMaintenance?.message}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Annual Certification"
                        fullWidth
                        required
                        {...register("resourceUtilization.AnnualCertification")}
                        error={!!errors.resourceUtilization?.AnnualCertification}
                        helperText={errors.resourceUtilization?.AnnualCertification?.message}
                    />
                </Grid>

            </Grid>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Quality Metrics</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Accuracy"
                        fullWidth
                        required
                        {...register("qualityMetrics.Accuracy")}
                        error={!!errors.qualityMetrics?.Accuracy}
                        helperText={errors.qualityMetrics?.Accuracy?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Downtime"
                        fullWidth
                        required
                        {...register("qualityMetrics.DownTime")}
                        error={!!errors.qualityMetrics?.DownTime}
                        helperText={errors.qualityMetrics?.DownTime?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Error Rate"
                        fullWidth
                        required
                        {...register("qualityMetrics.ErrorRate")}
                        error={!!errors.qualityMetrics?.ErrorRate}
                        helperText={errors.qualityMetrics?.ErrorRate?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextBox
                        label="Patient Satisfaction"
                        fullWidth
                        required
                        {...register("qualityMetrics.PatientSatisfaction")}
                        error={!!errors.qualityMetrics?.PatientSatisfaction}
                        helperText={errors.qualityMetrics?.PatientSatisfaction?.message}
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