"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESENT_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!message || typeof message != "string") {
    return {
      error: "Invalid Message",
    };
  }

  if (!senderEmail || typeof senderEmail != "string") {
    return {
      error: "Invalid Email",
    };
  }

  let data;

  data = await resend.emails
    .send({
      from: senderEmail,
      to: "mrudulpatel04@gmail.com",
      subject: "Portfolio Website Enquiry",
      reply_to: senderEmail,
      text: message,
    })
    .catch((err) => {
      return {
        error: err.message,
      };
    });

    return {data};
};
