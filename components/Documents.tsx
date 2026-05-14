"use client";
import { gatedDocuments } from "@/data/documents";

interface DocumentsProps { onRequestOpen: () => void; }

export default function Documents({ onRequestOpen }: DocumentsProps) {
  return (
    <section id="documents" className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="section-label">Transparency</p>
        <h2 className="section-heading">Security Documentation</h2>
        <p className="section-body mt-3 max-w-2xl">
          All security and compliance documents are shared with confirmed
          prospects and customers. Submit a request and we'll follow up within
          1–2 business days.
        </p>

        <div className="mt-12 max-w-lg">
          {/* Root */}
          <div className="flex items-center gap-2.5 mb-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4a1 1 0 0 1 1-1h3.586a1 1 0 0 1 .707.293L8.707 4.707A1 1 0 0 0 9.414 5H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Z" />
            </svg>
            <span className="text-sm font-semibold text-dg-dark">Security Documents</span>
          </div>

          {/* Tree */}
          <ul className="ml-2 border-l border-dg-border">
            {gatedDocuments.map((doc, i) => {
              const isLast = i === gatedDocuments.length - 1;
              return (
                <li key={doc.title} className="relative pl-5 group">
                  <span className="absolute left-0 top-[1.1rem] w-4 border-t border-dg-border" />
                  {isLast && (
                    <span className="absolute left-[-1px] top-[1.1rem] bottom-0 w-px bg-white" />
                  )}
                  <div className="py-2.5 flex items-start gap-2.5">
                    <svg className="shrink-0 mt-0.5" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.75" y="0.75" width="12.5" height="13.5" rx="1.5" fill="white" stroke="#EF4444" strokeWidth="1.5"/>
                      <line x1="2.5" y1="4"   x2="11.5" y2="4"   stroke="#D1D5DB" strokeWidth="0.9"/>
                      <line x1="2.5" y1="6.5" x2="11.5" y2="6.5" stroke="#D1D5DB" strokeWidth="0.9"/>
                      <line x1="2.5" y1="9"   x2="11.5" y2="9"   stroke="#D1D5DB" strokeWidth="0.9"/>
                      <line x1="2.5" y1="11"  x2="8.5"  y2="11"  stroke="#D1D5DB" strokeWidth="0.9"/>
                      <rect x="1" y="10.5" width="12" height="6" rx="0.75" fill="#EF4444"/>
                      <text x="7" y="15.2" fontSize="4.2" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif" textAnchor="middle">PDF</text>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-dg-dark leading-snug">{doc.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{doc.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-7 flex flex-col items-start gap-2">
            <button onClick={onRequestOpen} className="btn-primary">
              Request documents
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
