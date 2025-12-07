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
    id: "ai-powered-resume-tailor",
    title: "AI-Powered Resume Tailor",
    company: "Personal Project",
    role: "AI Engineer",
    duration: "Fall 2025",
    location: "Remote",
    technologies: ["Next.js", "TypeScript", "FastAPI", "OpenAI GPT-4o-mini", "LaTeX"],
    shortDescription:
      "AI-powered platform that automatically customizes resumes for specific job descriptions using GPT-4o-mini, maximizing ATS compatibility and improving interview success rates. Built intelligent domain detection across 4+ industries with generative optimization pipelines, achieving 40% keyword recall improvement and 30-35% ATS match alignment boost.",
    overview:
      "AI-Powered Resume Tailor is an intelligent AI product that leverages GPT-4o-mini to automatically customize resumes for specific job descriptions. The system uses advanced domain detection algorithms to identify job industries and sub-domains, then applies generative optimization pipelines that intelligently reorder skills by relevance, evaluate resume completeness, and rewrite content while preserving structure and metadata. The platform eliminates hours of manual resume editing by automatically tailoring resumes to match job descriptions in seconds, using domain-specific AI prompts and intelligent keyword optimization.",
    challenge:
      "Job seekers spend countless hours manually editing resumes for each application, often missing critical keywords and failing to optimize content for ATS systems. Traditional resume editing is time-consuming, error-prone, and lacks the intelligence to match job requirements effectively. There was a need for an AI-powered solution that could intelligently detect job domains, optimize keyword density, and dynamically adjust resume content to maximize ATS compatibility while preserving factual accuracy.",
    solution:
      "Built an intelligent resume-tailoring system using GPT-4o-mini with advanced domain detection across 4+ major industries. Designed generative optimization pipelines that reorder skills by relevance, evaluate resume completeness, and rewrite bullets while preserving structure and metadata. Implemented intelligent keyword extraction and optimization algorithms that dynamically adjust resume density to match job descriptions. Created domain-specific AI prompts tailored to different industries for precise content customization. Deployed the platform using Dockerized FastAPI for LLM inference and LaTeX-based PDF generation on Render & Vercel with CI/CD automation.",
    results: [
      "Improved keyword recall by 40% through intelligent domain detection and keyword optimization algorithms",
      "Boosted ATS match alignment by 30-35% across test job descriptions through generative optimization pipelines",
      "Built domain detection system across 4+ major industries with intelligent classification",
      "Designed generative pipelines that dynamically adjust resume density to match job descriptions",
      "Created ATS-optimized resume generation that preserves structure and metadata while optimizing content",
      "Deployed scalable AI platform with Dockerized FastAPI for LLM inference and automated CI/CD pipelines",
    ],
    keyFeatures: [
      "Intelligent domain detection system across 4+ major industries with automatic classification",
      "Generative optimization pipelines that reorder skills by relevance and evaluate resume completeness",
      "AI-powered content rewriting that preserves structure and metadata while optimizing for ATS compatibility",
      "Dynamic resume density adjustment that matches job description requirements",
      "Keyword optimization algorithms that improve recall by 40% and ATS match alignment by 30-35%",
      "Domain-specific AI prompts tailored to different industries for precise customization",
      "LaTeX-based PDF generation with professional formatting and ATS-friendly output",
      "Scalable AI infrastructure with Dockerized FastAPI for LLM inference and automated deployment",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "React"],
      backend: ["Python 3.11+", "FastAPI", "OpenAI GPT-4o-mini", "LLM Inference", "LaTeX (pdflatex)", "Jinja2", "Pydantic"],
      database: ["JSON (Temporary Data Processing)", "PDF Storage"],
      tools: ["Docker", "Render.com", "Vercel", "Git/GitHub", "CI/CD Automation"],
    },
    liveUrl: "https://ai-powered-resume-builder-egn6vytdc-manas-s-projects-97f76173.vercel.app",
    githubUrl: "https://github.com/ManasAyyalaraju/AI-powered-resume-builder",
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
