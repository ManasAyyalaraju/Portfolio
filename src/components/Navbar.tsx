"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Manas Ayyalaraju"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-orange-500">
            <span className="font-bold text-sm sm:text-base text-gray-900">
              Manas Ayyalaraju
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex gap-6 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-orange-500">
            HOME
          </Link>
          <Link href="/about" className="hover:text-orange-500">
            ABOUT
          </Link>
          <Link href="/experience" className="hover:text-orange-500">
            EXPERIENCE
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden px-6 pb-4 space-y-2 text-sm font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            ABOUT
          </Link>
          <Link
            href="/experience"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            EXPERIENCE
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
