import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(request: NextRequest, response: NextResponse) {
  // Cogemos la signature
  const sig = request.headers.get("stripe-signature");

  // Secret concreto del endpoint webhook
  const endpointSecret = "whsec_vDQx6xeYMlRh1abFbtUGVcuj6eZEHpTv";

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
      const session = event.data.object;
      console.log(session);
      return NextResponse.json(
        { success: "true", data: { message: "Ok bro" } },
        { status: 200 }
      );
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json(
    { success: "true", data: { message: "Ok bro" } },
    { status: 200 }
  );
}
