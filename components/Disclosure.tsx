export default function Disclosure() {
  return (
    <section id="disclosure" className="py-20 px-6 bg-dg-surface">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Responsible Disclosure */}
          <div>
            <p className="section-label">Security contact</p>
            <h2 className="section-heading">Responsible Disclosure</h2>
            <p className="section-body mt-3">
              If you believe you have discovered a security vulnerability in any
              Delta Green product or service, we ask you to disclose it
              responsibly. We appreciate the work of security researchers and
              commit to a transparent process.
            </p>

            <div className="mt-6 space-y-4">
              <PolicyItem title="Scope">
                All Delta Green-owned and operated domains, APIs, and mobile
                applications. Out of scope: third-party services, social
                engineering, and physical security.
              </PolicyItem>
              <PolicyItem title="Safe harbour">
                We will not pursue legal action against researchers who act in
                good faith, avoid accessing or modifying data that is not
                their own, and report findings promptly without public
                disclosure until we confirm a fix.
              </PolicyItem>
              <PolicyItem title="Response SLA">
                We acknowledge receipt within <strong>2 business days</strong>.
                We aim to triage findings within <strong>5 business days</strong>{" "}
                and to communicate a remediation timeline within{" "}
                <strong>10 business days</strong>.
              </PolicyItem>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="mailto:security@deltagreen.energy" className="btn-primary">
                <MailIcon />
                security@deltagreen.energy
              </a>
              <a
                href="/pgp-key.asc"
                className="btn-outline text-xs"
                title="Download PGP public key"
              >
                <KeyIcon />
                PGP key
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Please encrypt sensitive reports using our PGP key. Fingerprint
              published separately at{" "}
              <code className="font-mono bg-gray-100 px-1 rounded">
                /pgp-key.asc
              </code>
              .
            </p>
          </div>

          {/* Incident notification */}
          <div>
            <p className="section-label">Commitments</p>
            <h2 className="section-heading">Incident Notification</h2>
            <p className="section-body mt-3">
              In the event of a security incident that affects the
              confidentiality, integrity, or availability of your data, we are
              committed to transparent and timely communication.
            </p>

            <div className="mt-6 space-y-4">
              <CommitmentCard
                icon="⏱"
                title="72-hour notification"
                desc="For incidents likely to result in a risk to the rights and freedoms of natural persons, we notify affected customers within 72 hours of becoming aware — in line with GDPR Art. 33/34 obligations."
              />
              <CommitmentCard
                icon="📋"
                title="What we include"
                desc="Nature of the incident, categories and approximate number of records affected, likely consequences, measures taken or proposed, and a named point of contact."
              />
              <CommitmentCard
                icon="🔄"
                title="Post-incident review"
                desc="We share a post-incident report with affected customers upon request, including root cause analysis and remediation steps."
              />
            </div>

            <div className="mt-6 card border-l-4 border-l-dg-green">
              <p className="text-xs font-semibold text-dg-dark uppercase tracking-wide mb-1">
                Security contact
              </p>
              <a
                href="mailto:security@deltagreen.energy"
                className="text-sm font-medium text-dg-green hover:underline"
              >
                security@deltagreen.energy
              </a>
              <p className="text-xs text-gray-500 mt-1">
                For urgent incidents, reference "SECURITY INCIDENT" in the
                subject line to trigger our on-call escalation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicyItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      <p className="text-xs font-semibold text-dg-green uppercase tracking-wide mb-1">
        {title}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

function CommitmentCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="card flex gap-4">
      <span className="text-xl leading-none mt-0.5">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-dg-dark">{title}</p>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
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

function KeyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="3" />
      <path d="M7.5 8.5 13 13M9.5 10.5l1.5 1.5M11 9l1.5 1.5" />
    </svg>
  );
}
