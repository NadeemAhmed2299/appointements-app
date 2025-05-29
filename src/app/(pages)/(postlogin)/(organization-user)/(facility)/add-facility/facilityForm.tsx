"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button, Card, CardActions, Grid, Typography, MenuItem, TextField,
} from "@mui/material";
import { FacilityObjectSchema } from "./facility";
import { z } from "zod";
import OperationalDetails from "./operationalDetails";
import HolidayHours from "./holidayHours";
import TextFieldWrapper from "@/app/lib/TextField";

export const FacilityForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FacilityObjectSchema>>({
    resolver: zodResolver(FacilityObjectSchema),
    defaultValues: {
      operationalDays: [
        {
          day: "",
          openingTime: "",
          isOpeningAM: true,
          closingTime: "",
          isClosingAM: true,
        },
      ],
      holidayDays: [
        {
          holiday: "",
          openingTime: "",
          isOpeningAM: true,
          closingTime: "",
          isClosingAM: true,
        },
      ],
    },
  });

  const { fields: operationalFields, append: addOperationalDay } = useFieldArray({
    control,
    name: "operationalDays",
  });

  const { fields: holidayFields, append: addHolidayDay } = useFieldArray({
    control,
    name: "holidayDays",
  });

  const onSubmit = (data: z.infer<typeof FacilityObjectSchema>) => {
    alert("Form Data:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <Card variant="outlined" sx={{ p: 4 }} component="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Facility Details */}
      <Typography variant="h5" sx={{ mb: 2 }}>Facility Details</Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Facility Code" fullWidth {...register("facilityDetails.facilityCode")} error={!!errors.facilityDetails?.facilityCode} helperText={errors.facilityDetails?.facilityCode?.message} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Facility Name" fullWidth {...register("facilityDetails.facilityName")} error={!!errors.facilityDetails?.facilityName} helperText={errors.facilityDetails?.facilityName?.message} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Facility Type" fullWidth select {...register("facilityDetails.facilityType")} error={!!errors.facilityDetails?.facilityType} helperText={errors.facilityDetails?.facilityType?.message}>
            <MenuItem value="Park Avenue">Park Avenue</MenuItem>
          </TextBox>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Parent Entity" fullWidth select {...register("facilityDetails.parentEntity")} error={!!errors.facilityDetails?.parentEntity} helperText={errors.facilityDetails?.parentEntity?.message}>
            <MenuItem value="Park Avenue">Park Avenue</MenuItem>
          </TextBox>
        </Grid>
      </Grid>

      {/* Address Details */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Address Details</Typography>
      <Grid container spacing={2}>
        <Grid  size={{ xs: 12, sm: 6 }}>
          <TextBox label="Address 1" fullWidth {...register("addressDetails.address1")} error={!!errors.addressDetails} helperText={errors.addressDetails?.address1?.message} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextBox label="Address 2" fullWidth {...register("addressDetails.address2")} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="City" fullWidth {...register("addressDetails.city")} error={!!errors.addressDetails?.city} helperText={errors.addressDetails?.city?.message} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="ZIP" fullWidth {...register("addressDetails.zip")} error={!!errors.addressDetails?.zip} helperText={errors.addressDetails?.zip?.message} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="State" fullWidth {...register("addressDetails.state")} error={!!errors.addressDetails?.state} helperText={errors.addressDetails?.state?.message} />
        </Grid>
      </Grid>

      {/* Contact Details */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Contact Details</Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Primary Contact Name" fullWidth {...register("contactDetails.primaryContactName")} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Primary Contact Number" fullWidth {...register("contactDetails.primaryContactNumber")} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Secondary Contact Number" fullWidth {...register("contactDetails.secondaryContactNumber")} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Primary Email" fullWidth {...register("contactDetails.primaryEmail")} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Fax Number" fullWidth {...register("contactDetails.faxNumber")} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextBox label="Website URL" fullWidth {...register("contactDetails.website")} />
        </Grid>
        <Grid size={{ xs: 12}}>
          <TextBox label="Brief Description" fullWidth multiline rows={3} {...register("contactDetails.description")} />
        </Grid>
      </Grid>

      {/* Operational Hours */}
      <OperationalDetails />

      {/* Holiday Hours */}
      <HolidayHours />

      {/* Actions */}
      <CardActions sx={{ justifyContent: "flex-end", pt: 3 }}>
        <Button type="reset" variant="outlined">Cancel</Button>
        <Button type="submit" variant="contained">Create Facility</Button>
      </CardActions>
    </Card>
  );
};
