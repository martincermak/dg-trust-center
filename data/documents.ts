export interface PublicDocument {
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface GatedDocument {
  title: string;
  description: string;
}

export const publicDocuments: PublicDocument[] = [
  {
    title: "ISO 27001:2022 Certificate",
    description: "Certification scope, issuing body, validity period.",
    href: "/documents/iso-27001-certificate.pdf",
    label: "Download PDF",
  },
  {
    title: "Pentest Attestation Letter",
    description: "One-page attestation from our penetration testing vendor confirming annual testing was completed.",
    href: "/documents/pentest-attestation.pdf",
    label: "Download PDF",
  },
  {
    title: "DPA Template",
    description: "Data Processing Agreement template for customers who process personal data through our platform.",
    href: "/documents/dpa-template.pdf",
    label: "Download PDF",
  },
];

export const gatedDocuments: GatedDocument[] = [
  {
    title: "Full Penetration Test Report",
    description: "Complete scope, methodology, findings, and remediation status from our annual pentest.",
  },
  {
    title: "Statement of Applicability (SoA)",
    description: "Full ISO 27001 Annex A control inventory with implementation status and justifications.",
  },
  {
    title: "SIG / CAIQ Questionnaire",
    description: "Pre-filled Standardized Information Gathering or Consensus Assessment Initiative Questionnaire.",
  },
  {
    title: "Security Whitepaper",
    description: "Detailed overview of our security architecture, controls, and operational practices.",
  },
  {
    title: "Internal Audit Summary",
    description: "Summary of findings and corrective actions from our most recent internal ISMS audit.",
  },
];
