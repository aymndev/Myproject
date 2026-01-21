"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname() || "/";

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white/5 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* left: logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 no-underline text-inherit">
            <img src="/modern-abstract-fire-swirl-logo-design_1262165-3572-removebg-preview.png" alt="logo" width={40} height={40} />
            <span className="font-semibold text-lg">MyCompany</span>
          </Link>
        </div>

        {/* center: navigation rendered without ul/li */}
        <nav className="justify-self-center" aria-label="Primary navigation">
          <div className="flex items-center gap-6 text-sm text-slate-300">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition px-2 py-1 rounded-md ${active ? "text-slate-100 font-semibold" : "hover:text-slate-100"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* right: actions */}
        <div className="flex items-center justify-end gap-4">
          <Link href="/login" className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-300/10 text-slate-200 rounded-md hover:bg-slate-700/40 transition">Log in</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
