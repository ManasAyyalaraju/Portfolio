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
    id: "personal-finance-health-predictor",
    title: "Personal Finance Health Predictor",
    company: "Personal Project",
    role: "Data Scientist / ML Engineer",
    duration: "2024",
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
    id: "sudur-capital",
    title: "Real Estate Investment Portal",
    company: "Sudur Capital",
    role: "Intern",
    duration: "Nov 2024 – Present",
    location: "Frisco, TX",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    shortDescription:
      "Built a real estate investment portal connecting investors with land development sponsors.",
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
  {
    id: "ibm-case-competition",
    title: "Food Desert Detection System",
    company: "IBM Case Competition",
    role: "Participant",
    duration: "Fall 2024",
    location: "DFW Area",
    technologies: ["Watson AI", "Python", "Data Visualization"],
    shortDescription:
      "Used IBM Watson AI to identify food deserts and optimize food access in DFW communities.",
    overview:
      "Developed an AI-powered solution to identify and address food deserts in the Dallas-Fort Worth metropolitan area. The project combined machine learning, geospatial analysis, and data visualization to provide actionable insights for improving food accessibility in underserved communities.",
    challenge:
      "Food deserts are areas with limited access to affordable and nutritious food, particularly affecting low-income communities. Traditional methods of identifying these areas were time-consuming and often inaccurate, making it difficult for local governments and organizations to effectively allocate resources and implement solutions.",
    solution:
      "Leveraged IBM Watson AI to analyze geospatial data, demographic information, and food access metrics. Created a predictive model that could identify food deserts with high accuracy and provide recommendations for optimal placement of food resources and community programs.",
    results: [
      "Increased food desert detection accuracy by 25% compared to traditional methods",
      "Successfully presented data-driven strategies to IBM judges and local government officials",
      "Provided actionable recommendations for improving food access in 15+ DFW communities",
      "Integrated multiple API data streams for comprehensive model training",
      "Ensured high data quality through automated validation processes",
    ],
    keyFeatures: [
      "AI-powered food desert identification",
      "Interactive data visualization dashboard",
      "Predictive modeling for resource allocation",
      "Geospatial analysis and mapping",
      "Community impact assessment tools",
      "Government reporting and recommendations",
    ],
    techStack: {
      frontend: ["Python", "Jupyter Notebooks", "Matplotlib", "Plotly"],
      backend: ["IBM Watson AI", "Python", "Pandas", "NumPy"],
      database: ["CSV", "JSON", "Geospatial Data"],
      tools: ["IBM Cloud", "Watson Studio", "Git", "Tableau"],
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
      "Processed and analyzed over 1,200 NBA schedule records to evaluate patterns in game density, rest days, and back-to-back sequences.",
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
];
