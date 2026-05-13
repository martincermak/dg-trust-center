export default function Disclosure() {
  return (
    <section id="disclosure" className="py-20 px-6 bg-dg-surface">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="section-label">Security contact</p>
            <h2 className="section-heading">Responsible Disclosure</h2>
            <p className="section-body mt-3">If you believe you have discovered a security vulnerability in any Delta Green product or service, we ask you to disclose it responsibly.</p>
            <div className="mt-6 space-y-4">
              {[
                {title:"Scope",text:"All Delta Green-owned and operated domains, APIs, and mobile applications. Out of scope: third-party services, social engineering, and physical security."},
                {title:"Safe harbour",text:"We will not pursue legal action against researchers who act in good faith, avoid accessing or modifying data that is not their own, and report findings promptly without public disclosure until we confirm a fix."},
                {title:"Response SLA",text:"We acknowledge receipt within 2 business days, triage within 5 business days, and communicate a remediation timeline within 10 business days."},
              ].map(({title,text}) => (
                <div key={title} className="card">
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="mailto:security@deltagreen.energy" className="btn-primary">security@deltagreen.energy</a>
              <a href="/pgp-key.asc" className="btn-outline text-xs">PGP key</a>
            </div>
          </div>
          <div>
            <p className="section-label">Commitments</p>
            <h2 className="section-heading">Incident Notification</h2>
            <p className="section-body mt-3">In the event of a security incident affecting your data, we are committed to transparent and timely communication.</p>
            <div className="mt-6 space-y-4">
              {[
                {icon:"⏱",title:"72-hour notification",desc:"For incidents likely to result in a risk to the rights and freedoms of natural persons, we notify affected customers within 72 hours of becoming aware — in line with GDPR Art. 33/34 obligations."},
                {icon:"📋",title:"What we include",desc:"Nature of the incident, categories and approximate number of records affected, likely consequences, measures taken or proposed, and a named point of contact."},
                {icon:"🔄",title:"Post-incident review",desc:"We share a post-incident report with affected customers upon request, including root cause analysis and remediation steps."},
              ].map(({icon,title,desc}) => (
                <div key={title} className="card flex gap-4">
                  <span className="text-xl leading-none mt-0.5">{icon}</span>
                  <div><p className="text-sm font-semibold text-dg-dark">{title}</p><p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p></div>
                </div>
              ))}
            </div>

            <div className="mt-6 card border-l-4 border-l-dg-lime"> 
              <p className="text-xs font-semibold text-dg-dark uppercase tracking-wide mb-1">
                Security contact
              </p>
              <a
                href="mailto:security@deltagreen.energy"
                className="text-sm font-medium text-green-700 hover:underline"
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
