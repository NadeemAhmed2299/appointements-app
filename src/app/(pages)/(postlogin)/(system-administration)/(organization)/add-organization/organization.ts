import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface OrganizationDetails {
    organizationName: string;
    organizationType: string;
}

interface AddressDetails {
    address1: string;
    address2: string;
    city: string;
    zip: string;
    state: string;
    country: string;
}

interface ContactDetails {
    primaryContactName: string;
    primaryContactNumber: string;
    secondaryContactNumber: string;
    primaryEmail: string;
}

const OrganizationDetailsSchema = z.object({
    organizationName: z.string().min(1, "Organization name is required"),
    organizationType: z.string().min(1, "Organization type is required"),
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

const ContactDetailsSchema = z.object({
    primaryContactName: z.string().min(1, "Primary contact name is required"),
    primaryContactNumber: z.string()
        .min(1, "Primary contact number is required")
        .refine(val => isValidUSAPhoneNumber(val), {
            message: "Invalid phone number"
        }),
    secondaryContactNumber: z.string()
        .optional()
        .refine(val => !val || isValidUSAPhoneNumber(val), {
            message: "Invalid phone number"
        }),
    primaryEmail: z.string().email("Invalid email address"),
});

export const OrganizationObjectSchema = z.object({
    organizationDetails: OrganizationDetailsSchema,
    addressDetails: AddressDetailsSchema,
    contactDetails: ContactDetailsSchema,
});

interface OrganizationObject {
    organizationDetails: OrganizationDetails;
    addressDetails: AddressDetails;
    contactDetails: ContactDetails;
}

const organizationObject: OrganizationObject = {
    organizationDetails: {
        organizationName: '',
        organizationType: ''
    },
    addressDetails: {
        address1: '',
        address2: '',
        city: '',
        zip: '',
        state: '',
        country: ''
    },
    contactDetails: {
        primaryContactName: '',
        primaryContactNumber: '',
        secondaryContactNumber: '',
        primaryEmail: ''
    }
}