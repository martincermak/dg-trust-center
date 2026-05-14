import { NextRequest, NextResponse } from "next/server";

// Domains that receive documents automatically after submitting the NDA form.
// All other requests are forwarded to security@deltagreen.energy for manual review.
const CUSTOMER_DOMAINS: string[] = [
  // "acme.com",
  // "example-customer.com",
];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, purpose, documents, ndaAgreed } = body;

  if (!name || !company || !email || !purpose || !ndaAgreed) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  const isWhitelisted = CUSTOMER_DOMAINS.includes(domain);

  if (isWhitelisted) {
    // Auto-send requested documents to the requester
    // await resend.emails.send({
    //   from: "trust@deltagreen.energy",
    //   to: email,
    //   subject: "Your Delta Green security documents",
    //   text: `Hi ${name},\n\nThank you for your NDA agreement. Please find your requested documents attached.\n\nDelta Green Security Team`,
    //   attachments: documents.map((title: string) => ({ ... })),
    // });
    console.log("[document-request] auto-send to whitelisted domain:", domain, { documents });
  } else {
    // Notify admin — needs manual review
    // await resend.emails.send({
    //   from: "trust@deltagreen.energy",
    //   to: "security@deltagreen.energy",
    //   subject: `[Document Request] ${company} — ${name}`,
    //   text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPurpose: ${purpose}\nDocuments: ${documents?.join(", ")}\n\nDomain not whitelisted — manual review required.`,
    // });
    console.log("[document-request] manual review required for:", domain, { name, company, email, purpose, documents });
  }

  return NextResponse.json({ ok: true });
}
