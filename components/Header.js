"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="logo-icon">💻</span> Code Roadmap
      </Link>
      <nav>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "nav-link active" : "nav-link"}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}