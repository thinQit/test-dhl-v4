import { z } from "zod";

export const shipmentTypeEnum = z.enum([
  "Documents",
  "Parcels (0–30 kg)",
  "Heavyweight (30+ kg)",
  "Medical supplies",
  "Electronics",
  "Other",
  "Parcels",
  "Heavyweight",
]);

export const monthlyVolumeEnum = z.enum([
  "1–10 shipments",
  "11–50 shipments",
  "51–200 shipments",
  "200+ shipments",
]);

export const contactSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  company: z.string().trim().min(2, "Company is required").max(120),
  email: z.string().trim().email("Valid work email is required").max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  shipmentType: shipmentTypeEnum,
  origin: z.string().trim().min(2).max(100).optional(),
  destination: z.string().trim().min(2).max(100).optional(),
  monthlyVolume: monthlyVolumeEnum.optional(),
  message: z.string().trim().min(10, "Message is too short").max(3000),
});

export const trackingRequestSchema = z.object({
  trackingNumber: z
    .string()
    .trim()
    .regex(/^\d{10,12}$/, "Tracking number must be 10–12 digits"),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type TrackingRequestInput = z.infer<typeof trackingRequestSchema>;
