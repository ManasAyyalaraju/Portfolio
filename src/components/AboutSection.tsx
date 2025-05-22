import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            I'm a Computer Information Systems student at the University of
            Texas at Dallas, passionate about building full-stack web
            applications that solve real-world problems.
          </p>
          <div className="mt-6 space-y-2">
            <p>
              <strong> Education:</strong> BS in Computer Information Systems,
              University of Texas - Dallas (May 2026)
            </p>
            <p>
              <strong> Skills:</strong> Next.js, React, TypeScript, PostgreSQL,
              Python, Jira
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[300px] h-[300px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Fullpic.jpg"
              alt="Manas Ayyalaraju"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
