export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-100">
      <nav className="container-padded h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">905 Detailing</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <li><a href="#product" className="hover:text-black">Product</a></li>
          <li><a href="#resources" className="hover:text-black">Resources</a></li>
          <li><a href="#community" className="hover:text-black">Community</a></li>
          <li>
            <button className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 hover:shadow-soft transition">
              Option
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
