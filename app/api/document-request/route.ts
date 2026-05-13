import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, purpose, documents, ndaAgreed } = body;

  if (!name || !company || !email || !purpose || !ndaAgreed) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Option A: Resend / Postmark / SendGrid
  // await resend.emails.send({ from: "trust@deltagreen.energy", to: "security@deltagreen.energy", ... });

  // Option B: HubSpot CRM
  // await fetch("https://api.hubapi.com/crm/v3/objects/contacts", { ... });

  console.log("[document-request]", { name, company, email, purpose, documents });
  return NextResponse.json({ ok: true });
}
