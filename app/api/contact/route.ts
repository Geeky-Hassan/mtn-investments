import { NextResponse } from "next/server";

type ContactRequest = {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
  botcheck?: string;
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const interest = clean(body.interest);
  const message = clean(body.message);
  const botcheck = clean(body.botcheck);

  if (botcheck) {
    return NextResponse.json({ message: "Submission accepted." });
  }

  if (!name || !email || !interest || !message) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid work email." }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { message: "Contact form is not configured yet. Add WEB3FORMS_ACCESS_KEY in Vercel." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `MTN Investments inquiry: ${interest}`,
        from_name: "MTN Investments Website",
        name,
        email,
        interest,
        message,
      }),
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (!response.ok || result?.success === false) {
      return NextResponse.json(
        { message: result?.message || "Unable to send the message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Your message has been sent." });
  } catch {
    return NextResponse.json({ message: "Unable to reach the contact service." }, { status: 502 });
  }
}
