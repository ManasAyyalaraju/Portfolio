"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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

  // Function to determine active section based on scroll position
  const getActiveSection = useCallback(() => {
    if (pathname !== "/") {
      // If we're on a project page, highlight experience
      if (pathname.startsWith("/projects/")) {
        return "experience";
      }
      // For other pages, you can add specific logic here
      return "home";
    }

    const sections = ["home", "about", "experience", "contact"];
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        return sections[i];
      }
    }
    return "home";
  }, [pathname]);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getActiveSection());
    };

    // Set initial active section
    setActiveSection(getActiveSection());

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, getActiveSection]);

  // Function to get nav item classes
  const getNavItemClasses = (sectionId: string) => {
    const baseClasses =
      "text-sm font-bold transition-colors tracking-wider cursor-pointer";
    const isActive = activeSection === sectionId;

    if (isActive) {
      return `${baseClasses} text-orange-500`;
    }
    return `${baseClasses} text-gray-700 hover:text-orange-500`;
  };

  return (
    <header className="sticky top-0 z-50 w-screen border-b border-white/20 bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/40">
      <div className="w-screen px-6 py-4">
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
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/", "home")}
              className={getNavItemClasses("home")}
            >
              HOME
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "/#about", "about")}
              className={getNavItemClasses("about")}
            >
              ABOUT
            </Link>
            <Link
              href="/#experience"
              onClick={(e) => handleNavClick(e, "/#experience", "experience")}
              className={getNavItemClasses("experience")}
            >
              EXPERIENCE
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact", "contact")}
              className={getNavItemClasses("contact")}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 rounded-xl px-2 py-1 btn-glass-orange"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 rounded-xl">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, "/", "home")}
                className={getNavItemClasses("home")}
              >
                HOME
              </Link>
              <Link
                href="/#about"
                onClick={(e) => handleNavClick(e, "/#about", "about")}
                className={getNavItemClasses("about")}
              >
                ABOUT
              </Link>
              <Link
                href="/#experience"
                onClick={(e) => handleNavClick(e, "/#experience", "experience")}
                className={getNavItemClasses("experience")}
              >
                EXPERIENCE
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact", "contact")}
                className={getNavItemClasses("contact")}
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
