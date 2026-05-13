import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, purpose, documents, ndaAgreed } = body;

  if (!name || !company || !email || !purpose || !ndaAgreed) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ----------------------------------------------------------------
  // Option A: Send email via a transactional email provider
  // Replace with your actual provider (Resend, Postmark, SendGrid…)
  //
  // await resend.emails.send({
  //   from: "trust@deltagreen.energy",
  //   to: "security@deltagreen.energy",
  //   subject: `Document request — ${company}`,
  //   text: `
  //     Name: ${name}
  //     Company: ${company}
  //     Email: ${email}
  //     Purpose: ${purpose}
  //     Documents: ${documents.join(", ")}
  //     NDA agreed: ${ndaAgreed}
  //   `,
  // });
  //
  // ----------------------------------------------------------------
  // Option B: Push to HubSpot CRM as a deal / contact
  //
  // await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     properties: { email, firstname: name, company, hs_lead_status: "NEW" },
  //   }),
  // });
  // ----------------------------------------------------------------

  console.log("[document-request]", { name, company, email, purpose, documents });

  return NextResponse.json({ ok: true });
}
