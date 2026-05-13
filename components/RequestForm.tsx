"use client";

import { useState, useEffect, useRef } from "react";
import { gatedDocuments } from "@/data/documents";

interface RequestFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  purpose: string;
  documents: string[];
  ndaAgreed: boolean;
}

const PURPOSES = [
  "Security due diligence / vendor assessment",
  "Procurement / RFP process",
  "Customer audit",
  "Legal / compliance review",
  "Other",
];

export default function RequestForm({ open, onClose }: RequestFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    purpose: "",
    documents: [],
    ndaAgreed: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  function toggleDocument(title: string) {
    setForm((prev) => ({
      ...prev,
      documents: prev.documents.includes(title)
        ? prev.documents.filter((d) => d !== title)
        : [...prev.documents, title],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Replace with your actual form endpoint (e.g. Formspree, HubSpot, custom API)
      const res = await fetch("/api/document-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal
        aria-labelledby="form-title"
        className="relative bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-y-auto max-h-[90dvh]"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 id="form-title" className="text-base font-semibold text-dg-dark">
              Request Security Documents
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Documents shared under mutual NDA · typically 1–2 business days
            </p>
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

        {status === "success" ? (
          <SuccessState onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            {/* Identity */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" required>
                <input
                  className="input"
                  type="text"
                  placeholder="Jane Smith"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Field>
              <Field label="Company" required>
                <input
                  className="input"
                  type="text"
                  placeholder="Acme Corp"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </Field>
            </div>

            <Field label="Work email" required>
              <input
                className="input"
                type="email"
                placeholder="jane@acme.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Field>

            <Field label="Purpose of request" required>
              <select
                className="input"
                required
                value={form.purpose}
                onChange={(e) => setForm({ ...form, purpose: e.target.value })}
              >
                <option value="">Select a purpose…</option>
                {PURPOSES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </Field>

            {/* Document selection */}
            <fieldset>
              <legend className="text-xs font-semibold text-gray-700 mb-2">
                Documents requested <span className="text-gray-400 font-normal">(select all that apply)</span>
              </legend>
              <div className="space-y-2">
                {gatedDocuments.map((doc) => (
                  <label
                    key={doc.title}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      form.documents.includes(doc.title)
                        ? "border-dg-green bg-dg-surface"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="mt-0.5 accent-dg-green shrink-0"
                      checked={form.documents.includes(doc.title)}
                      onChange={() => toggleDocument(doc.title)}
                    />
                    <div>
                      <p className="text-sm font-medium text-dg-dark">{doc.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{doc.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* NDA agreement */}
            <label className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 accent-amber-600 shrink-0"
                required
                checked={form.ndaAgreed}
                onChange={(e) => setForm({ ...form, ndaAgreed: e.target.checked })}
              />
              <p className="text-xs text-amber-800 leading-relaxed">
                I agree to receive these documents under a mutual Non-Disclosure
                Agreement and confirm I have authority to bind my organisation
                to its terms. I understand documents must not be shared externally
                without Delta Green&apos;s prior written consent.
              </p>
            </label>

            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Something went wrong. Please try again or email{" "}
                <a href="mailto:security@deltagreen.energy" className="underline">
                  security@deltagreen.energy
                </a>{" "}
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting" || !form.ndaAgreed}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Submit request"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              We respond within 1–2 business days to verified corporate emails.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="px-6 py-12 text-center">
      <div className="w-14 h-14 bg-dg-muted rounded-full flex items-center justify-center mx-auto">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 14l7 7L23 7" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-dg-dark mt-4">Request received</h3>
      <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto leading-relaxed">
        Thank you. We will review your request and follow up at your work email
        within 1–2 business days.
      </p>
      <button onClick={onClose} className="btn-primary mt-6 mx-auto">
        Close
      </button>
    </div>
  );
}
