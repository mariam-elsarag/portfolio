import { Resend } from "resend";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const json = (body: { error?: string; message?: string }, status: number) =>
  Response.json(body, { status });

const isValidEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json({ error: "Request body must be valid JSON." }, 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ error: "Name, email, and message are required." }, 400);
  }

  const {
    name: rawName,
    email: rawEmail,
    message: rawMessage,
  } = body as ContactRequest;

  if (
    typeof rawName !== "string" ||
    typeof rawEmail !== "string" ||
    typeof rawMessage !== "string"
  ) {
    return json({ error: "Name, email, and message are required." }, 400);
  }

  const name = rawName.trim();
  const email = rawEmail.trim();
  const message = rawMessage.trim();

  if (name.length < 2 || name.length > 100) {
    return json({ error: "Name must be between 2 and 100 characters." }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ error: "Please provide a valid email address." }, 400);
  }

  if (message.length < 3 || message.length > 500) {
    return json(
      { error: "Message must be between 3 and 500 characters." },
      400,
    );
  }

  const { RESEND_API_KEY, CONTACT_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_EMAIL || !isValidEmail(CONTACT_EMAIL)) {
    console.error("Contact form Resend configuration is missing or invalid.");
    return json({ error: "Contact service is not configured." }, 503);
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Contact form email delivery failed.", error);
      return json({ error: "Unable to send your message right now." }, 502);
    }
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return json({ error: "Unable to send your message right now." }, 502);
  }

  return json({ message: "Your message has been sent." }, 200);
}
