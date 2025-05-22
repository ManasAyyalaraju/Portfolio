"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-900 text-white shadow">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Manas Ayyalaraju</h1>
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-300 ${
                pathname === item.href ? "text-blue-300 underline" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
