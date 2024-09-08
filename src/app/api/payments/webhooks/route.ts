import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

import { handleSuccessfulPayment } from "@/app/lib/webhooks/payments";

export async function POST(request: NextRequest, response: NextResponse) {
  // Cogemos la signature
  const sig = request.headers.get("stripe-signature");

  // Secret concreto del endpoint webhook
  const endpointSecret = "whsec_vzY2EywukR6sDrbPN9kPklLETF8oAMHQ";

  // Obtenemos el body
  const body = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
  } catch (err: any) {
    console.error(err);
    return;
  }

  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      await handleSuccessfulPayment(paymentIntent);
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json(
    { success: "true", data: { message: "Webhook received" } },
    { status: 200 }
  );
}
