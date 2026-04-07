import { NextResponse } from "next/server";
import { trackingRequestSchema } from "@/lib/validators";

type TrackingEvent = {
  time: string;
  location: string;
  message: string;
};

type TrackingResponse = {
  trackingNumber: string;
  status: "In transit" | "Delivered" | "Exception" | "Shipment information received";
  estimatedDelivery: string;
  events: TrackingEvent[];
};

function buildSampleTracking(trackingNumber: string): TrackingResponse {
  const lastDigit = Number(trackingNumber[trackingNumber.length - 1]);

  if (lastDigit % 5 === 0) {
    return {
      trackingNumber,
      status: "Delivered",
      estimatedDelivery: "Delivered",
      events: [
        { time: "Apr 7, 09:12", location: "Newark, NJ", message: "Shipment picked up" },
        {
          time: "Apr 7, 22:40",
          location: "Cincinnati, OH",
          message: "Processed at export facility",
        },
        { time: "Apr 8, 06:15", location: "Leipzig, DE", message: "Arrived at destination gateway" },
        { time: "Apr 8, 13:05", location: "Berlin, DE", message: "Delivered - Signed by receiver" },
      ],
    };
  }

  if (lastDigit % 2 === 0) {
    return {
      trackingNumber,
      status: "In transit",
      estimatedDelivery: "Wed, Apr 10",
      events: [
        { time: "Apr 7, 09:12", location: "Newark, NJ", message: "Shipment picked up" },
        {
          time: "Apr 7, 22:40",
          location: "Cincinnati, OH",
          message: "Processed at export facility",
        },
        { time: "Apr 8, 06:15", location: "Cincinnati, OH", message: "Departed facility" },
      ],
    };
  }

  return {
    trackingNumber,
    status: "Shipment information received",
    estimatedDelivery: "Pending pickup",
    events: [
      {
        time: "Apr 7, 08:01",
        location: "Origin service area",
        message: "Shipment information received",
      },
    ],
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = trackingRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid tracking request.",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { trackingNumber } = parsed.data;
    const result = buildSampleTracking(trackingNumber);

    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/track failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch tracking details at this time.",
      },
      { status: 500 }
    );
  }
}
