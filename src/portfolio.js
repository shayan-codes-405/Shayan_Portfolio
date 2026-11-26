/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Shayan Akhtar | Portfolio",
  description:
    "Aspiring Data Scientist & Machine Learning Engineer passionate about architecting end-to-end intelligent systems, agentic AI workflows, and data-driven solutions.",
  og: {
    title: "Shayan Akhtar Portfolio",
    type: "website",
    url: "https://shayan-codes-405.github.io/Shayan_Portfolio/",
  },
};

// Home Page
const greeting = {
  title: "Shayan Akhtar",
  logo_name: "ShayanAkhtar",
  nickname: "shayan_codes",
  subTitle:
    "Aspiring Data Scientist & Machine Learning Engineer passionate about architecting end-to-end intelligent systems, agentic AI workflows, predictive ML modeling, and data-driven web applications.",
  resumeLink: process.env.PUBLIC_URL + "/Shayan CV.pdf",
  portfolio_repository: "https://github.com/shayan-codes-405/Shayan_Portfolio",
  githubProfile: "https://github.com/shayan-codes-405",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shayan-codes-405",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shayan-akhtar-0a9557290/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:shayanakhtar405@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing high-accuracy machine learning classifiers, regression models, and time-series forecasting pipelines.",
        "⚡ Orchestrating Agentic AI copilots and RAG pipelines using LangGraph and Groq LLaMA models.",
        "⚡ Experience in exploratory data analysis (EDA), anomaly detection, and in-memory OLAP analytics using DuckDB and Pandas.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack & Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive, interactive web interfaces using React.js, JavaScript (ES6+), and modern CSS frameworks.",
        "⚡ Architecting multi-tier enterprise systems and backend REST APIs with Python (FastAPI/Flask) and Java.",
        "⚡ Designing relational database schemas, transactions, and optimized SQL queries using MySQL and DuckDB.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Cloud & Tooling",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience with containerization, deployment pipelines, and Git version control workflows.",
        "⚡ Integrating third-party APIs, LLM inference endpoints, and interactive visualization libraries like Apache ECharts.",
        "⚡ Building automated document parsing, OCR pipelines, and real-time transaction monitoring dashboards.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/shayan-codes-405",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/shayan-akhtar-0a9557290/",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University (LPU)",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "Lovely_Professional_University_logo.png",
      alt_name: "LPU",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Specializing in Computer Science, Data Science, and Machine Learning algorithms with strong foundational coursework.",
        "⚡ Completed core subjects including Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Artificial Intelligence.",
        "⚡ Actively participating in national hackathons and technical datathons, securing high honors in competitive AI challenges.",
      ],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "Narayana Junior College",
      subtitle: "Intermediate - MPC (Mathematics, Physics, Chemistry)",
      logo_path: "Narayana_Schools_Logo.jpg",
      alt_name: "Narayana",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Completed Senior Secondary Education with an emphasis on Mathematics, Physics, and analytical problem-solving.",
        "⚡ Developed strong quantitative aptitudes and logical reasoning skills foundational to computer science.",
      ],
      website_link: "https://www.narayanagroup.com/",
    },
  ],
};

