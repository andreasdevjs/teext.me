import { logger, task } from "@trigger.dev/sdk/v3";

import { Resend } from "resend";
const resend = new Resend("re_J4radRRj_94tbVvpHhxEPvGa5xf7s8ZeJ");

export const sendEmailTask = task({
  id: "send-email",
  run: async (payload: any, { ctx }) => {
    const { message, recipient } = payload;
    logger.log("Hello, world!", { payload, ctx });

    try {
      const { data, error } = await resend.emails.send({
        from: "Teext.me 📩 <hello@teext.me>",
        to: [recipient],
        subject: "You have a new message",
        text: message,
        html: "",
      });

      if (error) {
        return {
          message: "fue mal",
        };
      }

      return {
        message: "fue bien",
      };
    } catch (error) {}

    return {
      message: "Hello, world!",
    };
  },
});
