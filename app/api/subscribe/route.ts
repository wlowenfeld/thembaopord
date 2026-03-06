import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // MailerLite integration
    // Set MAILERLITE_API_KEY in Vercel environment variables
    const apiKey = process.env.MAILERLITE_API_KEY;

    if (apiKey) {
      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          groups: [process.env.MAILERLITE_GROUP_ID || ""],
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("MailerLite error:", data);
        return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
      }
    } else {
      // Log to console if no API key configured (dev mode)
      console.log("New subscriber (no MailerLite key configured):", email);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
