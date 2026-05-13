"use client";

import { useState } from "react";
import subprocessorData from "@/data/subprocessors.json";

export default function Subprocessors() {
  const { lastUpdated, notificationEmail, items } = subprocessorData;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    // Replace with your actual subscription endpoint or CRM hook
    console.log("Subprocessor notification subscribe:", email);
    setSubmitted(true);
  }

  return (
    <section id="subprocessors" className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="section-label">Vendors</p>
            <h2 className="section-heading">Subprocessors</h2>
            <p className="section-body mt-2 max-w-xl">
              The following third parties process personal data on our behalf.
              We assess each vendor before onboarding and review them periodically.
            </p>
          </div>
          <p className="text-xs text-gray-400 shrink-0">
            Last updated:{" "}
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </div>

        {/* Table — scrollable on mobile */}
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="table-th">Subprocessor</th>
                <th className="table-th">Purpose</th>
                <th className="table-th">Data categories</th>
                <th className="table-th">Location</th>
                <th className="table-th">Transfer basis</th>
              </tr>
            </thead>
            <tbody>
              {items.map((sp, idx) => (
                <tr
                  key={sp.name}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="table-td font-medium text-dg-dark whitespace-nowrap">
                    {sp.name}
                  </td>
                  <td className="table-td">{sp.purpose}</td>
                  <td className="table-td">
                    <div className="flex flex-wrap gap-1">
                      {sp.dataCategories.map((cat) => (
                        <span
                          key={cat}
                          className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="table-td whitespace-nowrap">{sp.location}</td>
                  <td className="table-td">
                    <TransferBadge value={sp.transferMechanism} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notification subscribe — GDPR Art. 28 requirement */}
        <div className="mt-10 bg-dg-surface border border-dg-border rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-dg-dark">
                Get notified of subprocessor changes
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                We will email you at least 30 days before adding or replacing a
                subprocessor, so you can exercise your contractual objection right.
              </p>
            </div>
            {submitted ? (
              <p className="text-sm font-medium text-green-700">
                ✓ You&apos;re subscribed. We&apos;ll notify you of changes.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  className="input w-full sm:w-56"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          To unsubscribe or exercise GDPR rights regarding this list, email{" "}
          <a href={`mailto:${notificationEmail}`} className="underline hover:text-gray-600">
            {notificationEmail}
          </a>.
        </p>
      </div>
    </section>
  );
}

function TransferBadge({ value }: { value: string }) {
  const isEEA = value.toLowerCase().includes("eea");
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${
        isEEA
          ? "bg-dg-muted text-dg-mid border-dg-border"
          : "bg-blue-50 text-blue-700 border-blue-200"
      }`}
    >
      {isEEA ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="4" opacity=".3"/><circle cx="5" cy="5" r="2"/></svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 1v8M1 5h8"/></svg>
      )}
      {value}
    </span>
  );
}
