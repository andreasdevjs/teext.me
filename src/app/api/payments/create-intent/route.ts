import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// api/payments/create-intent
export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const { messagePrice } = res;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: messagePrice,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json(
    { success: "true", data: { clientSecret: paymentIntent.client_secret } },
    { status: 200 }
  );
}
