"use client";
import { useState, useEffect, useRef } from "react";

export default function Disclosure() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="disclosure" className="bg-dg-surface">
      {/* ── Incident Notification ── full width ── */}
      <div className="py-20 px-6 border-b border-dg-border">
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

      {/* ── Responsible Disclosure + CTA ── full width ── */}
      <div className="py-20 px-6">
        <div className="max-w-content mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Policy */}
            <div>
              <p className="section-label">Security contact</p>
              <h2 className="section-heading">Responsible Disclosure</h2>
              <p className="section-body mt-3">
                We don’t operate a formal bug bounty programme or allow
                unsolicited penetration testing at this time. However, if you
                come across a potential security issue in any of our products
                or services, we want to hear about it. Please reach out
                privately so we can investigate and address it.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <p className="section-label">Report a vulnerability</p>
              <h2 className="section-heading">Found something?</h2>
              <p className="section-body mt-3">
                Use our guided report form to tell us what you found, where it
                happens, and how to reproduce it. We take every report seriously.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary self-start"
                >
                  Report a vulnerability
                </button>
                <p className="text-xs text-gray-400">
                  Or email{" "}
                  <a
                    href="mailto:security@deltagreen.energy"
                    className="underline hover:text-gray-600"
                  >
                    security@deltagreen.energy
                  </a>{" "}
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosureModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

const SEVERITIES = ["Critical", "High", "Medium", "Low", "Informational"];

function DisclosureModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    severity: "",
    url: "",
    component: "",
    steps: "",
    expected: "",
    actual: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/disclosure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal
        aria-labelledby="disclosure-modal-title"
        className="relative bg-white w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-y-auto max-h-[90dvh]"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 id="disclosure-modal-title" className="text-base font-semibold text-dg-dark">
              Report a vulnerability
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">We acknowledge within 2 business days</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M12.207 3.793a1 1 0 0 1 0 1.414L9.414 8l2.793 2.793a1 1 0 0 1-1.414 1.414L8 9.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L6.586 8 3.793 5.207a1 1 0 0 1 1.414-1.414L8 6.586l2.793-2.793a1 1 0 0 1 1.414 0Z" />
            </svg>
          </button>
        </div>

        {/* Success */}
        {status === "success" ? (
          <div className="px-6 py-12 text-center">
            <div className="w-14 h-14 bg-dg-muted rounded-full flex items-center justify-center mx-auto">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#3baa1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 14l7 7L23 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dg-dark mt-4">Report received</h3>
            <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto leading-relaxed">
              Thank you. We will acknowledge your report within 2 business days and keep you updated on our progress.
            </p>
            <button onClick={onClose} className="btn-primary mt-6 mx-auto">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Jane Smith"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  className="input"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            {/* Vulnerability overview */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Vulnerability title <span className="text-red-400">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. XSS in login form"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Estimated severity
                </label>
                <select
                  className="input"
                  value={form.severity}
                  onChange={(e) => setForm({ ...form, severity: e.target.value })}
                >
                  <option value="">Select severity…</option>
                  {SEVERITIES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reproduction */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-dg-dark uppercase tracking-wide mb-3">
                How to reproduce
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Affected URL or endpoint <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. https://app.deltagreen.energy/settings or /api/v1/users"
                    required
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Affected feature or component
                  </label>
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. Login form, User profile page, Export button"
                    value={form.component}
                    onChange={(e) => setForm({ ...form, component: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Steps to reproduce <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    className="input min-h-[100px] resize-y"
                    placeholder={"1. Navigate to the affected page\n2. Enter / click…\n3. Observe the vulnerability"}
                    required
                    value={form.steps}
                    onChange={(e) => setForm({ ...form, steps: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Expected behaviour
                    </label>
                    <textarea
                      className="input min-h-[80px] resize-y"
                      placeholder="What should have happened?"
                      value={form.expected}
                      onChange={(e) => setForm({ ...form, expected: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Actual behaviour &amp; impact <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      className="input min-h-[80px] resize-y"
                      placeholder="What actually happened? What data or systems are at risk?"
                      required
                      value={form.actual}
                      onChange={(e) => setForm({ ...form, actual: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {status === "error" && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Submission failed. Email us directly at{" "}
                <a href="mailto:security@deltagreen.energy" className="underline">
                  security@deltagreen.energy
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Submit report"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
