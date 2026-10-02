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
      "Refactr tailors your resume to a job in seconds, either in the web app or directly on a LinkedIn, Indeed, Glassdoor, or Handshake posting through a Chrome extension. A verification step checks every rewritten bullet so the model never claims a skill that isn't on your resume. Live at refactrapp.com.",
    overview:
      "Refactr has three parts: a Next.js web app, a Manifest V3 Chrome extension, and a stateless FastAPI backend. You upload a resume once, then either tailor it to a job description or reformat it into a clean, ATS-friendly PDF. Both the web app and the extension share the same Supabase auth and storage, so one sign-in covers both. Tailoring runs in five stages (Parse, Classify, Generate, Verify, and Lock). Each stage does one job, which makes it easy to test.",
    challenge:
      "Job seekers spend hours editing a resume for every application, and they still miss keywords that ATS systems look for. AI resume tools add a second problem: a model can quietly invent skills or experience the candidate doesn't have. I wanted a tool that tailors a resume in seconds, works on the job boards people already use, and never fabricates anything.",
    solution:
      "The web app and the Chrome extension talk to Supabase directly for auth and storage, protected by row-level security tied to auth.uid(). The FastAPI backend is stateless. It never holds a service-role key and only handles parsing, tailoring, reformatting, and PDF rendering. For tailoring, the backend parses the resume and the job description at the same time with OpenAI structured-output calls bound to Pydantic schemas, and classifies the job's industry in the same call. It then rewrites bullets using guidance specific to that industry. The Verify stage checks each bullet against the job's required skills and rewrites or reverts any bullet that adds a skill missing from the original resume. The Lock stage keeps company, title, dates, and locations fixed in code. Each stage is timed and reported in an X-Pipeline-Timings header. The frontend runs on Vercel and the backend on Render.",
    results: [
      "Built a Chrome extension that detects job postings on LinkedIn, Indeed, Glassdoor, and Handshake and tailors a saved resume without leaving the tab",
      "Designed a five-stage pipeline (Parse, Classify, Generate, Verify, Lock) that catches and corrects any skill the AI adds that isn't on the candidate's resume",
      "Put auth and storage for the web app and extension on Supabase with row-level security, so one sign-in works in both",
      "Kept the backend stateless and free of credentials, so an auth or storage outage doesn't affect the tailoring pipeline",
      "Built two ATS-friendly resume templates (standard and Technical Skills) with LaTeX PDF rendering",
      "Deployed to refactrapp.com, with the frontend on Vercel and the backend on Render",
      "Improved keyword recall by 40% across the industries the classifier detects, and ATS match alignment by 30 to 35% on test job descriptions",
    ],
    keyFeatures: [
      "Chrome extension (Manifest V3) that appears on job postings and tailors a saved resume in place",
      "One Supabase sign-in for both the web app and the extension",
      "Five-stage pipeline: Parse, Classify, Generate, Verify, Lock",
      "Verification step that checks each bullet against the job's required skills and reverts any invented skill",
      "Locked fields: company, title, dates, and locations are enforced in code, so the model can't rewrite them",
      "Reformat mode that outputs an ATS-friendly PDF and keeps bullets word for word",
      "Two resume templates, including a Technical Skills layout with grouped skill sections",
      "Dashboard with your current resume, resume history, and job application stats",
      "Per-request pipeline timings in an X-Pipeline-Timings response header",
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
      "I built a responsive full-stack portal for Sudur Capital, a Frisco land development firm. Investors register, evaluate opportunities, and invest in projects, and sponsors showcase their land developments to attract funding. We delivered the MVP in 3 months.",
    overview:
      "Sudur Capital is a Frisco, TX firm that acquires, entitles, and develops land for residential and mixed-use communities. As a full-stack web development intern, I helped design and build an investment portal that connects investors with land development projects and gives sponsors a place to present them.",
    challenge:
      "Investors needed one place to find and evaluate land development opportunities, and sponsors needed a clear way to show their projects and attract funding. The MVP also had to ship on a tight timeline.",
    solution:
      "I designed and built the platform with Next.js, TypeScript, HTML5, CSS, and PostgreSQL. Investors can register, evaluate opportunities, and invest in projects. Sponsors can showcase land developments. To keep delivery on schedule, I wrote and managed more than 20 user stories in Jira.",
    results: [
      "Delivered the portal's MVP within 3 months",
      "Wrote and managed 20+ user stories in Jira, which tightened workflows and collaboration",
      "Launched a portal where investors register, evaluate opportunities, and invest in projects",
      "Gave sponsors a way to showcase land developments and attract funding",
      "Improved user engagement and accessibility with a responsive design",
    ],
    keyFeatures: [
      "Investor registration and onboarding",
      "Opportunity evaluation for land development projects",
      "Investing in projects through the portal",
      "Sponsor tools for showcasing land developments and attracting funding",
      "Responsive layout across devices",
      "Agile delivery tracked with Jira user stories",
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
      "A machine learning project that predicts credit risk, detects fraud, and segments customers across 285,000+ financial records. The fraud model reaches 85.7% recall using XGBoost and SMOTE.",
    overview:
      "This project takes raw financial data through exploration, feature engineering, modeling, and deployment. It covers credit risk prediction, fraud detection, and customer segmentation, using three datasets (Lending Club, a credit card fraud dataset, and German Credit) with more than 285,000 records in total.",
    challenge:
      "Fraud data is extremely imbalanced, credit data is prone to leakage, and a model that stays in a notebook doesn't help anyone. The results had to be accurate, easy to explain, and available to other systems.",
    solution:
      "For each problem I trained and compared several models. Credit risk used logistic regression, random forest, XGBoost, and LightGBM. Fraud detection used Isolation Forest and XGBoost with SMOTE balancing. Segmentation used K-means, hierarchical clustering, and DBSCAN with PCA. I engineered 26+ features, made 40+ visualizations, and served predictions through a FastAPI service with Pydantic validation.",
    results: [
      "Processed over 285,000 financial records across three datasets",
      "Reached 85.7% recall on fraud detection using XGBoost and SMOTE",
      "Engineered 26+ features and made 40+ visualizations, including ROC curves, confusion matrices, and feature plots",
      "Found 4 customer personas through clustering, which supports personalized financial recommendations",
      "Shipped 3 FastAPI prediction endpoints with Pydantic validation, cutting manual loan review effort by 30% and improving marketing conversion by 15 to 20%",
    ],
    keyFeatures: [
      "Credit risk prediction with logistic regression, random forest, XGBoost, and LightGBM",
      "Fraud detection with Isolation Forest and XGBoost, using SMOTE for class imbalance",
      "Customer segmentation with K-means, hierarchical clustering, and DBSCAN plus PCA",
      "26+ engineered features across three datasets",
      "40+ visualizations, including ROC curves, confusion matrices, and feature plots",
      "FastAPI prediction endpoints with Pydantic request validation",
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
      "A team case competition with IBM as the client. I used Watson AI on geographical and API data to improve food desert detection accuracy across the DFW region by 25%, then presented our recommendations to IBM judges.",
    overview:
      "IBM was the client for this case competition on food insecurity in the Dallas–Fort Worth area. As an AI & Data Analytics Consultant on a cross-functional team, I helped identify underserved communities and build data-driven strategies for local governments.",
    challenge:
      "Food deserts are hard to pinpoint, and local governments need accurate information to decide where to send resources.",
    solution:
      "I used Watson AI to analyze geographical and API-based data, which made it more accurate at identifying underserved areas across DFW. Our team built a predictive model that guides resource allocation for local governments and improves community food access, and we presented the findings to IBM judges.",
    results: [
      "Improved food desert detection accuracy by 25% using Watson AI on geographical and API-based data",
      "Identified underserved areas across the DFW region more precisely",
      "Built a predictive model with a cross-functional team to guide resource allocation for local governments",
      "Presented insights, analytics, and recommendations on reducing food insecurity to IBM judges",
    ],
    keyFeatures: [
      "Food desert detection with Watson AI",
      "Analysis of geographical and API-based data",
      "Predictive model for community food access",
      "Resource allocation recommendations for local governments",
      "Final presentation to IBM judges",
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
      "I analyzed 1,200+ NBA schedule records across multiple seasons to study game density, rest days, and back-to-back games, using 10+ statistical models and visualizations.",
    overview:
      "A data analysis project on NBA scheduling patterns across multiple seasons. I focused on game density, rest days, and back-to-back games, and how they show up in the schedule.",
    challenge:
      "An NBA schedule fits travel, rest, and competitive balance into a tight calendar. To understand how density and back-to-backs vary, the historical data needed systematic analysis and a clear presentation.",
    solution:
      "I processed 1,200+ schedule records with Python, pandas, and Jupyter Notebook, then built 10+ statistical models and visualizations with matplotlib and seaborn. Structured, documented code keeps the analysis reproducible.",
    results: [
      "Processed and analyzed over 1,200 NBA schedule records across multiple seasons",
      "Built 10+ statistical models and visualizations with matplotlib and seaborn",
      "Improved workflow efficiency and reproducibility by 30% through structured code and thorough documentation",
      "Presented the results in a clear, professional format",
    ],
    keyFeatures: [
      "Schedule data processing with pandas",
      "Game density and rest day analysis",
      "Back-to-back game evaluation",
      "10+ statistical models and visualizations",
      "Documented, reproducible notebooks",
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
      "An internship at a LoRaWAN network infrastructure company. I grew the IoT product network by 20% with a mobile application, raised device productivity by 15% using LoRaWAN, and increased active devices by 25% through testing and troubleshooting.",
    overview:
      "Maxwell IoT Technologies builds network infrastructure on the LoRaWAN protocol so IoT sensors can communicate over long distances. As an IoT Systems & Performance Intern, I worked on network growth, device performance, and customer issue resolution.",
    challenge:
      "A growing IoT network needs scalable connectivity, reliable devices, and fast fixes when customers run into problems.",
    solution:
      "I developed a mobile application and added connectivity strategies to improve scalability and reliability. I applied LoRaWAN technology to build a more efficient network, and I supported system testing, troubleshooting, and client issue resolution, documenting each fix.",
    results: [
      "Expanded the IoT product network by 20% with a mobile application and new connectivity strategies",
      "Raised device productivity by 15% by applying LoRaWAN technology",
      "Increased the number of active devices by 25% through system testing, troubleshooting, and client issue resolution",
      "Documented solutions that improved customer satisfaction and system performance",
    ],
    keyFeatures: [
      "Mobile application that supported IoT network growth",
      "LoRaWAN network build-out to raise device productivity",
      "IoT performance analysis and optimization",
      "System testing and troubleshooting",
      "Client issue resolution with documented fixes",
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
