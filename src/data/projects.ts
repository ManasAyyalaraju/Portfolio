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
    duration: "Fall 2025 – Present",
    location: "Remote",
    technologies: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "OpenAI GPT-4o-mini", "Supabase", "Chrome Extension", "LaTeX"],
    shortDescription:
      "Refactr tailors resumes to any job in seconds — from a web app or directly on the job posting via a Chrome extension for LinkedIn, Indeed, Glassdoor, and Handshake. A multi-stage AI pipeline rewrites content to match the job while a dedicated verification step guarantees the model never claims a skill that isn't actually on the resume. Live at refactrapp.com.",
    overview:
      "Refactr is a resume-tailoring platform built as three loosely coupled pieces: a Next.js web app, a Manifest V3 Chrome extension, and a stateless FastAPI backend. Users upload a resume once and either tailor it against a job description or reformat it into a clean, ATS-friendly PDF — either in the web app or straight from a job posting via the extension, which shares the same Supabase-backed auth and storage so signing in once logs you in everywhere. The tailoring pipeline runs as five discrete stages — Parse, Classify, Generate, Verify, and Lock — so job parsing, domain classification, content rewriting, and factual accuracy checks are each handled by a dedicated, testable step rather than one monolithic prompt.",
    challenge:
      "Job seekers spend countless hours manually editing resumes for each application, often missing critical keywords and failing to optimize content for ATS systems. Existing AI resume tools also risk a subtler failure: letting a model quietly invent skills or experience the candidate doesn't have. There was a need for a solution that could tailor a resume to match a job in seconds, work directly on the job boards people already use, and guarantee it never fabricates content — all without giving up structure, formatting, or factual accuracy.",
    solution:
      "Built Refactr as three coordinated pieces kept deliberately loosely coupled: a Next.js/React web app and a Chrome extension that both talk to Supabase directly for auth and storage (protected by row-level security scoped to auth.uid()), and a fully stateless FastAPI backend that never sees a service-role key and only ever handles parsing, tailoring, reformatting, and PDF rendering. The tailoring pipeline parses the resume and job description concurrently via OpenAI structured-outputs calls bound to Pydantic schemas, classifies the job's industry in the same call as parsing, generates rewritten bullets using domain-specific prompt guidance, verifies every tailored bullet against the job's required skills (rewriting or reverting any bullet that introduces a skill not present in the original resume), and locks company, title, dates, and locations in code so they can never drift from the source resume. Every stage is timed and surfaced via an X-Pipeline-Timings header for observability. Deployed the frontend on Vercel and the backend on Render, with the extension distributed via Chrome's Manifest V3.",
    results: [
      "Shipped a Chrome extension that auto-detects job postings on LinkedIn, Indeed, Glassdoor, and Handshake and tailors a saved resume against the page without leaving the tab",
      "Designed a five-stage tailoring pipeline (Parse, Classify, Generate, Verify, Lock) that catches and corrects any AI-introduced skill not present in the candidate's actual resume",
      "Unified auth and storage across the web app and extension on Supabase with row-level security, so one sign-in works everywhere",
      "Kept the backend fully stateless and credential-free — it never talks to Supabase or holds a service-role key — isolating the tailoring pipeline from auth/storage outages",
      "Built two ATS-friendly resume templates (standard and Technical Skills) with LaTeX-based PDF rendering",
      "Deployed to a custom domain (refactrapp.com) with the frontend on Vercel and backend on Render",
    ],
    keyFeatures: [
      "Chrome extension (Manifest V3) that auto-appears on job postings and tailors a saved resume without leaving the tab",
      "Shared Supabase-backed identity — sign in once on the web app, stay signed in on the extension",
      "Five-stage tailoring pipeline: Parse, Classify, Generate, Verify, and Lock, each a discrete, testable step",
      "Verification stage that checks every tailored bullet against the job's required skills and reverts any hallucinated skill",
      "Locked fields — company, title, dates, and locations are enforced in code and can never be rewritten by the model",
      "Reformat mode that produces an ATS-friendly PDF with zero content rewriting — bullets preserved verbatim",
      "Two resume templates, including a Technical Skills layout with categorized skill sections",
      "Dashboard with current resume, resume history, and job-application stats",
      "Per-request pipeline timing surfaced via an X-Pipeline-Timings response header for observability",
    ],
    techStack: {
      frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
      backend: ["Python 3.11+", "FastAPI", "OpenAI GPT-4o-mini (structured outputs)", "Pydantic", "LaTeX (pdflatex)"],
      database: ["Supabase (Postgres)", "Supabase Auth", "Supabase Storage (RLS)"],
      tools: ["Chrome Extension (Manifest V3, esbuild)", "Docker", "Render.com", "Vercel", "Git/GitHub", "CI/CD Automation"],
    },
    liveUrl: "https://refactrapp.com",
    githubUrl: "https://github.com/ManasAyyalaraju/refactr",
  },
  {
    id: "personal-finance-health-predictor",
    title: "Personal Finance Health Predictor",
    company: "Personal Project",
    role: "Data Scientist / ML Engineer",
    duration: "Fall 2025",
    location: "Remote",
    technologies: ["Python", "FastAPI", "XGBoost", "LightGBM", "Scikit-learn"],
    shortDescription:
      "Enterprise-grade machine learning system demonstrating the complete data science lifecycle from raw data exploration through production deployment. Built three predictive models for credit risk assessment, fraud detection, and customer segmentation, processing 285,000+ financial records.",
    overview:
      "An enterprise-grade machine learning system that demonstrates the complete data science lifecycle from raw data exploration through production deployment. This project showcases expertise in building scalable, production-ready AI solutions for the financial services industry. Built three predictive models addressing critical fintech challenges: credit risk assessment, fraud detection, and customer segmentation. Processed 285,000+ financial records across three datasets (German Credit, Lending Club, Credit Card Fraud) to deliver actionable insights and automated decision-making capabilities.",
    challenge:
      "Financial services organizations face critical challenges in credit risk assessment, fraud detection, and customer segmentation. Traditional methods are inefficient, lack accuracy, and cannot scale to handle large volumes of transactions. There was a need for automated, data-driven solutions that could process hundreds of thousands of records, handle severely imbalanced datasets, and provide real-time predictions in production environments.",
    solution:
      "Developed a comprehensive end-to-end ML platform with three specialized models: credit risk prediction using ensemble methods (XGBoost, LightGBM), fraud detection with advanced anomaly detection techniques (Isolation Forest, SMOTE), and customer segmentation using multiple clustering algorithms. Built a production-ready FastAPI RESTful API with comprehensive validation, error handling, and testing. Implemented rigorous data engineering pipelines with feature engineering, handling of class imbalance, and resolution of data leakage issues.",
    results: [
      "Credit Risk: Achieved 70% ROC-AUC with XGBoost, identified top 15 risk indicators, estimated $500K+ annual cost savings",
      "Fraud Detection: Achieved exceptional 97.7% ROC-AUC and 85.7% recall on severely imbalanced data (0.17% fraud rate), estimated $16K+ monthly fraud prevention savings",
      "Customer Segmentation: Achieved 0.39 Silhouette Score, identified 4 distinct customer personas enabling 15-20% improvement in marketing campaign conversion rates",
      "Processed 285,000+ financial records across three datasets with comprehensive EDA and feature engineering",
      "Built production-ready FastAPI application with 3 prediction endpoints, comprehensive test suite, and interactive API documentation",
      "Delivered combined systems with estimated ROI of 250%+ through operational efficiency gains",
    ],
    keyFeatures: [
      "Three production-ready ML models: Credit Risk, Fraud Detection, and Customer Segmentation",
      "Comprehensive EDA with 26+ engineered features and intelligent feature scaling",
      "Advanced handling of class imbalance using SMOTE and ensemble methods",
      "Data leakage detection and resolution in real-world scenarios",
      "RESTful API with FastAPI, Pydantic validation, and Swagger UI documentation",
      "Comprehensive test suite with 10+ unit tests achieving full endpoint coverage",
      "40+ publication-quality visualizations documenting model performance",
      "Business impact analysis with actionable recommendations and ROI calculations",
    ],
    techStack: {
      frontend: ["Jupyter Notebooks", "Matplotlib", "Seaborn", "Plotly"],
      backend: ["Python 3.8+", "FastAPI", "Uvicorn", "Pydantic"],
      database: ["CSV", "JSON", "Pickle (Model Storage)"],
      tools: ["Git/GitHub", "VS Code", "Jupyter Lab", "Pytest", "Scikit-learn", "XGBoost", "LightGBM", "Imbalanced-learn", "Pandas", "NumPy"],
    },
  },
  {
    id: "nba-schedule-analysis",
    title: "NBA Schedule Analysis System",
    company: "Data Science Analyst",
    role: "Analyst",
    duration: "Fall 2025",
    location: "Remote",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    shortDescription:
      "Comprehensive data analysis system examining NBA scheduling patterns across multiple seasons to evaluate game density, rest days, and back-to-back sequences. Developed 10+ statistical models and visualizations providing clear insights into scheduling effects on team performance and player health.",
    overview:
      "Developed a comprehensive data analysis system to examine NBA scheduling patterns across multiple seasons. The project focused on understanding the impact of game density, rest periods, and back-to-back sequences on team performance and player health. This analysis provided valuable insights for teams, broadcasters, and league officials to optimize scheduling strategies.",
    challenge:
      "NBA scheduling involves complex considerations including travel, rest days, and competitive balance. Traditional scheduling methods lacked data-driven insights into how different scheduling patterns affect team performance and player fatigue. There was a need for systematic analysis of historical scheduling data to identify patterns and optimize future schedules.",
    solution:
      "Created a robust data analysis pipeline using Python and pandas to process over 1,200 NBA schedule records. Developed statistical models and visualizations to analyze game density patterns, rest day distributions, and back-to-back sequence impacts. Implemented structured coding practices and comprehensive documentation to ensure reproducibility and future scalability.",
    results: [
      "Processed and analyzed over 1,200 NBA schedule records across multiple seasons",
      "Developed 10+ statistical models and visualizations using matplotlib and seaborn",
      "Improved workflow efficiency and reproducibility by 30% through structured coding practices",
      "Delivered comprehensive analytical outputs with clear insights into scheduling effects",
      "Created accessible and professional visualizations for stakeholder presentations",
    ],
    keyFeatures: [
      "Automated data processing pipeline for NBA schedule records",
      "Statistical analysis of game density and rest day patterns",
      "Back-to-back sequence impact assessment",
      "Interactive visualizations and dashboards",
      "Comprehensive documentation and code organization",
      "Reproducible analysis framework for future seasons",
    ],
    techStack: {
      frontend: ["Jupyter Notebooks", "Matplotlib", "Seaborn"],
      backend: ["Python", "Pandas", "NumPy"],
      database: ["CSV", "JSON", "NBA API Data"],
      tools: ["Git", "Jupyter Lab", "Python Libraries"],
    },
  },
  {
    id: "sudur-capital",
    title: "Real Estate Investment Portal",
    company: "Sudur Capital",
    role: "Intern",
    duration: "Nov 2024 – Present",
    location: "Frisco, TX",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    shortDescription:
      "Designed and implemented a responsive full-stack platform using Next.js, TypeScript, HTML5, CSS, and PostgreSQL, ensuring secure, scalable, and optimized data solutions. Developed and launched a real estate investment portal connecting investors with land development sponsors, enabling seamless project evaluation and funding opportunities.",
    overview:
      "Developed a comprehensive real estate investment platform that bridges the gap between investors and land development sponsors. The platform enables secure transactions, transparent communication, and streamlined investment processes in the real estate market.",
    challenge:
      "The real estate investment market lacked a centralized platform for connecting investors with development sponsors. Traditional methods were inefficient, lacked transparency, and made it difficult for investors to find suitable opportunities while sponsors struggled to reach potential investors.",
    solution:
      "Created a full-stack web application with a user-friendly interface for investors to browse opportunities, detailed project information, secure transaction processing, and real-time communication tools. Implemented a scalable PostgreSQL database to handle complex financial data and user relationships.",
    results: [
      "Successfully launched MVP within 3 months with a 7-member development team",
      "Designed and implemented a scalable database architecture supporting 1000+ concurrent users",
      "Improved user experience with responsive design and intuitive navigation",
      "Streamlined agile workflows with 20+ user stories tracked in Jira",
      "Enhanced platform security with secure authentication and data encryption",
    ],
    keyFeatures: [
      "Investor dashboard with portfolio tracking",
      "Project listing and filtering system",
      "Secure payment processing",
      "Real-time notifications and updates",
      "Document management system",
      "Communication tools between investors and sponsors",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5"],
      backend: ["Node.js", "Next.js API Routes", "PostgreSQL"],
      database: ["PostgreSQL", "Prisma ORM"],
      tools: ["Jira", "Git", "Vercel", "Postman"],
    },
  },
];
