import { NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/validators";

type ContactProviderPayload = {
  to: string;
  from: string;
  subject: string;
  replyTo: string;
  text: string;
};

async function sendContactEmail(payload: ContactProviderPayload): Promise<void> {
  const endpoint = process.env.CONTACT_PROVIDER_ENDPOINT;
  const apiKey = process.env.CONTACT_PROVIDER_API_KEY;

  if (!endpoint || !apiKey) {
    console.warn(
      "CONTACT_PROVIDER_ENDPOINT or CONTACT_PROVIDER_API_KEY is not set. Skipping provider call."
    );
    return;
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const details = await res.text();
    throw new Error(`Email provider error: ${res.status} ${details}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload.",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const destinationEmail =
      process.env.CONTACT_RECEIVER_EMAIL ?? "solutions@dhl-express-logistics.example";
    const senderEmail =
      process.env.CONTACT_SENDER_EMAIL ?? "no-reply@dhl-express-logistics.example";

    const text = [
      "New DHL Express Logistics contact request",
      `Name: ${data.fullName}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "N/A"}`,
      `Shipment Type: ${data.shipmentType}`,
      `Origin: ${data.origin || "N/A"}`,
      `Destination: ${data.destination || "N/A"}`,
      `Monthly Volume: ${data.monthlyVolume || "N/A"}`,
      `Message: ${data.message}`,
    ].join("\n");

    await sendContactEmail({
      to: destinationEmail,
      from: senderEmail,
      subject: `Shipping consultation request from ${data.fullName}`,
      replyTo: data.email,
      text,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thanks—your request has been received. A shipping specialist will contact you within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process contact request at this time.",
      },
      { status: 500 }
    );
  }
}
