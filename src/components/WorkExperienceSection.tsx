import Image from "next/image";
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
              className="group block h-full focus:outline-none"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-300 group-hover:shadow-xl group-focus-visible:ring-2 group-focus-visible:ring-orange-500">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow backdrop-blur">
                    {project.company}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-orange-600">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-orange-500">
                    {project.role}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {project.duration} · {project.location}
                  </p>

                  <p className="mt-4 line-clamp-4 leading-relaxed text-gray-700">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center pt-5 text-orange-500 transition-colors group-hover:text-orange-600">
                    <span className="text-sm font-medium">View Case Study</span>
                    <svg
                      className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
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
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/Manas_Ayyalaraju_Resume (2026).pdf"
            download="Manas_Ayyalaraju_Resume (2026).pdf"
            className="inline-block px-6 py-3 rounded-xl btn-glass-orange text-black font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
