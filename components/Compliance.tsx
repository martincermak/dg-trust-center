export default function Certifications() {
  const starPath = "M -4.103 -19.32 L -7.544 -8.57 -19.983 -8.287 L -32.423 -8.005 -22.733 -0.903 C -17.404 3.004 -13.044 6.726 -13.044 7.369 C -13.044 8.013 -14.584 13.238 -16.466 18.981 C -18.347 24.722 -19.81 29.498 -19.716 29.59 C -19.621 29.683 -15.28 26.648 -10.069 22.845 C -4.858 19.042 -0.325 15.93 0.004 15.93 C 0.495 15.93 14.407 25.781 18.625 29.117 C 19.831 30.07 19.626 29.255 15.056 14.93 C 13.915 11.356 12.976 7.928 12.969 7.315 C 12.962 6.701 17.336 2.989 22.689 -0.935 L 32.423 -8.07 19.897 -8.07 L 7.37 -8.07 4.001 -19.07 C 2.148 -25.12 0.341 -30.07 -0.015 -30.07 C -0.371 -30.07 -2.21 -25.232 -4.103 -19.32";

  return (
    <section id="compliance" className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="section-label">How we align</p>
        <h2 className="section-heading">Compliance: Certifications &amp; Standards</h2>
        <p className="section-body mt-3 max-w-2xl">
          Independent third-party audits and certifications validate our security
          programme against internationally recognised frameworks.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card border-l-4 border-l-dg-lime">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="badge">Certified</span>
                <h3 className="text-base font-semibold text-dg-dark mt-3">ISO 27001:2022</h3>
              </div>
              <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 764 513" version="1.1">
                  <g fill="none" stroke="black" stroke-width="3"
                     transform="translate(383 214) scale(1.3) translate(-383 -214)">
                    <circle cx="383" cy="214" r="130" />
                    <ellipse cx="383" cy="214" rx="130" ry="22" />
                    <ellipse cx="383" cy="149" rx="113" ry="18" />
                    <ellipse cx="383" cy="279" rx="113" ry="18" />
                    <ellipse cx="383" cy="101" rx="65" ry="10" />
                    <ellipse cx="383" cy="327" rx="65" ry="10" />
                    <line x1="383" y1="84" x2="383" y2="344" />
                    <ellipse cx="383" cy="214" rx="65" ry="130" />
                    <ellipse cx="383" cy="214" rx="113" ry="130" />
                  </g>
                  <rect x="158" y="104" width="450" height="200" fill="#eff6ff" />
                  <text
                    x="383" y="214"
                    text-anchor="middle" dominant-baseline="central"
                    font-weight="1000" font-size="250" fontFamily="Courier New"
                  >ISO</text>
                  <text
                    x="379" y="463"
                    text-anchor="middle" dominant-baseline="central"
                    font-weight="900" font-size="120" letter-spacing="-2"
                  >27001</text>
                </svg>
              </div>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex gap-2"><dt className="text-gray-400 shrink-0 w-28">Scope</dt><dd className="text-gray-700 font-medium">Development, operation, and maintenance of a software platform for flexibility aggregation and energy asset management, including firmware development for IoT devices.</dd></div>
              <div className="flex gap-2"><dt className="text-gray-400 shrink-0 w-28">Certifying body</dt><dd className="text-gray-700 font-medium">TAYLLORCOX GCS</dd></div>
              <div className="flex gap-2"><dt className="text-gray-400 shrink-0 w-28">Certificate no.</dt><dd className="text-gray-700 font-medium">2604301360</dd></div>
              <div className="flex gap-2"><dt className="text-gray-400 shrink-0 w-28">Valid until</dt><dd className="text-gray-700 font-medium">April 29, 2029</dd></div>
            </dl>
          </div>

          {/* GDPR */}
          <div className="card border-l-4 border-l-dg-lime">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="badge">Compliant</span>
                <h3 className="text-base font-semibold text-dg-dark mt-3">GDPR</h3>
              </div>
              <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 800 800" version="1.1">
                  <g fill="black" fill-rule="evenodd" stroke="black" stroke-width="10" stroke-linejoin="round">
                    <text
                      x="400"
                      y="400"
                      text-anchor="middle"
                      dominant-baseline="central"
                      font-weight="900"
                      font-size="150"
                      stroke="none"
                    >
                      GDPR
                    </text>
                    {Array.from({ length: 12 }).map((_, i) => {
                      if (i === 3 || i === 9) return null;
                      const angle = (i * 30 - 90) * (Math.PI / 180);
                      const cx = 400 + 215 * Math.cos(angle);
                      const cy = 400 + 215 * Math.sin(angle);
                      return (
                        <path
                          key={i}
                          d={starPath}
                          transform={`translate(${cx} ${cy})`}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Delta Green processes personal data lawfully under GDPR.
              <br /><br />We maintain a Records of Processing Activities
              register, a Data Subject Requests Log, an up-to-date list of
              sub-processors, and other GDPR-required records.
              <br /><br />These records, along with details of our security and
              processing practices, are available to current and prospective
              customers on request.
            </p>
          </div>
          <div className="card border-l-4 border-l-gray-300">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
                  Not in scope
                </span>
                <h3 className="text-base font-semibold text-dg-dark mt-3">NZKB / NIS2</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Delta Green is classified as an SME under the Czech cybersecurity law administered by NÚKiB and is therefore outside the scope of NIS2 and its regulated-entity obligations. <br /><br />
              Despite not being a regulated entity, our security programme is voluntarily aligned with NZKB/NIS2 requirements as part of our ISO 27001 implementation, and we monitor regulatory changes on an ongoing basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
