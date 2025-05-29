import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface BasicDetailsSchema {
    Name: string;
    Category: string;
    Type: string;
    location: string;
}

interface RoomSpecificationSchema {
    roomCapacity: string;
    squareFootage: string;
    specialFeatures: string;
}

interface UsageConfigurationSchema {
    operatingHours: string;
    offHours: string;
    daysOfOperation: string;
}

interface BufferMaintenanceRequirementsSchema {
    bufferTime: string;
    cleaningRequired: boolean;
    averageTime: string;
    cleaningProtocols: string;
}

const BasicDetailsSchema = z.object({
    Name: z.string().min(1, "Name is required"),
    Category: z.string().min(1, "Category is required"),
    Type: z.string().min(1, "Type is required"),
    location: z.string().min(1, "Location is required")
});

const RoomSpecificationSchema = z.object({
    roomCapacity: z.string().min(1, "Room capacity is required"),
    squareFootage: z.string().min(1, "Square footage is required"),
    specialFeatures: z.string().optional()
});

const UsageConfigurationSchema = z.object({
    operatingHours: z.string().min(1, "Operating hours are required"),
    offHours: z.string().min(1, "Off hours are required"),
    daysOfOperation: z.string().min(1, "Days of operation are required")
});

const BufferMaintenanceRequirementsSchema = z.object({
    bufferTime: z.string().min(1, "Buffer time is required"),
    cleaningRequired: z.string().min(1, "Cleaning required information is required"),
    averageTime: z.string().min(1, "Average time is required"),
    cleaningProtocols: z.string().min(1, "Cleaning protocols are required")
});

export const resourceRoomSchema = z.object({
    basicDetails: BasicDetailsSchema,
    roomSpecification: RoomSpecificationSchema,
    usageConfiguration: UsageConfigurationSchema,
    bufferMaintenanceRequirements: BufferMaintenanceRequirementsSchema
});

interface resourceRoomObject {
    basicDetails: {
        Name: string;
        Category: string;
        Type: string;
        location: string;
    };
    roomSpecification: {
        roomCapacity: string;
        squareFootage: string;
        specialFeatures?: string;
    };
    usageConfiguration: {
        operatingHours: string;
        offHours: string;
        daysOfOperation: string;
    };
    bufferMaintenanceRequirements: {
        bufferTime: string;
        cleaningRequired: string;
        averageTime: string;
        cleaningProtocols: string;
    };
}
export const resourceRoomObject: resourceRoomObject = {
    basicDetails: {
        Name: "",
        Category: "",
        Type: "",
        location: ""
    },
    roomSpecification: {
        roomCapacity: "",
        squareFootage: "",
        specialFeatures: ""
    },
    usageConfiguration: {
        operatingHours: "",
        offHours: "",
        daysOfOperation: ""
    },
    bufferMaintenanceRequirements: {
        bufferTime: "",
        cleaningRequired: "",
        averageTime: "",
        cleaningProtocols: ""
    }
}