// Certifications Page - Note: AgentIQ Datathon is placed #1 before NPTEL
const certifications = {
  certifications: [
    {
      title: "AgentIQ DATATHON - Data, Dashboards & Agentic AI",
      subtitle:
        "Student Datathon: Data, Dashboards & Agentic AI | Certificate ID: LPUAIQD24092026227",
      logo_path: "Datathon Certificate.jpg",
      certificate_link: "https://www.pickl.ai/verify-certificate",
      alt_name: "Pickl.AI & TransOrg Analytics",
      color_code: "#001C55",
    },
    {
      title: "Privacy & Security in Online Social Media",
      subtitle: "NPTEL & IIT Madras - Online Social Media Security & Privacy",
      logo_path: "Privacy and Security in Online Social Media_page-0001.jpg",
      certificate_link: "https://nptel.ac.in/",
      alt_name: "NPTEL",
      color_code: "#FF7F0E",
    },
    {
      title: "Binary Blitz Hackathon",
      subtitle: "Competitive Programming & Problem Solving Hackathon",
      logo_path: "Binary Blitz Hackathon _page-0001.jpg",
      certificate_link: "https://github.com/shayan-codes-405",
      alt_name: "Binary Blitz",
      color_code: "#1F77B4",
    },
    {
      title: "Build Generative AI Apps & Solutions",
      subtitle:
        "Building Generative AI Applications and Solutions with No-Code Tools",
      logo_path:
        "Build Generative Al Apps and Solutions with No-Code Tools_page-0001.jpg",
      certificate_link: "https://github.com/shayan-codes-405",
      alt_name: "Generative AI",
      color_code: "#2CA02C",
    },
    {
      title: "Master Generative AI & Tools",
      subtitle: "Comprehensive Mastery of Prompt Engineering & GenAI Workflows",
      logo_path:
        "Master Generative Al & Generative Al tools_page-0001.jpg",
      certificate_link: "https://github.com/shayan-codes-405",
      alt_name: "GenAI Tools",
      color_code: "#9467BD",
    },
    {
      title: "Java Maestro Training",
      subtitle: "Advanced Core & Object-Oriented Java Development",
      logo_path: "Java Maestro Certificate.jpg",
      certificate_link: "https://github.com/shayan-codes-405",
      alt_name: "Java Maestro",
      color_code: "#D62728",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience & Leadership",
  subtitle: "Projects, Hackathons and Academic Initiatives",
  description:
    "Experienced in architecting machine learning pipelines, building full-stack web applications, and participating in high-intensity competitive hackathons and datathons.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Academic & Technical Projects",
      work: true,
      experiences: [
        {
          title: "Machine Learning & AI Lead",
          company: "AgroBuddy Platform",
          company_url: "https://github.com/shayan-codes-405/Agrobuddy",
          logo_path: "Lovely_Professional_University_logo.png",
          duration: "Jan 2026 - Present",
          location: "LPU, Punjab",
          description:
            "Architected an end-to-end agricultural supply chain intelligence platform unifying 60,000+ mandi records with DuckDB OLAP engine, LangGraph agentic copilot, and Groq LLaMA models.",
          color: "#2CA02C",
        },
        {
          title: "Data Science & Predictive Analytics Researcher",
          company: "Academic Capstone Projects",
          company_url: "https://github.com/shayan-codes-405",
          logo_path: "Lovely_Professional_University_logo.png",
          duration: "Aug 2024 - Dec 2025",
          location: "LPU, Punjab",
          description:
            "Developed machine learning pipelines for customer churn forecasting (85%+ accuracy), fraud detection with anomaly detection ensembles, and automated document parsing systems.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span end-to-end Data Science, Agentic AI, Machine Learning predictive engines, and Full Stack web applications built with modern tools and frameworks.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Featured Implementations",
  description: "Key architectural blueprints and machine learning frameworks.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "agrobuddy-intelligence",
      name: "AgroBuddy - Agricultural Supply Chain Intelligence",
      createdAt: "2026-01-15T00:00:00Z",
      description:
        "High-throughput data platform consolidating 60k+ records using DuckDB and LangGraph Agentic Copilot.",
      url: "https://github.com/shayan-codes-405/Agrobuddy",
    },
    {
      id: "telecom-churn-analytics",
      name: "Telecom Churn Retention Analytics Engine",
      createdAt: "2025-11-20T00:00:00Z",
      description:
        "Predictive churn classification model built with Scikit-learn, yielding 85%+ validation accuracy.",
      url: "https://github.com/shayan-codes-405/Telecom_Customer_Churn_Prediction",
    },
    {
      id: "fraudlens-pipeline",
      name: "FraudLens - Real-Time Fraud Anomaly Detection",
      createdAt: "2025-05-18T00:00:00Z",
      description:
        "Low-latency streaming anomaly detector combining Isolation Forest with XGBoost classifiers.",
      url: "https://github.com/shayan-codes-405/FraudLens",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile_pic.png",
    description:
      "Feel free to reach out to discuss Data Science, Machine Learning, Agentic AI systems, or software development opportunities. I am actively open to internships and full-time roles.",
  },
  blogSection: {
    title: "GitHub & Code Repositories",
    subtitle:
      "Explore my open-source code, experiment notebooks, and project architectures on GitHub.",
    link: "https://github.com/shayan-codes-405",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Jalandhar, Punjab / Patna, Bihar, India",
    locality: "Jalandhar",
    country: "India",
    region: "Punjab",
    postalCode: "144411",
    streetAddress: "Lovely Professional University, Phagwara",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Lovely+Professional+University",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 9155078513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
