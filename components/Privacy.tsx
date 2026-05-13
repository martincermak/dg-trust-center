const DATA_TRANSFERS = [
  { label: "Primary hosting", value: "EU/EEA (AWS Frankfurt & Ireland)", safe: true },
  { label: "Sub-processors outside EEA", value: "Covered by Standard Contractual Clauses (SCCs) per Art. 46(2)(c) GDPR", safe: true },
  { label: "Binding Corporate Rules", value: "Not applicable — we rely on SCCs for all EEA-to-third-country transfers", safe: null },
  { label: "Adequacy decisions", value: "Applied where available (e.g. transfers to countries with EU adequacy decisions)", safe: true },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 px-6 bg-dg-surface">
      <div className="max-w-content mx-auto">
        <p className="section-label">Data Protection</p>
        <h2 className="section-heading">Privacy &amp; GDPR</h2>
        <p className="section-body mt-3 max-w-2xl">We are committed to transparent, lawful processing of personal data.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-dg-dark">Key documents</h3>
            {[{title:"Privacy Policy",desc:"How we collect, use, and protect personal data.",href:"https://deltagreen.energy/privacy",ext:true},{title:"Cookie Policy",desc:"Which cookies we set and how to manage them.",href:"https://deltagreen.energy/cookies",ext:true},{title:"DPA Template",desc:"Data Processing Agreement for customers. Download, review, sign and return.",href:"/documents/dpa-template.pdf",ext:false}].map(({title,desc,href,ext}) => (
              <a key={title} href={href} target={ext?"_blank":undefined} rel={ext?"noopener noreferrer":undefined} className="card flex items-center gap-4 hover:border-dg-border group">
                <div className="w-9 h-9 bg-dg-muted rounded-lg flex items-center justify-center shrink-0">
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8" /><path d="M8 1h5v5M8 6l5-5" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-dg-dark group-hover:text-green-700 transition-colors">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </a>
            ))}
            <div className="card mt-6">
              <h3 className="text-sm font-semibold text-dg-dark mb-3">Data Protection Officer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">For privacy-related requests, right-to-erasure or any GDPR question, contact our DPO directly.</p>
              <a href="mailto:privacy@deltagreen.energy" className="mt-3 inline-flex items-center gap-1.5 text-sm text-green-700 font-medium hover:underline">privacy@deltagreen.energy</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-dg-dark mb-4">International data transfers</h3>
            <div className="space-y-3">
              {DATA_TRANSFERS.map((item) => (
                <div key={item.label} className="card flex gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${item.safe === true ? "bg-dg-lime" : "bg-gray-300"}`} />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
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
