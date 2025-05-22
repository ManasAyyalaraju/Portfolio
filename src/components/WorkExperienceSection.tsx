export default function WorkExperienceSection() {
  return (
    <section id="experience" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        {/* Sudur Capital */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8 transition hover:shadow-lg">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                Sudur Capital
              </h3>
              <p className="text-sm text-gray-600">
                Intern · Nov 2024 – Present · Frisco, TX
              </p>
            </div>
            <div className="mt-2 md:mt-0 text-sm bg-orange-100 text-orange-500 px-3 py-1 rounded-full w-fit">
              Next.js · TypeScript · PostgreSQL
            </div>
          </div>

          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              Built a real estate investment portal connecting investors with
              land development sponsors.
            </li>
            <li>
              Collaborated with a 7-member dev team to launch an MVP in 3
              months.
            </li>
            <li>
              Designed a scalable PostgreSQL database for secure, efficient
              transactions.
            </li>
            <li>
              Wrote and tracked 20+ user stories in Jira to streamline agile
              workflows.
            </li>
            <li>
              Improved platform UX/UI using responsive design with HTML5, CSS,
              and Next.js.
            </li>
          </ul>
        </div>

        {/* IBM Case Competition */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md transition hover:shadow-lg">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                IBM Case Competition
              </h3>
              <p className="text-sm text-gray-600">Participant · Fall 2024</p>
            </div>
            <div className="mt-2 md:mt-0 text-sm bg-orange-100 text-orange-500 px-3 py-1 rounded-full w-fit">
              Watson AI · Python · Data Visualization
            </div>
          </div>

          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              Used IBM Watson AI to identify food deserts by analyzing geo-data,
              increasing detection accuracy by 25%.
            </li>
            <li>
              Designed a predictive model to optimize food access in DFW
              communities.
            </li>
            <li>
              Presented data-driven strategies to IBM judges and provided
              recommendations to local governments.
            </li>
            <li>
              Integrated API data streams for model training and ensured high
              data quality.
            </li>
          </ul>
        </div>
        <div className="text-center mt-12">
          <a
            href="\Manas_Ayyalaraju_Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded shadow transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
