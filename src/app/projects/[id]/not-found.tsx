import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/#experience"
          className="inline-flex items-center px-6 py-3 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded shadow transition"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Experience
        </Link>
      </div>
    </div>
  );
}
