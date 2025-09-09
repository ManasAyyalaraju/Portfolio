import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        HEY, I AM <span className="text-orange-500">MANAS</span>
      </h1>
      <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
        A Full Stack Developer & Data Analyst skilled in React, Next.js,
        PostgreSQL, and Python — building modern web apps and turning data into
        insights.
      </p>
      <a href="#experience" className="mt-6">
        <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded shadow">
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
