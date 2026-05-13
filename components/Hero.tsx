export default function Hero() {
  return (
    <section className="bg-dg-dark pt-32 pb-24 px-6 text-white">
      <div className="max-w-content mx-auto">
        <div className="max-w-2xl">
          {/* Compliance badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <ComplianceBadge label="ISO 27001:2022" certified />
            <ComplianceBadge label="GDPR Compliant" certified />
            <ComplianceBadge label="NIS2 — Not in scope" />
            <ComplianceBadge label="CRA — Monitoring" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Trust &amp; Security
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Security and privacy are foundational to every product we build.
            We hold ISO 27001:2022 certification and operate our entire
            infrastructure within the European Economic Area, so your data never
            leaves the EU without an appropriate legal basis.
          </p>

          <p className="mt-4 text-base text-gray-400">
            This page documents our security programme, compliance posture, and
            how to reach us for due-diligence requests — no gatekeeping, no
            marketing spin.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/documents/iso-27001-certificate.pdf" className="btn-primary">
              <DownloadIcon />
              ISO 27001 Certificate
            </a>
            <a href="#documents" className="btn-outline !text-gray-300 !border-white/20 hover:!bg-white/10">
              Request NDA documents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceBadge({ label, certified }: { label: string; certified?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
        certified
          ? "bg-dg-green/20 border-dg-green/40 text-dg-bright"
          : "bg-white/10 border-white/20 text-gray-400"
      }`}
    >
      {certified && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <path d="M8.5 2.5 4 7.5 1.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )}
      {label}
    </span>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" />
    </svg>
  );
}
