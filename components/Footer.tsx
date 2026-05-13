export default function Footer() {
  return (
    <footer className="bg-dg-dark text-gray-500 py-12 px-6">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="mb-1">
              <span className="text-white font-extrabold text-sm tracking-tight">delta</span><br />
              <span className="font-extrabold text-sm tracking-tight" style={{ color: "#72EC41" }}>green</span>
            </div>
            <p className="text-xs mt-2">Energy flexibility platform — Copilot · Proteus · DeltaLink</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <a href="https://deltagreen.energy" className="hover:text-white transition-colors">deltagreen.energy</a>
            <a href="https://deltagreen.energy/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://deltagreen.energy/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="mailto:security@deltagreen.energy" className="hover:text-white transition-colors">security@deltagreen.energy</a>
          </nav>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Delta Green a.s. All rights reserved.</p>
          <p className="text-gray-600">ISO 27001:2022 certified · GDPR compliant · EEA-hosted infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
