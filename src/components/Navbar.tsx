"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/profile.jpg"
              alt="Manas Ayyalaraju"
              width={44}
              height={44}
              className="rounded-full"
            />
            <Link href="/" className="hover:text-orange-500 transition-colors">
              <span className="font-bold text-lg text-gray-900 tracking-wide">
                MANAS AYYALARAJU
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              href="/experience"
              className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
            >
              EXPERIENCE
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
              >
                ABOUT
              </Link>
              <Link
                href="/experience"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
              >
                EXPERIENCE
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors tracking-wider"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
