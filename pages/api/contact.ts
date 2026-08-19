import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, subject, country, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Please complete all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Aghead Portfolio <contact@agheadalkoko.com>",
      to: ["aghead@atmmtech.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact Request</h2>

          <p>
            You received a new message from your portfolio website.
          </p>

          <hr />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <h3>Message</h3>

          <p>${message}</p>

          <hr />

          <p style="font-size: 12px; color: #666;">
            Sent from agheadalkoko.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      message: "Something went wrong while sending your message.",
    });
  }
}