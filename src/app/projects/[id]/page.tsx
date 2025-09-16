import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#experience"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Experience
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-orange-500 font-semibold">
                {project.company}
              </p>
              <p className="text-gray-600 mt-2">
                {project.role} · {project.duration} · {project.location}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-orange-100 text-orange-500 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl btn-glass-orange text-black font-semibold transition"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl btn-glass-orange text-black font-semibold transition"
              >
                <CommandLineIcon className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.overview}
          </p>
        </section>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </section>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Results & Impact
          </h2>
          <div className="space-y-4">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
              >
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
              <div className="space-y-2">
                {project.techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="block text-sm text-gray-700 bg-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
              <div className="space-y-2">
                {project.techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className="block text-sm text-gray-700 bg-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Database</h3>
              <div className="space-y-2">
                {project.techStack.database.map((tech) => (
                  <span
                    key={tech}
                    className="block text-sm text-gray-700 bg-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Tools</h3>
              <div className="space-y-2">
                {project.techStack.tools.map((tech) => (
                  <span
                    key={tech}
                    className="block text-sm text-gray-700 bg-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Experience */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link
            href="/#experience"
            className="inline-flex items-center px-6 py-3 rounded-xl btn-glass-orange text-black font-semibold transition"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
