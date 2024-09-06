import Stripe from "stripe";

import dbConnect from "../db";
import Message from "@/app/models/Message";
import User from "@/app/models/User";

import { sendEmailTask } from "@/trigger/sendEmail";

// Logic to handle successful payments, such as saving messages to the database
export async function handleSuccessfulPayment(
  paymentIntent: Stripe.PaymentIntent
) {
  // Extract the relevant data from the PaymentIntent
  const {
    metadata: { messageId },
  } = paymentIntent;

  // Connect to the database
  await dbConnect();

  try {
    // Buscamos el mensaje y le cambiamos el estado a pagado
    const message = await Message.findById(messageId);
    if (!message) {
      console.log("No se encontró este mensaje");
      return;
    }

    // Buscamos al "recibidor" del mensaje
    const user = await User.findById(message.recipient);
    if (!user) {
      console.log("Este usuario no existe");
      return;
    }

    message.paymentStatus = "paid";
    await message.save();

    // Send see config of user and send email or SMS.
    //This triggers the task and returns a handle
    await sendEmailTask.trigger({
      message: message.content,
      recipient: user.email,
    });
  } catch (error) {
    console.error("Error storing message:", error);
    return;
  }

  return;
}
