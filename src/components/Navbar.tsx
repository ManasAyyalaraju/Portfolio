"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = ["home", "about", "experience", "contact"];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            width={50}
            height={50}
            className="rounded-full "
            alt="Manas"
          />
          <span className="font-semibold tracking-wide">Manas Ayyalaraju</span>
        </div>
        <div className="space-x-6 text-sm uppercase font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className={`${
                path === (item === "home" ? "/" : `/${item}`)
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
