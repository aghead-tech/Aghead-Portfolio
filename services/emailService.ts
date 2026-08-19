interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  country?: string;
}

export const emailService = {
  send: async (data: ContactFormData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message");
    }

    return result;
  },
};