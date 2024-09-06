import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

import dbConnect from "@/app/lib/db";

import Message from "@/app/models/Message";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// api/payments/create-intent
export async function POST(request: NextRequest, response: NextResponse) {
  // Recibimos el contenido del mensaje y a qué usuario
  const req = await request.json();
  const { messagePrice, message, user } = req;

  // Conectamos con la base de datos
  await dbConnect();

  // Guardamos el mensaje con un estado pendiente
  const newMessage = await Message.create({
    content: message,
    recipient: user.userId,
    paymentStatus: "pending",
    createdAt: new Date(),
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: messagePrice,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      messageId: newMessage._id.toString(),
    },
  });

  return NextResponse.json(
    { success: "true", data: { clientSecret: paymentIntent.client_secret } },
    { status: 200 }
  );
}
