import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            I love turning data into stories that drive smart decisions. Whether
            it's building AI-powered solutions or developing full-stack
            applications, I get excited about finding patterns and presenting
            them in clear, actionable ways. I enjoy solving problems with AI,
            data, and modern web technologies, bringing intelligent solutions to
            life.
          </p>
          <div className="mt-8 space-y-3">
            <p className="text-gray-900">
              <strong>Education:</strong> BS in Computer Information Systems,
              University of Texas at Dallas (May 2026)
            </p>
            <p className="text-gray-900">
              <strong>Skills:</strong> Python, Machine Learning, OpenAI/LLMs,
              FastAPI, SQL, Next.js, TypeScript, PostgreSQL
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="border-orange-500 border-2 w-[320px] h-[320px] md:w-[360px] md:h-[360px] relative rounded-2xl overflow-hidden shadow-xl">
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
