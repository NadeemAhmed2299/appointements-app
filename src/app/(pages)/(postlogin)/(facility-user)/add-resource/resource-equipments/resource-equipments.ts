import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface IdentificationSchema {
    EquipmentName: string;
    EquipmentType: string;
    Model: string;
    SerialNumber: string;
    Category: string;
    PrimaryLocation: string;
    Department: string;
}

interface SchedulingParametersSchema {
    MaxDailyUsageCount: string;
    BufferTime: string;
    MaxConcurrentUssage: string;
    HasAlternative: boolean;
    ResourceType: string;

}

interface StaffingRequirementsSchema {
    RequiredPersonnel: string;
    MinimumStaffCount: number;
    AverageSetupTime: string;
}

interface TreatmentProtocolSchema {
    ProtocolType: string;
    ClinicalPathway: boolean;
    SystemIntegration: string;
    PatientMonitoringRequirements: string;
    DocumentationRequirements: string;
}

interface ResourceUtilizationSchema {
    DailyUsage: string;
    PatientsPerDay: number;
    MonthlyMaintenance: string;
    AnnualCertification: string;
}

interface QualityMetricsSchema {
    Accuracy: string;
    DownTime: string;
    ErrorRate: string;
    PatientSatisfaction: string;
}

const IdentificationSchema = z.object({
    EquipmentName: z.string().min(1, "Equipment name is required"),
    EquipmentType: z.string().min(1, "Equipment type is required"),
    Model: z.string().min(1, "Model is required"),
    SerialNumber: z.string().min(1, "Serial number is required"),
    Category: z.string().min(1, "Category is required"),
    PrimaryLocation: z.string().min(1, "Primary location is required"),
    Department: z.string().min(1, "Department is required")
});

const SchedulingParametersSchema = z.object({
    MaxDailyUsageCount: z.string().min(1, "Max daily usage count is required"),
    BufferTime: z.string().min(1, "Buffer time is required"),
    MaxConcurrentUssage: z.string().min(1, "Max concurrent usage is required"),
    HasAlternative: z.boolean(),
    ResourceType: z.string().min(1, "Resource type is required")
});

const StaffingRequirementsSchema = z.object({
    RequiredPersonnel: z.string().min(1, "Required personnel is required"),
    MinimumStaffCount: z.number().min(1, "Minimum staff count must be at least 1"),
    AverageSetupTime: z.string().min(1, "Average setup time is required")
});

const TreatmentProtocolSchema = z.object({
    ProtocolType: z.string().min(1, "Protocol type is required"),
    ClinicalPathway: z.boolean(),
    SystemIntegration: z.string().min(1, "System integration is required"),
    PatientMonitoringRequirements: z.string().min(1, "Patient monitoring requirements are required"),
    DocumentationRequirements: z.string().min(1, "Documentation requirements are required")
});

const ResourceUtilizationSchema = z.object({
    DailyUsage: z.string().min(1, "Daily usage is required"),
    PatientsPerDay: z.number().min(1, "Patients per day must be at least 1"),
    MonthlyMaintenance: z.string().min(1, "Monthly maintenance is required"),
    AnnualCertification: z.string().min(1, "Annual certification is required")
});

const QualityMetricsSchema = z.object({
    Accuracy: z.string().min(1, "Accuracy is required"),
    DownTime: z.string().min(1, "Down time is required"),
    ErrorRate: z.string().min(1, "Error rate is required"),
    PatientSatisfaction: z.string().min(1, "Patient satisfaction is required")
});

export const resourceEquipmentSchema = z.object({
    identification: IdentificationSchema,
    schedulingParameters: SchedulingParametersSchema,
    staffingRequirements: StaffingRequirementsSchema,
    treatmentProtocol: TreatmentProtocolSchema,
    resourceUtilization: ResourceUtilizationSchema,
    qualityMetrics: QualityMetricsSchema
});

interface resourceEquipmentObject {
    identification: {
        EquipmentName: string;
        EquipmentType: string;
        Model: string;
        SerialNumber: string;
        Category: string;
        PrimaryLocation: string;
        Department: string;
    };
    schedulingParameters: {
        MaxDailyUsageCount: string;
        BufferTime: string;
        MaxConcurrentUssage: string;
        HasAlternative: boolean;
        ResourceType: string;
    };
    staffingRequirements: {
        RequiredPersonnel: string;
        MinimumStaffCount: number;
        AverageSetupTime: string;
    };
    treatmentProtocol: {
        ProtocolType: string;
        ClinicalPathway: boolean;
        SystemIntegration: string;
        PatientMonitoringRequirements: string;
        DocumentationRequirements: string;
    };
    resourceUtilization: {
        DailyUsage: string;
        PatientsPerDay: number;
        MonthlyMaintenance: string;
        AnnualCertification: string;
    };
    qualityMetrics: {
        Accuracy: string;
        DownTime: string;
        ErrorRate: string;
        PatientSatisfaction: string;
    };
}

export const resourceEquipmentObject: resourceEquipmentObject = {
    identification: {
        EquipmentName: "",
        EquipmentType: "",
        Model: "",
        SerialNumber: "",
        Category: "",
        PrimaryLocation: "",
        Department: ""
    },
    schedulingParameters: {
        MaxDailyUsageCount: "",
        BufferTime: "",
        MaxConcurrentUssage: "",
        HasAlternative: false,
        ResourceType: ""
    },
    staffingRequirements: {
        RequiredPersonnel: "",
        MinimumStaffCount: 1,
        AverageSetupTime: ""
    },
    treatmentProtocol: {
        ProtocolType: "",
        ClinicalPathway: false,
        SystemIntegration: "",
        PatientMonitoringRequirements: "",
        DocumentationRequirements: ""
    },
    resourceUtilization: {
        DailyUsage: "",
        PatientsPerDay: 1,
        MonthlyMaintenance: "",
        AnnualCertification: ""
    },
    qualityMetrics: {
        Accuracy: "",
        DownTime: "",
        ErrorRate: "",
        PatientSatisfaction: ""
    }
}