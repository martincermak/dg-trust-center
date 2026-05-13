"use client";

import { publicDocuments, gatedDocuments } from "@/data/documents";

interface DocumentsProps {
  onRequestOpen: () => void;
}

export default function Documents({ onRequestOpen }: DocumentsProps) {
  return (
    <section id="documents" className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="section-label">Transparency</p>
        <h2 className="section-heading">Security Documentation</h2>
        <p className="section-body mt-3 max-w-2xl">
          Core compliance documents are available without any gate. Detailed
          operational documents are shared under NDA with verified prospects and
          customers — use the request form below.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Public documents */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-sm font-semibold text-dg-dark">Publicly available</span>
              <span className="badge">No NDA required</span>
            </div>
            <ul className="space-y-3">
              {publicDocuments.map((doc) => (
                <li key={doc.title} className="card flex items-start gap-4">
                  <div className="w-9 h-9 bg-dg-muted rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <DocIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-dg-dark">{doc.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{doc.description}</p>
                  </div>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs shrink-0 mt-0.5"
                  >
                    <DownloadIcon />
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gated documents */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-sm font-semibold text-dg-dark">Under NDA</span>
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                Request required
              </span>
            </div>
            <ul className="space-y-3">
              {gatedDocuments.map((doc) => (
                <li key={doc.title} className="card flex items-start gap-4 opacity-80">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <LockDocIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-dg-dark">{doc.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{doc.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button onClick={onRequestOpen} className="btn-primary mt-6 w-full justify-center">
              Request NDA documents
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              We typically respond within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6L9 1Z" />
      <path d="M9 1v5h5M5 9h6M5 12h4" />
    </svg>
  );
}

function LockDocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="7" width="11" height="8" rx="1.5" />
      <path d="M5 7V5a3 3 0 0 1 6 0v2" />
      <circle cx="8" cy="11" r="1" fill="#9CA3AF" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" />
    </svg>
  );
}
