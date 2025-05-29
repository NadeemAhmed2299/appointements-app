import { isValidUsaCity, isValidUSAPhoneNumber } from "@/app/utils/util";
import { z } from "zod";

interface EventDetailsSchema {
    EventTitle: string;
    EventType: string;
    Organizer: string,
    NumberOfAttendees: number,
    StartDateAndTime: string,
    EndDateAndTime: string,
    IsrecurringEvent: boolean,
    notes: string;
}

const EventDetailsSchema = z.object({
    EventTitle: z.string().min(1, "Name is required"),
    EventType: z.string().min(1, "Type is required"),
    Organizer: z.string().min(1, "Organizer is required"),
    NumberOfAttendees: z.number().min(1, "Attendees Count is required"),
    StartDateAndTime: z.date(),
    EndDateAndTime: z.date(),
    IsrecurringEvent: z.boolean().optional(),
    notes: z.string().min(1, "Notes is required")
}).refine(
  (data) => data.EndDateAndTime > data.StartDateAndTime,
  {
    message: "End date must be after start date",
    path: ["EndDateAndTime"]
  }
);

export const newEventSchema = z.object({
    eventDetails: EventDetailsSchema,
});

interface NewEventObject {
    eventDetails: {
        EventTitle: string;
        EventType: string;
        Organizer: string,
        NumberOfAttendees: number,
        StartDateAndTime: string,
        EndDateAndTime: string,
        IsrecurringEvent: boolean,
        notes: string;
    };
}
export const newEventObject: NewEventObject = {
    eventDetails: {
        EventTitle: "",
        EventType: "",
        Organizer: "",
        NumberOfAttendees: 0,
        StartDateAndTime: "",
        EndDateAndTime: "",
        IsrecurringEvent: false,
        notes: ""
    }
}