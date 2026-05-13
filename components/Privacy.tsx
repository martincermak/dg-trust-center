const DATA_TRANSFER_ITEMS = [
  {
    label: "Primary hosting",
    value: "EU/EEA (AWS Frankfurt & Ireland)",
    safe: true,
  },
  {
    label: "Sub-processors outside EEA",
    value: "Covered by Standard Contractual Clauses (SCCs) per Art. 46(2)(c) GDPR",
    safe: true,
  },
  {
    label: "Binding Corporate Rules",
    value: "Not applicable — we rely on SCCs for all EEA-to-third-country transfers",
    safe: null,
  },
  {
    label: "Adequacy decisions",
    value: "Applied where available (e.g. transfers to countries with EU adequacy decisions)",
    safe: true,
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 px-6 bg-dg-surface">
      <div className="max-w-content mx-auto">
        <p className="section-label">Data Protection</p>
        <h2 className="section-heading">Privacy &amp; GDPR</h2>
        <p className="section-body mt-3 max-w-2xl">
          We are committed to transparent, lawful processing of personal data.
          Below is a summary of our key privacy commitments and data transfer
          safeguards.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left — quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-dg-dark">Key documents</h3>

            <LinkCard
              title="Privacy Policy"
              desc="How we collect, use, and protect personal data."
              href="https://deltagreen.energy/privacy"
              external
            />
            <LinkCard
              title="Cookie Policy"
              desc="Which cookies we set and how to manage them."
              href="https://deltagreen.energy/cookies"
              external
            />
            <LinkCard
              title="DPA Template"
              desc="Data Processing Agreement for customers. Download, review, sign and return."
              href="/documents/dpa-template.pdf"
              download
            />

            <div className="card mt-6">
              <h3 className="text-sm font-semibold text-dg-dark mb-3">Data Protection Officer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For privacy-related requests, right-to-erasure or any GDPR
                question, contact our DPO directly.
              </p>
              <a
                href="mailto:security@deltagreen.energy"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-green-700 font-medium hover:underline"
              >
                <MailIcon />
                security@deltagreen.energy
              </a>
            </div>
          </div>

          {/* Right — data transfers */}
          <div>
            <h3 className="text-sm font-semibold text-dg-dark mb-4">
              International data transfers
            </h3>
            <div className="space-y-3">
              {DATA_TRANSFER_ITEMS.map((item) => (
                <div key={item.label} className="card flex gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${
                    item.safe === true ? "bg-dg-green" : "bg-gray-300"
                  }`} />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-700 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkCard({
  title,
  desc,
  href,
  external,
  download,
}: {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="card flex items-center gap-4 hover:border-dg-border group"
    >
      <div className="w-9 h-9 bg-dg-muted rounded-lg flex items-center justify-center shrink-0">
        {download ? <DownloadIcon /> : <ExtLinkIcon />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-dg-dark group-hover:text-green-700 transition-colors">
          {title}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>
      <ArrowIcon />
    </a>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="12" height="9" rx="1.5" />
      <path d="M1 4l6 4.5L13 4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="#3baa1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" />
    </svg>
  );
}

function ExtLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8" />
      <path d="M8 1h5v5M8 6l5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}
