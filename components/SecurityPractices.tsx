import React from "react";

const PRACTICES = [
  { title: "Encryption", body: "All data in transit is protected by TLS 1.2 or higher. Data at rest is encrypted using AES-256. Encryption keys are managed through a dedicated key management service.", icon: "lock" },
  { title: "Access Control & MFA", body: "Role-based access control (RBAC) limits data access to personnel with a documented business need. Our access management policy requires multi-factor authentication for internal systems and production environments where technically supported.", icon: "shield" },
  { title: "Vulnerability Management", body: "We conduct annual penetration testing by an independent third party and perform continuous automated scanning. Findings are tracked against documented SLAs based on severity.", icon: "radar" },
  { title: "Incident Response", body: "A documented incident response plan is tested at least annually. Customers are notified of security incidents affecting their data within the timelines specified in our agreements and applicable law.", icon: "alert" },
  { title: "Business Continuity & DR", body: "Our services are designed for high availability with documented recovery time and recovery point objectives. Backup and restoration procedures are tested regularly.", icon: "refresh" },
  { title: "Secure Development", body: "Security requirements are embedded in our SDLC. Code changes undergo peer review, and we run automated SAST/dependency-audit checks in our CI pipeline before every deployment.", icon: "code" },
  { title: "Employee Security Training", body: "All employees complete security awareness training upon hire and annually thereafter. Personnel with access to sensitive systems receive role-specific training.", icon: "people" },
  { title: "Third-Party Risk", body: "Vendors and sub-processors are assessed before onboarding and reviewed periodically. We maintain a public sub-processor list and notify customers of material changes.", icon: "chain" },
];

const ICONS: Record<string, React.FC> = {
  lock: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="12" height="9" rx="2" /><path d="M6 8V5a3 3 0 1 1 6 0v3" /></svg>,
  shield: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2 3 5v5c0 3.5 2.5 6.5 6 7.5C12.5 16.5 15 13.5 15 10V5L9 2Z" /><path d="M6.5 9l2 2 3.5-3.5" /></svg>,
  radar: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7" /><circle cx="9" cy="9" r="3" /><path d="M9 9 15 4" /></svg>,
  alert: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 1 1 16h16L9 1Z" /><path d="M9 7v4M9 13v.5" strokeWidth="1.8" /></svg>,
  refresh: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9a6 6 0 0 1 10.5-4M15 9a6 6 0 0 1-10.5 4" /><path d="M13 5h2.5V2.5M5 13H2.5V15.5" /></svg>,
  code: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5 1 9l4 4M13 5l4 4-4 4M11 3 7 15" /></svg>,
  people: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="6" r="3" /><path d="M1 16c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M13 3a3 3 0 0 1 0 6M17 16a6 6 0 0 0-4-5.6" /></svg>,
  chain: () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3baa1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10a3 3 0 0 0 4.24.46l2.12-2.12a3 3 0 0 0-4.24-4.24L7.94 5.24" /><path d="M11 8a3 3 0 0 0-4.24-.46L4.64 9.66a3 3 0 0 0 4.24 4.24l1.18-1.18" /></svg>,
};

export default function SecurityPractices() {
  return (
    <section id="security" className="py-20 px-6 bg-dg-surface">
      <div className="max-w-content mx-auto">
        <p className="section-label">How we operate</p>
        <h2 className="section-heading">Security Practices</h2>
        <p className="section-body mt-3 max-w-2xl">Our ISO 27001:2022-aligned ISMS covers the full lifecycle of information security.<br />
        Below is a high-level overview of key control areas.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRACTICES.map(({ title, body, icon }) => {
            const Icon = ICONS[icon];
            return (
              <div key={title} className="card flex flex-col gap-4">
                <div className="w-10 h-10 bg-dg-muted rounded-lg flex items-center justify-center shrink-0"><Icon /></div>
                <div>
                  <h3 className="text-sm font-semibold text-dg-dark">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
