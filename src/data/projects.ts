export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  technologies: string[];
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  keyFeatures: string[];
  implementation: { title: string; detail: string }[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  image: string;
  imageAlt: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "refactr",
    title: "Refactr",
    company: "Personal Project",
    role: "Full-Stack AI Engineer",
    duration: "Jan 2026 – Present",
    location: "Remote",
    technologies: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "OpenAI GPT-4o-mini", "Supabase", "Chrome Extension", "LaTeX"],
    shortDescription:
      "Refactr rewrites your resume to fit a specific job in seconds, right on the job posting or in the web app. It matches the job's keywords without ever claiming a skill you don't have. Live at refactrapp.com.",
    overview:
      "Refactr helps job seekers send a resume that fits each role. You upload your resume once, then tailor it to any job description or turn it into a clean PDF that applicant tracking systems can read. It works in the web app and as a Chrome extension on LinkedIn, Indeed, Glassdoor, and Handshake, so you can tailor a resume without leaving the posting.",
    challenge:
      "Job seekers spend hours editing a resume for every application, and they still miss keywords that recruiters' screening software looks for. AI tools make this faster but add a risk: they can invent skills or experience you don't have, which can cost you an interview. I wanted a tool that was fast, worked where people already apply, and could be trusted to stick to the truth.",
    solution:
      "Refactr reads your resume and the job description, rewrites your bullets to match what the employer asks for, and then checks every rewritten bullet against your original resume. Any bullet that adds a skill you don't have gets corrected or reverted. Your companies, titles, dates, and locations are locked and never change. One sign-in works in both the web app and the extension.",
    results: [
      "Improved keyword recall by 40%, so resumes pick up more of what employers look for",
      "Improved ATS match alignment by 30 to 35% on test job descriptions",
      "Tailors a resume in seconds, directly on LinkedIn, Indeed, Glassdoor, and Handshake postings",
      "Never claims a skill that isn't on your resume, because every rewritten bullet is checked",
      "Keeps your company, title, dates, and locations exactly as written",
      "Live at refactrapp.com with a web app and a Chrome extension",
    ],
    keyFeatures: [
      "Tailor a resume to any job in seconds",
      "Works right on job postings through a Chrome extension",
      "Checks every rewritten bullet so no skill is invented",
      "Keeps companies, titles, dates, and locations unchanged",
      "Reformat mode: a clean, ATS-friendly PDF with your wording untouched",
      "Two resume templates, including one built for technical skills",
      "Dashboard with your current resume, history, and application stats",
    ],
    implementation: [
      { title: "Three loosely coupled pieces", detail: "A Next.js 16 and React 19 web app, a Manifest V3 Chrome extension built with esbuild, and a stateless FastAPI backend. The web app and extension talk to Supabase directly for auth and storage, with row-level security tied to auth.uid(). The backend never sees a service-role key and only parses, tailors, reformats, and renders PDFs." },
      { title: "Parse and Classify", detail: "The resume and job description are parsed at the same time with OpenAI GPT-4o-mini structured-output calls bound to Pydantic schemas. The same call classifies the job's industry, so later steps can use guidance written for that field." },
      { title: "Generate", detail: "Bullets are rewritten with prompt guidance specific to the job's industry, so the emphasis matches what that field looks for." },
      { title: "Verify and Lock", detail: "Every rewritten bullet is checked against the job's required skills, and any bullet that adds a skill missing from the original resume is rewritten or reverted. Company, title, dates, and locations are locked in code, so the model can't change them." },
      { title: "PDF output and observability", detail: "Resumes are rendered to PDF with LaTeX in two ATS-friendly templates. Each pipeline stage is timed and returned in an X-Pipeline-Timings header." },
      { title: "Deployment", detail: "The backend runs in Docker on Render and the frontend on Vercel with CI/CD automation, on the custom domain refactrapp.com." },
    ],
    techStack: {
      frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
      backend: ["Python 3.11+", "FastAPI", "OpenAI GPT-4o-mini (structured outputs)", "Pydantic", "LaTeX (pdflatex)"],
      database: ["Supabase (Postgres)", "Supabase Auth", "Supabase Storage (RLS)"],
      tools: ["Chrome Extension (Manifest V3, esbuild)", "Docker", "Render.com", "Vercel", "Git/GitHub", "CI/CD Automation"],
    },
    image: "/projects/refactr.svg",
    imageAlt: "Illustration of a resume moving through the Refactr five-stage pipeline next to the Chrome extension",
    liveUrl: "https://refactrapp.com",
    githubUrl: "https://github.com/ManasAyyalaraju/refactr",
  },
  {
    id: "sudur-capital",
    title: "Real Estate Investment Portal",
    company: "Sudur Capital",
    role: "Full-Stack Web Development Intern",
    duration: "Oct 2025 – Jan 2026",
    location: "Frisco, TX",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Jira"],
    shortDescription:
      "A portal for Sudur Capital, a Frisco land development firm, that lets investors find and fund projects and lets sponsors show their developments to attract funding. We delivered the first version in 3 months.",
    overview:
      "Sudur Capital is a Frisco, TX firm that acquires and develops land for residential and mixed-use communities. As a full-stack web development intern, I helped build a portal that connects investors with land development projects and gives project sponsors a place to present their work.",
    challenge:
      "Investors had no single place to find and compare land development opportunities, and sponsors needed a clear way to present their projects and attract funding. The first version also had to launch on a tight timeline.",
    solution:
      "We built a website where investors can sign up, review opportunities, and invest in projects, and where sponsors can show their land developments to the people who might fund them. I kept the team on schedule by writing and managing more than 20 user stories in Jira.",
    results: [
      "Delivered the first version of the portal in 3 months",
      "Gave investors one place to register, evaluate opportunities, and invest",
      "Gave sponsors a way to showcase land developments and attract funding",
      "Kept the project on schedule with 20+ user stories managed in Jira",
      "Made the site easier to use on any device, which improved engagement and accessibility",
    ],
    keyFeatures: [
      "Investor sign-up and onboarding",
      "Clear project details for evaluating opportunities",
      "Investing in projects through the portal",
      "Sponsor pages for showcasing land developments",
      "A layout that works on phones, tablets, and desktops",
    ],
    implementation: [
      { title: "Full-stack build", detail: "Designed and implemented the platform with Next.js, TypeScript, HTML5, and CSS on the front end and PostgreSQL for the data, so investor and project information is stored and queried in one place." },
      { title: "Investor and sponsor flows", detail: "Investors register, evaluate opportunities, and invest in projects. Sponsors have pages to showcase land developments and attract funding." },
      { title: "Responsive layout", detail: "The interface adapts across phones, tablets, and desktops, which improved engagement and accessibility." },
      { title: "Agile delivery", detail: "I wrote and managed 20+ user stories in Jira, which streamlined workflows and kept the team on pace for the 3-month MVP." },
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "HTML5", "CSS"],
      backend: ["Next.js", "TypeScript"],
      database: ["PostgreSQL"],
      tools: ["Jira"],
    },
    image: "/projects/sudur.svg",
    imageAlt: "Illustration of a land parcel map beside an investor portal with project cards and a funding progress bar",
  },
  {
    id: "personal-finance-health-predictor",
    title: "Personal Finance Health Predictor",
    company: "Personal Project",
    role: "Machine Learning Engineer",
    duration: "Aug 2025 – Nov 2025",
    location: "Remote",
    technologies: ["Python", "XGBoost", "LightGBM", "Scikit-learn", "FastAPI"],
    shortDescription:
      "A project that helps a lender spot risky loans, catch fraud, and group customers by behavior. It reaches 85.7% recall on fraud and cuts manual loan review effort by 30%.",
    overview:
      "This project looks at 285,000+ financial records to answer three business questions: which borrowers are likely to be a credit risk, which transactions are fraud, and what kinds of customers a financial company serves. The goal was to turn raw data into predictions a lender or marketing team can act on.",
    challenge:
      "Fraud is rare, so it's easy to miss. Reviewing loans by hand takes time, and marketing campaigns often go to everyone instead of the right customers. The results also had to be usable by other systems, not just sit in a notebook.",
    solution:
      "I built models that score credit risk, flag likely fraud, and sort customers into groups, then made them available through an API so other tools can use the predictions. I also made 40+ charts to explain what drives the results in plain terms.",
    results: [
      "Caught 85.7% of fraud cases in the fraud detection model",
      "Reduced manual loan review effort by 30%",
      "Improved marketing conversion by 15 to 20% by identifying 4 distinct customer personas",
      "Analyzed more than 285,000 financial records across three datasets",
      "Explained results with 40+ visualizations that non-technical teams can read",
      "Delivered 3 prediction endpoints that other tools can call",
    ],
    keyFeatures: [
      "Credit risk prediction to flag risky borrowers",
      "Fraud detection that catches rare, costly events",
      "Customer personas for more personalized recommendations",
      "40+ charts that explain what drives each prediction",
      "A ready-to-use API for loan review and marketing teams",
    ],
    implementation: [
      { title: "Three datasets, three problems", detail: "Lending Club data for credit risk, a credit card fraud dataset for fraud detection, and German Credit data as an additional credit check, together over 285,000 records." },
      { title: "Credit risk", detail: "Compared logistic regression, random forest, XGBoost, and LightGBM to find the model that best separates safe borrowers from risky ones." },
      { title: "Fraud detection", detail: "Fraud is rare, so the data is heavily imbalanced. I balanced it with SMOTE and trained XGBoost and Isolation Forest, reaching 85.7% recall." },
      { title: "Customer segmentation", detail: "Used PCA with K-means, hierarchical clustering, and DBSCAN to find 4 customer personas." },
      { title: "Features and evaluation", detail: "Engineered 26+ features and evaluated models with 40+ visualizations, including ROC curves, confusion matrices, and feature plots." },
      { title: "Serving predictions", detail: "Exposed the models through a FastAPI service with 3 prediction endpoints and Pydantic request validation." },
    ],
    techStack: {
      frontend: ["Jupyter Notebooks", "Matplotlib", "Seaborn"],
      backend: ["Python", "FastAPI", "Pydantic"],
      database: ["Lending Club", "Credit Card Fraud", "German Credit"],
      tools: ["Scikit-learn", "XGBoost", "LightGBM", "Imbalanced-learn", "Pandas", "NumPy", "Git/GitHub"],
    },
    image: "/projects/finance.svg",
    imageAlt: "Illustration of an ROC curve, four customer clusters, and 285K+ records and 85.7% fraud recall stat tiles",
    githubUrl: "https://github.com/ManasAyyalaraju/personal-finance-health-predictor",
  },
  {
    id: "ibm-case-competition",
    title: "IBM Case Competition",
    company: "IBM (Client)",
    role: "AI & Data Analytics Consultant",
    duration: "Fall 2024",
    location: "Dallas–Fort Worth, TX",
    technologies: ["Watson AI", "Geospatial Data", "APIs", "Predictive Modeling"],
    shortDescription:
      "A team case competition with IBM as the client. We helped identify where people lack access to healthy food across the DFW region, improved detection accuracy by 25%, and presented our recommendations to IBM judges.",
    overview:
      "IBM was the client for this case competition on food insecurity in the Dallas–Fort Worth area. As an AI & Data Analytics Consultant on a cross-functional team, I helped find the communities that need food access the most and recommend how local governments could help.",
    challenge:
      "Food deserts, areas with little access to healthy food, are hard to pinpoint, and local governments need accurate information to decide where to send help.",
    solution:
      "Our team used IBM Watson AI to analyze location and API data to find underserved neighborhoods across DFW. We turned that into a model that helps local governments decide where to focus resources, then presented our findings and recommendations to IBM judges.",
    results: [
      "Improved food desert detection accuracy by 25%",
      "Identified underserved communities across the DFW region more precisely",
      "Gave local governments a data-driven way to decide where to focus resources",
      "Presented findings and recommendations on reducing food insecurity to IBM judges",
    ],
    keyFeatures: [
      "Finds neighborhoods with limited access to healthy food",
      "Recommendations that help local governments allocate resources",
      "Built and presented with a cross-functional team",
      "Final presentation to IBM judges",
    ],
    implementation: [
      { title: "Data", detail: "Combined geographical data with data pulled from APIs to map food access across the DFW region." },
      { title: "Analysis", detail: "Used IBM Watson AI to analyze that data and flag underserved areas, which improved detection accuracy by 25%." },
      { title: "Predictive model", detail: "Built, with a cross-functional team, a predictive model that points local governments to where resources are needed most." },
      { title: "Presentation", detail: "Packaged the insights, analytics, and recommendations into a presentation for IBM judges." },
    ],
    techStack: {
      frontend: [],
      backend: ["Watson AI", "Predictive Modeling"],
      database: ["Geographical Data", "API Data"],
      tools: ["Data Analytics"],
    },
    image: "/projects/ibm-case-comp.svg",
    imageAlt: "Illustration of a DFW food desert map with low-access areas highlighted and a Watson AI panel",
  },
  {
    id: "nba-schedule-analysis",
    title: "NBA Schedule Analysis",
    company: "Personal Project",
    role: "Data Science Analyst",
    duration: "May 2024 – Jul 2024",
    location: "Remote",
    technologies: ["Python", "pandas", "Jupyter", "Matplotlib", "Seaborn"],
    shortDescription:
      "An analysis of 1,200+ NBA games across multiple seasons that shows how rest days and back-to-back games vary through the schedule, with 10+ charts and models that make the patterns easy to see.",
    overview:
      "This project looks at how the NBA schedule affects teams: how many games they play in a stretch, how much rest they get, and how often they play on back-to-back nights. The goal was to turn a long schedule into clear takeaways.",
    challenge:
      "An NBA schedule is packed with travel and short turnarounds, and the pattern is hard to see in a spreadsheet. The analysis needed to be clear enough for anyone to follow and easy to repeat for future seasons.",
    solution:
      "I analyzed 1,200+ games across multiple seasons and built 10+ charts and models showing how game density, rest days, and back-to-backs vary. I documented each step so the work can be repeated and checked.",
    results: [
      "Analyzed 1,200+ NBA games across multiple seasons",
      "Turned the schedule into 10+ clear charts and models",
      "Made the analysis 30% more efficient and easier to repeat through organized, well-documented work",
      "Presented the results in a clear, professional format",
    ],
    keyFeatures: [
      "Shows how often teams play back-to-back games",
      "Compares rest days and game density across seasons",
      "10+ charts that make patterns easy to see",
      "Documented so it can be repeated for future seasons",
    ],
    implementation: [
      { title: "Data processing", detail: "Loaded and cleaned 1,200+ NBA schedule records with Python and pandas in Jupyter Notebook." },
      { title: "Schedule metrics", detail: "Measured game density, rest days, and back-to-back sequences across multiple seasons." },
      { title: "Modeling and charts", detail: "Built 10+ statistical models and visualizations with matplotlib and seaborn." },
      { title: "Reproducibility", detail: "Followed structured coding practices and documented each step, which improved workflow efficiency and reproducibility by 30%." },
    ],
    techStack: {
      frontend: ["Jupyter Notebook", "Matplotlib", "Seaborn"],
      backend: ["Python", "pandas"],
      database: [],
      tools: ["Jupyter"],
    },
    image: "/projects/nba.svg",
    imageAlt: "Illustration of a season calendar heatmap with back-to-back games highlighted and a rest-day bar chart",
  },
  {
    id: "maxwell-iot",
    title: "IoT Network & Performance",
    company: "Maxwell IoT Technologies",
    role: "IoT Systems & Performance Intern",
    duration: "Apr 2022 – Jun 2022",
    location: "Plano, TX",
    technologies: ["LoRaWAN", "IoT", "Mobile App", "Performance Analysis"],
    shortDescription:
      "An internship at a company that builds wireless networks for connected devices. I helped grow the network by 20%, raise device productivity by 15%, and increase active devices by 25%.",
    overview:
      "Maxwell IoT Technologies builds wireless network infrastructure so connected sensors and devices can communicate over long distances. As an IoT Systems & Performance Intern, I worked on growing the network, improving how well devices perform, and solving customer problems.",
    challenge:
      "A growing network of connected devices has to keep expanding, keep devices working well, and fix customer problems quickly.",
    solution:
      "I built a mobile application and new ways to connect devices, which helped the network grow. I used LoRaWAN, a long-range wireless technology, to make the network more efficient. I also tested the system, troubleshot issues, helped resolve customer problems, and documented each fix.",
    results: [
      "Grew the IoT product network by 20%",
      "Boosted device productivity by 15%",
      "Increased the number of active devices by 25%",
      "Improved customer satisfaction and system performance by documenting solutions",
    ],
    keyFeatures: [
      "A mobile app that helped the network grow",
      "A more efficient long-range wireless network",
      "Performance analysis to keep devices running well",
      "Testing and troubleshooting to keep more devices active",
      "Documented fixes for customer issues",
    ],
    implementation: [
      { title: "Mobile application", detail: "Developed a mobile application and added new connectivity strategies, which improved scalability and reliability and grew the network by 20%." },
      { title: "LoRaWAN network", detail: "Applied LoRaWAN, a long-range, low-power wireless protocol, to build a more efficient network and raise device productivity by 15%." },
      { title: "Testing and troubleshooting", detail: "Supported system testing, troubleshooting, and client issue resolution, which increased the number of active devices by 25%." },
      { title: "Performance analysis", detail: "Analyzed and optimized IoT performance, and documented each solution to improve customer satisfaction and system performance." },
    ],
    techStack: {
      frontend: ["Mobile Application"],
      backend: ["LoRaWAN"],
      database: [],
      tools: ["IoT Performance Analysis", "System Testing"],
    },
    image: "/projects/maxwell-iot.svg",
    imageAlt: "Illustration of a LoRaWAN gateway connecting sensor nodes to a mobile app dashboard",
  },
];
