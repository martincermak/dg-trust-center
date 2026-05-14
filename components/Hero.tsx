export default function Hero() {
  return (
    <section className="bg-dg-dark pt-32 pb-32 px-6 text-white">
      <div className="max-w-content mx-auto">
        <div className="max-w-2xl">

          {/* Headline — matches site style: bold, tight, lime on key words */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Trust &amp;{" "}<span className="text-dg-lime">Security</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed font-medium">
            Security and privacy are foundational to every product we build. We hold ISO 27001:2022
            certification and are fully aligned with GDPR requirements,
            so your customer data never leaves the EU without an appropriate legal basis.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#7aab80" }}>
            This page documents our security programme, compliance posture, and how to reach us
            for due-diligence requests — no gatekeeping.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComplianceBadge({ label, status }: { label: string; status: "certified" | "neutral" }) {
  const styles = status === "certified"
    ? "bg-dg-lime/15 border-dg-lime/30 text-dg-lime"
    : "bg-white/8 border-white/15 text-gray-400";
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${styles}`}>
      {status === "certified" && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1.5 5L4 7.5 8.5 2.5" /></svg>
      )}
      {label}
    </span>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" />
    </svg>
  );
}
