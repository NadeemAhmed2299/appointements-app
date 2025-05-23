import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface PersonalDetails {
    firstName: string;
    middleName: string;
    lastName: string;
}

interface AddressDetails {
    address1: string;
    address2: string;
    city: string;
    zip: string;
    state: string;
}

interface ContactDetails {
  phoneNumber: string;
  email: string;
}

const PersonalDetailsSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
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
});

const ContactDetailsSchema = z.object({
    phoneNumber: z.string()
        .min(1, "Phone number is required")
        .refine(val => isValidUSAPhoneNumber(val), {
            message: "Invalid phone number"
        }),
    email: z.string().email("Invalid email address"),
});


export const SystemAdminObjectSchema = z.object({
    personalDetails: PersonalDetailsSchema,
    addressDetails: AddressDetailsSchema,
    contactDetails: ContactDetailsSchema,
});

interface systemAdminObject {
    personalDetails: PersonalDetails;
    addressDetails: AddressDetails;
    contactDetails: ContactDetails;
}

const systemAdminObject: systemAdminObject = {
    personalDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
    },
    addressDetails: {
        address1: "",
        address2: "",
        city: "",
        zip: "",
        state: "",
    },
    contactDetails: {
        phoneNumber: "",
        email: "",
    },
}