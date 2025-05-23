"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    sectionId: string | null = null
  ) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    // If we're on the home page and clicking a section link
    if (pathname === "/" && sectionId) {
      scrollToSection(sectionId);
    }
    // If we're not on home page but clicking a section link, go to home first then scroll
    else if (pathname !== "/" && sectionId) {
      router.push("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
    // For regular page navigation (like separate about/contact pages)
    else {
      router.push(href);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-screen bg-white border-b border-gray-100">
      <div className="w-screen px-6 py-6 shadow-lg">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
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
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", "home")}
              className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
            >
              HOME
            </a>
            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, "/#about", "about")}
              className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
            >
              ABOUT
            </a>
            <a
              href="/#experience"
              onClick={(e) => handleNavClick(e, "/#experience", "experience")}
              className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
            >
              EXPERIENCE
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact", "contact")}
              className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
            >
              CONTACT
            </a>
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
              <a
                href="/"
                onClick={(e) => handleNavClick(e, "/", "home")}
                className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
              >
                HOME
              </a>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, "/#about", "about")}
                className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
              >
                ABOUT
              </a>
              <a
                href="/#experience"
                onClick={(e) => handleNavClick(e, "/#experience", "experience")}
                className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
              >
                EXPERIENCE
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact", "contact")}
                className="text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors tracking-wider cursor-pointer"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
