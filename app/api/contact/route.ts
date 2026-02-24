import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, message, timestamp, source } = body;

    // Basic server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "שם לא תקין" },
        { status: 400 }
      );
    }

    if (!phone || !/^0\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "מספר טלפון לא תקין" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "אימייל לא תקין" },
        { status: 400 }
      );
    }

    // Forward to external endpoint if configured
    const endpoint = process.env.CONTACT_ENDPOINT;

    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: message || "",
          timestamp: timestamp || new Date().toISOString(),
          source: source || "website",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to forward to endpoint");
      }
    }

    // Log to console (useful for development)
    console.log("New contact form submission:", {
      name,
      phone,
      email,
      message,
      timestamp,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "שגיאה בשליחת הטופס" },
      { status: 500 }
    );
  }
}
