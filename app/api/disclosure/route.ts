import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, title, severity, url, component, steps, expected, actual } = body;

  if (!name || !email || !title || !url || !steps || !actual) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Wire up to your preferred delivery method:
  //
  // Option A: Resend / Postmark / SendGrid
  // await resend.emails.send({
  //   from: "trust@deltagreen.energy",
  //   to: "security@deltagreen.energy",
  //   subject: `[Vulnerability Report] ${title} — ${severity || "Unrated"}`,
  //   text: `From: ${name} <${email}>\nSeverity: ${severity}\nURL: ${url}\nComponent: ${component}\n\nSteps:\n${steps}\n\nExpected:\n${expected}\n\nActual:\n${actual}`,
  // });
  //
  // Option B: Create a GitHub Security Advisory draft via API
  // Option C: Push to Jira / Linear as a security ticket

  console.log("[disclosure]", { name, email, title, severity, url, component, steps, expected, actual });
  return NextResponse.json({ ok: true });
}
