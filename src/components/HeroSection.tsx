import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-[url('/pattern.svg')] bg-cover">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">
        HEY, I AM <span className="text-orange-500">MANAS</span>
      </h1>
      <p className="text-gray-600 max-w-xl mt-4 text-lg">
        A Full Stack Developer building modern Web Apps with React, Next.js, and
        PostgreSQL — solving real-world problems through scalable design.
      </p>
      <Link href="/experience">
        <button className="mt-8 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded shadow">
          EXPERIENCE
        </button>
      </Link>
    </section>
  );
}
