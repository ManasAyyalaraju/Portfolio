"use client";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function HeroSection() {
  const fullName = "MANAS";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let direction: 1 | -1 = 1; // 1 = typing, -1 = deleting
    let pauseTicks = 6; // short initial pause
    const tickMs = 120;

    const interval = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks -= 1;
        return;
      }

      if (direction === 1) {
        i += 1;
        if (i >= fullName.length) {
          i = fullName.length;
          direction = -1;
          pauseTicks = 8; // pause at full text
        }
      } else {
        i -= 1;
        if (i <= 0) {
          i = 0;
          direction = 1;
          pauseTicks = 6; // pause at empty
        }
      }

      setTyped(fullName.slice(0, i));
    }, tickMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        HEY, I AM <span className="text-orange-500 typing-caret">{typed}</span>
      </h1>
      <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
        A Full Stack Developer & Data Analyst skilled in React, Next.js,
        PostgreSQL, and Python — building modern web apps and turning data into
        insights.
      </p>
      <a href="#experience" className="mt-6">
        <button className="px-6 py-3 rounded-xl btn-glass-orange font-semibold">
          View My Work
        </button>
      </a>
      <Link
        href="#about"
        className="absolute bottom-8 animate-bounce text-gray-600 hover:text-orange-500"
      >
        <ChevronDoubleDownIcon className="w-8 h-8" />
        <span className="sr-only">Scroll to About</span>
      </Link>
    </section>
  );
}
