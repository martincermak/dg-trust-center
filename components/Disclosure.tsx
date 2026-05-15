export default function Disclosure() {
  return (
    <section id="disclosure" className="bg-dg-surface">
      <div className="py-20 px-6">
        <div className="max-w-content mx-auto">
          <p className="section-label">Commitments</p>
          <h2 className="section-heading">Incident Notification</h2>
          <p className="section-body mt-3 max-w-2xl">
            In the event of a security incident affecting the confidentiality,
            integrity, or availability of your data, we are committed to
            transparent and timely communication.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "⏱",
                title: "Processor notification",
                desc: "As a data processor, we notify affected customers (controllers) without undue delay upon becoming aware of a personal data breach — enabling them to meet their own obligations, including the 72-hour reporting window to supervisory authorities under GDPR Art. 33.",
              },
              {
                icon: "🔄",
                title: "Post-incident review",
                desc: "We share a post-incident report with affected customers upon request, including root cause analysis and remediation steps.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card flex gap-4">
                <span className="text-2xl leading-none mt-0.5 shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-semibold text-dg-dark">{title}</p>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
