import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface facilityDetails {
  facilityCode: number;
  facilityName: string;
  facilityType: string;
  parentEntity: string;
}

interface AddressDetails {
  address1: string;
  address2: string;
  city: string;
  zip: string;
  state: string;
}

interface ContactDetails {
  primaryContactName: string;
  primaryContactNumber: string;
  secondaryContactNumber: string;
  primaryEmail: string;
  faxNumber: string;
  website: string;
  description: string;
}
interface OperationalDay {
  day: string;
  openingTime: string;
  isOpeningAM: boolean;
  closingTime: string;
  isClosingAM: boolean;
}

interface HolidayDay {
  holiday: string;
  openingTime: string;
  isOpeningAM: boolean;
  closingTime: string;
  isClosingAM: boolean;
}

const facilityDetailsSchema = z.object({
  facilityCode: z.number().min(1, "First name is required"),
  facilityName: z.string().min(1, "Facility name is required"),
  facilityType: z.string().min(1, "Facility type is required"),
  parentEntity: z.string().min(1, "Parent entity is required"),
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
  faxNumber: z.string().optional(),
  website: z.string().optional(),
  description: z.string().optional()
});

const OperationalDaySchema = z.object({
  day: z.string().min(1, "Day is required"),
  openingTime: z.string().min(1, "Opening time is required"),
  isOpeningAM: z.boolean(),
  closingTime: z.string().min(1, "Closing time is required"),
  isClosingAM: z.boolean(),
});

const HolidayDaySchema = z.object({
  holiday: z.string().min(1, "Holiday name is required"),
  openingTime: z.string().min(1, "Opening time is required"),
  isOpeningAM: z.boolean(),
  closingTime: z.string().min(1, "Closing time is required"),
  isClosingAM: z.boolean(),
});


export const FacilityObjectSchema = z.object({
  facilityDetails: facilityDetailsSchema,
  addressDetails: AddressDetailsSchema,
  contactDetails: ContactDetailsSchema,
  operationalDays: z.array(OperationalDaySchema),
  holidayDays: z.array(HolidayDaySchema),
});

interface facilityObject {
  facilityDetails: facilityDetails;
  addressDetails: AddressDetails;
  contactDetails: ContactDetails;
  operationalDays: OperationalDay[];
  holidayDays: HolidayDay[];
}

const facilityObject: facilityObject = {
  facilityDetails: {
    facilityCode: 0,
    facilityName: "",
    facilityType: "",
    parentEntity: "",
  },
  addressDetails: {
    address1: "",
    address2: "",
    city: "",
    zip: "",
    state: "",
  },
  contactDetails: {
    primaryContactName: '',
    primaryContactNumber: '',
    secondaryContactNumber: '',
    primaryEmail: '',
    faxNumber: '',
    website: '',
    description: ''
  },
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
};
