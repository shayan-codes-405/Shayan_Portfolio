/* Shayan Akhtar - Developer & Data Scientist Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Keep splash screen with customized Shayan Akhtar branding
};

// SEO Related settings
const seo = {
  title: "Shayan Akhtar | Portfolio",
  description:
    "Portfolio of Shayan Akhtar — Data Scientist & Machine Learning Engineer proficient in Python, Scikit-learn, Data Analytics, Power BI, Java, and Predictive Modeling.",
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
  nickname: "",
  subTitle:
    "B.Tech Computer Science Engineering Student at Lovely Professional University. Passionate about Data Science, Machine Learning pipelines, and Data Analytics.",
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
    link: "https://linkedin.com/in/shayan-akhtar405",
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

// Skills strictly from Shayan CV.pdf:
// Languages: Java, Python, HTML, CSS
// Libraries: Pandas, Seaborn, Matplotlib, Scikit-learn, NumPy
// Databases: MySQL, MongoDB
// Tools/Platforms: Git, GitHub, Visual Studio Code, IntelliJ IDEA, Microsoft Excel, Power BI
// Soft Skills: Problem-Solving, Team Collaboration, Time Management, Adaptability
const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building predictive models and machine learning classification pipelines using Scikit-learn.",
        "⚡ Performing exploratory data analysis, feature engineering, and statistical modeling with Pandas, NumPy, Seaborn, and Matplotlib.",
        "⚡ Formulating analytics pipelines to detect behavioral patterns, business KPIs, and churn triggers.",
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
      title: "Core Development & Databases",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing desktop and GUI applications using Java, Object-Oriented Programming (OOP), and JDBC connectivity.",
        "⚡ Designing relational and document database schemas, managing queries and transactions with MySQL and MongoDB.",
        "⚡ Building responsive web pages using modern HTML5 and CSS3 styling.",
      ],
      softwareSkills: [
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
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
      ],
    },
    {
      title: "Tools, Platforms & Analytics",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Creating dynamic business intelligence dashboards, DAX measures, and Star Schema data models in Power BI and Microsoft Excel.",
        "⚡ Utilizing Git and GitHub for collaborative version control, code tracking, and project management.",
        "⚡ Developing with modern IDEs including Visual Studio Code and IntelliJ IDEA for rapid debugging and development.",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "logos-visual-studio-code",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "IntelliJ IDEA",
          fontAwesomeClassname: "logos-intellij-idea",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page - verified directly from Shayan CV.pdf (LPU, Narayana 12th, Narayana 10th)
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
      profileLink: "https://linkedin.com/in/shayan-akhtar405",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Bachelor of Technology - Computer Science and Engineering",
      logo_path: "Lovely_Professional_University_logo.png",
      alt_name: "LPU",
      duration: "Since Aug 2023",
      descriptions: [
        "⚡ Bachelor of Technology in Computer Science and Engineering with a current CGPA of 7.41.",
        "⚡ Core academic coursework in Data Structures, Algorithms, Database Management Systems, Java, Python, and Machine Learning.",
        "⚡ Active participant in campus datathons, competitive programming hackathons, and technical training programs.",
      ],
      website_link: "",
    },
    {
      title: "Narayana School",
      subtitle: "Intermediate (Class 12 - Senior Secondary)",
      logo_path: "Narayana_Schools_Logo.jpg",
      alt_name: "Narayana School",
      duration: "Mar 2022 – Mar 2023",
      descriptions: [
        "⚡ Completed Senior Secondary Education (Class 12) with a score of 65.4% in West Bengal, India.",
        "⚡ Strong focus on Mathematics, Physics, and analytical problem-solving fundamentals.",
      ],
      website_link: "",
    },
    {
      title: "Narayana School",
      subtitle: "Matriculation (Class 10 - Secondary Education)",
      logo_path: "Narayana_Schools_Logo.jpg",
      alt_name: "Narayana School",
      duration: "Mar 2019 – Mar 2020",
      descriptions: [
        "⚡ Completed Secondary Education (Class 10) with an outstanding score of 92.0% in West Bengal, India.",
        "⚡ Built strong foundational aptitudes in Science, Mathematics, and Computer Applications.",
      ],
      website_link: "",
    },
  ],
};

// Certifications Page - AgentIQ Datathon is placed #1 before NPTEL
const certifications = {
  certifications: [
    {
      title: "AgentIQ Datathon (LPU) - Data, Dashboards & Agentic AI",
      subtitle:
        "Student Datathon: Data, Dashboards & Agentic AI | Certificate ID: LPUAIQD24092026227",
      logo_path: "Datathon Certificate.jpg",
      certificate_link: "https://www.pickl.ai/verify-certificate",
      alt_name: "Pickl.AI & TransOrg Analytics",
      color_code: "#001C55",
    },
    {
      title: "Privacy and Security in Online Social Media (NPTEL)",
      subtitle: "NPTEL & IIT Madras - Online Social Media Security & Privacy",
      logo_path: "Privacy and Security in Online Social Media_page-0001.jpg",
      certificate_link: "Privacy and Security in Online Social Media_page-0001.jpg",
      alt_name: "NPTEL",
      color_code: "#FF7F0E",
    },
    {
      title: "Java Maestro: GUI Development Training (LPU)",
      subtitle: "Hands-On Training on Developing GUI Applications using Java",
      logo_path: "Java Maestro Certificate.jpg",
      certificate_link: "Java Maestro Certificate.jpg",
      alt_name: "Java Maestro",
      color_code: "#D62728",
    },
    {
      title: "Binary Blitz Hackathon (Coding Ninja LPU)",
      subtitle: "Competitive Programming & Problem Solving Hackathon",
      logo_path: "Binary Blitz Hackathon _page-0001.jpg",
      certificate_link: "Binary Blitz Hackathon _page-0001.jpg",
      alt_name: "Binary Blitz",
      color_code: "#1F77B4",
    },
    {
      title: "Build Generative AI Apps & Solutions with No-Code Tools",
      subtitle:
        "Building Generative AI Applications and Solutions with No-Code Tools",
      logo_path:
        "Build Generative Al Apps and Solutions with No-Code Tools_page-0001.jpg",
      certificate_link:
        "Build Generative Al Apps and Solutions with No-Code Tools_page-0001.jpg",
      alt_name: "Generative AI",
      color_code: "#2CA02C",
    },
    {
      title: "Master Generative AI & Generative AI Tools",
      subtitle: "Comprehensive Mastery of Prompt Engineering & GenAI Workflows",
      logo_path:
        "Master Generative Al & Generative Al tools_page-0001.jpg",
      certificate_link:
        "Master Generative Al & Generative Al tools_page-0001.jpg",
      alt_name: "GenAI Tools",
      color_code: "#9467BD",
    },
  ],
};

// Experience (empty since student has no corporate work experience)
const experience = {
  title: "",
  subtitle: "",
  description: "",
  header_image_path: "",
  sections: [],
};

// Projects Page Header
const projectsHeader = {
  title: "Projects",
  description:
    "Explore my featured projects spanning Machine Learning classification, interactive dashboards, predictive modeling, and automated business tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile_pic.png",
    description:
      "Feel free to reach out to discuss Data Science, Machine Learning, Analytics projects, or internship/career opportunities. I am actively available for connections.",
  },
  blogSection: {
    title: "GitHub Projects & Code",
    subtitle:
      "Browse my repositories, open projects, and machine learning notebooks on GitHub.",
    link: "https://github.com/shayan-codes-405",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Punjab, India / West Bengal, India",
    locality: "Phagwara",
    country: "India",
    region: "Punjab",
    postalCode: "144411",
    streetAddress: "Lovely Professional University",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Lovely+Professional+University",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 9547452432",
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
