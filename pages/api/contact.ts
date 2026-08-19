import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "contact-form",
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitize = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function getClientIp(req: NextApiRequest) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0].trim();
  }

  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0];
  }

  return req.socket.remoteAddress || "unknown";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const ip = getClientIp(req);

    const { success, limit, remaining, reset } =
      await ratelimit.limit(ip);

    res.setHeader("X-RateLimit-Limit", limit.toString());
    res.setHeader(
      "X-RateLimit-Remaining",
      remaining.toString(),
    );
    res.setHeader("X-RateLimit-Reset", reset.toString());

    if (!success) {
      return res.status(429).json({
        message:
          "Too many messages. Please wait a few minutes and try again.",
      });
    }

    const {
      name,
      email,
      subject,
      country,
      message,
      website,
    } = req.body;

    // Honeypot
    if (website) {
      return res.status(200).json({
        success: true,
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid form data.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanCountry =
      typeof country === "string" ? country.trim() : "";
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanSubject ||
      !cleanMessage
    ) {
      return res.status(400).json({
        message: "Please complete all required fields.",
      });
    }

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    if (cleanName.length > 100) {
      return res.status(400).json({
        message: "Name is too long.",
      });
    }

    if (cleanEmail.length > 254) {
      return res.status(400).json({
        message: "Email is too long.",
      });
    }

    if (cleanSubject.length > 150) {
      return res.status(400).json({
        message: "Subject is too long.",
      });
    }

    if (cleanMessage.length > 5000) {
      return res.status(400).json({
        message: "Message is too long.",
      });
    }

    const safeName = sanitize(cleanName);
    const safeEmail = sanitize(cleanEmail);
    const safeSubject = sanitize(cleanSubject);
    const safeCountry = sanitize(cleanCountry);
    const safeMessage = sanitize(cleanMessage).replace(
      /\n/g,
      "<br />",
    );

    const { data, error } = await resend.emails.send({
      from: "Aghead Portfolio <contact@agheadalkoko.com>",
      to: ["aghead@atmmtech.com"],
      replyTo: cleanEmail,
      subject: `Portfolio Contact: ${cleanSubject}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
          color: #1f2937;
        ">
          <div style="
            padding: 24px;
            background: #111111;
            color: #ffffff;
            border-radius: 12px 12px 0 0;
          ">
            <h2 style="margin: 0;">
              New Portfolio Contact Request
            </h2>

            <p style="
              margin: 8px 0 0;
              color: #d1d5db;
            ">
              A new message was submitted from agheadalkoko.com
            </p>
          </div>

          <div style="
            padding: 24px;
            border: 1px solid #e5e7eb;
            border-top: 0;
          ">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Country:</strong> ${
              safeCountry || "Not provided"
            }</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>

            <hr style="
              border: 0;
              border-top: 1px solid #e5e7eb;
              margin: 24px 0;
            " />

            <h3>Message</h3>

            <p>${safeMessage}</p>
          </div>

          <div style="
            padding: 14px 24px;
            background: #f9fafb;
            border-radius: 0 0 12px 12px;
            color: #6b7280;
            font-size: 12px;
          ">
            Sent securely from www.agheadalkoko.com
          </div>
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
      message:
        "Something went wrong while sending your message.",
    });
  }
}