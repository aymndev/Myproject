export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <strong>MyCompany</strong>
          <div>Building modern web experiences • 2026</div>
        </div>

        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
