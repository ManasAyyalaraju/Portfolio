import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-16">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            I like turning data into stories that help people make decisions. I
            build AI-powered tools and full-stack web apps, and I enjoy finding
            patterns in data and presenting them clearly. Most of my work
            involves AI, data, and modern web technologies.
          </p>
          <div className="mt-8 space-y-6">
            <div className="text-gray-900">
              <strong>Education</strong>
              <ul className="mt-3 space-y-4 border-l-2 border-orange-500 pl-4">
                <li>
                  <p className="font-semibold">
                    MS in Business Analytics
                  </p>
                  <p className="text-gray-700">
                    UT Austin, McCombs School of Business
                  </p>
                  <p className="text-sm text-gray-500">May 2027</p>
                </li>
                <li>
                  <p className="font-semibold">
                    BS in Computer Information Systems
                  </p>
                  <p className="text-gray-700">
                    University of Texas at Dallas
                  </p>
                  <p className="text-sm text-gray-500">May 2026</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="border-orange-500 border-2 w-[320px] h-[320px] md:w-[360px] md:h-[360px] relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about.jpg"
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
