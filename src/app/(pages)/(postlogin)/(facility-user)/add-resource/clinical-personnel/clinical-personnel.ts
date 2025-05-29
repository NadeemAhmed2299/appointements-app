import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface ResourceDetails {
    resourceFirstName: string;
    resourceLastName: string;
    resourceCategory: string;
    resourceType: string;
    department: string;
    emailId: string;
    phoneNumber: string;
    licenseNumber: string;
    certificationAndSpecialization: string;
}

interface AddressDetails {
    address1: string;
    address2: string;
    city: string;
    zip: string;
    state: string;
    country: string;
}

const ResourceDetailsSchema = z.object({
    resourceFirstName: z.string().min(1, "First name is required"),
    resourceLastName: z.string().min(1, "Last name is required"),
    resourceCategory: z.string().min(1, "Resource category is required"),
    resourceType: z.string().min(1, "Resource type is required"),
    department: z.string().min(1, "Department is required"),
    emailId: z.string().email("Invalid email address"),
    phoneNumber: z.string()
        .min(1, "Phone number is required")
        .refine(val => isValidUSAPhoneNumber(val), {
            message: "Invalid phone number"
        }),
    licenseNumber: z.string().min(1, "License number is required"),
    certificationAndSpecialization: z.string().optional(),    
});

const AddressDetailsSchema = z.object({
    address1: z.string().min(1, "Address1 is required"),
    address2: z.string().optional(),
    city: z.string()
        .min(1, "City is required")
        .refine(val => isValidUsaCity(val), {
            message: "Invalid USA city name"
        }),
    zip: z.string()
        .min(1, "ZIP is required")
        .regex(/^\d{5}(-\d{4})?$/, "Invalid US ZIP code"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
});


export const clinicalPersonnelSchema = z.object({
    resourceDetails: ResourceDetailsSchema,
    addressDetails: AddressDetailsSchema
});

interface clinicalPersonnelObject {
    resourceDetails: ResourceDetails;
    addressDetails: AddressDetails;
}

const clinicalPersonnelObject: clinicalPersonnelObject = {
    resourceDetails: {
        resourceFirstName: "",
        resourceLastName: "",
        resourceCategory: "",
        resourceType: "",
        department: "",
        emailId: "",
        phoneNumber: "",
        licenseNumber: "",
        certificationAndSpecialization: ""
    },
    addressDetails: {
        address1: "",
        address2: "",
        city: "",
        zip: "",
        state: "",
        country: "United States"
    }
}