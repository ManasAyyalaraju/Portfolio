export default function AboutSection() {
  return (
    <section id="about" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a Computer Information Systems student at the University of
            Texas at Dallas, passionate about building full-stack web
            applications that solve real-world problems. I enjoy working with
            technologies like Next.js, TypeScript, and PostgreSQL.
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

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img
            src="Fullpic.jpg"
            alt="Manas Ayyalaraju"
            className="rounded-xl shadow-lg w-72 h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
