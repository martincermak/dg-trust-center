export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="section-label">Compliance</p>
        <h2 className="section-heading">Certifications &amp; Standards</h2>
        <p className="section-body mt-3 max-w-2xl">
          Independent third-party audits and certifications validate our security
          programme against internationally recognised frameworks.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ISO 27001 */}
          <div className="card border-l-4 border-l-dg-lime">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="badge">Certified</span>
                <h3 className="text-base font-semibold text-dg-dark mt-3">
                  ISO 27001:2022
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Information Security Management System
                </p>
              </div>
              <CertIcon />
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <Row label="Scope" value="Copilot, Proteus &amp; DeltaLink platforms and supporting infrastructure" />
              <Row label="Certifying body" value="[Certifying Body Name]" />
              <Row label="Certificate no." value="[Certificate Number]" />
              <Row label="Valid until" value="[Expiry Date]" />
            </dl>
            <a
              href="/documents/iso-27001-certificate.pdf"
              className="btn-outline mt-5 text-xs"
            >
              <DownloadIcon />
              Download certificate (PDF)
            </a>
          </div>

          {/* GDPR */}
          <div className="card border-l-4 border-l-blue-400">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="badge">Compliant</span>
                <h3 className="text-base font-semibold text-dg-dark mt-3">GDPR</h3>
                <p className="text-sm text-gray-500 mt-1">
                  EU General Data Protection Regulation (2016/679)
                </p>
              </div>
              <EUIcon />
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Delta Green processes personal data lawfully under GDPR. We maintain
              a DPO, a records-of-processing activities register, and offer a DPA
              template to all customers who require one.
            </p>
            <a href="#privacy" className="btn-outline mt-5 text-xs">
              Privacy details
            </a>
          </div>

          {/* NIS2 / NÚKIB */}
          <div className="card border-l-4 border-l-gray-300">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
                  Not in scope
                </span>
                <h3 className="text-base font-semibold text-dg-dark mt-3">NIS2 / NÚKIB</h3>
                <p className="text-sm text-gray-500 mt-1">
                  EU Network &amp; Information Security Directive
                </p>
              </div>
              <InfoIcon />
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Delta Green does not currently fall within the scope of NIS2 or
              the Czech NÚKIB regulated entity classification. We monitor
              regulatory developments and will report any changes in scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="text-gray-400 shrink-0 w-28">{label}</dt>
      <dd
        className="text-gray-700 font-medium"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}

function CertIcon() {
  return (
    <div className="shrink-0 w-10 h-10 bg-dg-muted rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#72EC41" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="8" r="4" />
        <path d="M6 14.5 4 19l6-2 6 2-2-4.5" />
      </svg>
    </div>
  );
}

function EUIcon() {
  return (
    <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 2c0 0-3 3-3 8s3 8 3 8M10 2c0 0 3 3 3 8s-3 8-3 8M2 10h16" />
      </svg>
    </div>
  );
}

function InfoIcon() {
  return (
    <div className="shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 9v5M10 6.5v.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" />
    </svg>
  );
}
