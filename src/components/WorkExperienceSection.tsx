import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block"
            >
              <div className="bg-gray-100 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {project.role} · {project.duration} ·{" "}
                          {project.location}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 text-sm bg-orange-100 text-orange-500 px-3 py-1 rounded-full w-fit">
                        {project.technologies.slice(0, 3).join(" · ")}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-orange-500 group-hover:text-orange-600 transition-colors">
                    <span className="text-sm font-medium">View Case Study</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/Manas_Ayyalaraju_Resume.pdf"
            download
            className="inline-block px-6 py-3 rounded-xl btn-glass-orange text-black font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
