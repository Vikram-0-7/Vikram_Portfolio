const base = import.meta.env.BASE_URL;

export const personalInfo = {
  name: "Vikram Thatikonda",
  title: "Software & AI/ML Developer",
  phone: "+91-9502621446",
  email: "vikram200577@gmail.com",
  linkedin: "https://linkedin.com/in/vikram-thatikonda",
  github: "https://github.com/Vikram-0-7",
  profileImage: `${base}images/profile_avatar.png`,
};
export const summary =
  "I'm an AI Engineer and Full-Stack Developer, passionate about building intelligent, scalable applications that solve real-world problems. I specialize in developing AI-powered solutions, modern web applications, and robust backend systems using React, FastAPI, Node.js, Python, and modern development tools. I enjoy transforming innovative ideas into reliable software with clean architecture and user-focused design.";
  export const skills = { 
 
  aiTools: [
    "Hugging Face",
    "Prompt Engineering",
    "API Integration",
    "Python Automation",
  ],

    languages: [
    "Python",
    "C",
    "C++",
    "JavaScript",
  ],

  fullStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "FastAPI",
    "REST APIs",
    "Streamlit",
  ],

  aiMl: [
    "Machine Learning",
    "Deep Learning",
    "LLMs",
    "RAG",
    "AI Agents",
  ],

  databases: [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ],

  tools: [
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD",
    "Shell Scripting",
    "VS Code",
  ],
};

export const skillCards = [
  {
    title: "Computer Science",
    description:
      "Strong fundamentals in algorithms, data structures, and system design with C/C++ and Python.",
    image: `${base}images/card_cs.png`,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Building intelligent models with TensorFlow, Scikit-learn, and Hugging Face for real-world applications.",
    image: `${base}images/card_ai.png`,
  },
  {
    title: "DevOps & Tools",
    description:
      "Proficient in Git, GitHub, cloud platforms, CI/CD workflows, and deployment automation.",
    image: `${base}images/card_devops.png`,
  },
  {
    title: "Full-Stack Developer",
    description:
      "End-to-end web & mobile development with MERN stack, Flask, and Android technologies.",
    image: `${base}images/card_developer.png`,
  },
];

export const experience = [
  {
    role: "AI & IT Intern",
    company: "AICTE Edunet Foundation",
    period: "Sep 2025 – Oct 2025",
    bullets: [
      "Developed StudyMate Pro, an AI-powered learning platform using Streamlit and Hugging Face APIs",
      "Implemented real-time explanation, summarization, and quiz generation features",
      "Improved system performance and usability through modular design and optimized API handling",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Cognifyz Technologies",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Built machine learning models using Scikit-learn for classification and prediction tasks",
      "Performed data preprocessing, feature engineering, and model evaluation on real-world datasets",
    ],
  },
];

export const projects = [
  {
    name: "DocMind AI",
    subtitle: "Multi-Agent Document Intelligence Platform",
    description:
      "A production-grade AI platform that enables semantic document search, multi-document question answering, AI-powered summaries, structured information extraction, and citation-aware responses using Hybrid RAG and LangGraph.",
    tech: [
      "React",
      "FastAPI",
      "LangGraph",
      "Groq Llama 3.1",
      "Hybrid RAG",
      "ChromaDB",
      "PostgreSQL"
    ],
    image: `${base}images/project_docmind.png`,
    github: "https://github.com/Vikram-0-7/AI_DOCUMENT_ANALYZER",
  },
  
  
  {
      name: "SchemesMadeSimple",
      subtitle: "AI Government Scheme Discovery Platform",
      description:
        "A full-stack AI platform that discovers and catalogs government welfare schemes through live web scraping, intelligent information extraction, personalized recommendations, and conversational legal assistance.",
      tech: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Groq",
        "BeautifulSoup",
        "DuckDuckGo Search"
      ],
      image: `${base}images/project_schemes.png`,
      github: "https://github.com/Vikram-0-7/SCHEMES_FINDER",
    },
  
    {
      name: "AI Image Generation SaaS",
      subtitle: "Text-to-Image Generation Platform",
      description:
        "A full-stack AI application that transforms natural language prompts into high-quality images using the ClipDrop API, featuring secure authentication, image history, and scalable REST APIs.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "ClipDrop API",
        "JWT"
      ],
      image: `${base}images/project_imagegen.png`,
      github: "https://github.com/Vikram-0-7/AI_Image_Generation_SaaS_Platform",
    },
    
  {
    name: "Automated Exam Management System",
    subtitle: "Smart Exam Seating Platform",
    description:
      "A web-based examination management system that automates seating allocation, prevents adjacent seating of students from the same department, provides QR-code based identity verification, and delivers real-time seating information to students and administrators.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "QR Code" 
    ],
    image: `${base}images/project_exam.png`,
    github: "https://github.com/Vikram-0-7/Seating_Arrangement_for_Exam",
  },
  
  {
    name: "GIF Maker Studio",
    subtitle: "AI Video-to-GIF Processing Platform",
    description:
    "A modern full-stack application that converts videos into optimized animated GIFs with customizable frame rates, visual filters, AI-powered background removal, and secure shareable links.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "FFmpeg",
      "Sharp",
      "Skia Canvas"
    ],
    image: `${base}images/project_gifmaker.png`,
    github: "https://github.com/Vikram-0-7/Gif_maker",
  },

  {
    name: "Government Problem Finder",
    subtitle: "AI Civic Problem Discovery Platform",
    description:
      "An AI-powered platform that discovers civic problems from Indian government portals using concurrent web scraping, a local RAG pipeline, semantic ranking, and LLM-powered structured extraction for accurate, source-backed insights.",
    tech: [
      "React",
      "FastAPI",
      "Groq Llama 3.1",
      "Neon PostgreSQL",
      "BeautifulSoup",
      "RAG",
      "DuckDuckGo"
    ],
    image: `${base}images/project_problemfinder.png`,
    github: "https://github.com/Vikram-0-7/ProblemCrawler",
  },
  
   
   {
     name: "StudyMate Pro",
     subtitle: "AI Learning Assistant",
     description:
       "A full-stack AI application built with Streamlit and Hugging Face APIs that integrates chatbot, note summarization, and quiz generation features to enhance user productivity through interactive learning.",
     tech: ["Streamlit", "Hugging Face", "Python", "AI/ML"],
     image: `${base}project_photos/StudyMate Pro.png`,
     github: "https://github.com/Vikram-0-7/AI_Powered_Study_Mate_pro",
   },
  {
    name: "Medicare App",
    subtitle: "Android Health Platform",
    description:
    "A multi-screen Android application using Java and SQLite with authentication, prescription generation, profile management, and structured local database for efficient data handling.",
    tech: ["Java", "Android", "SQLite", "XML"],
    image: `${base}project_photos/Medicare App.jpg`,
    github: "https://github.com/Vikram-0-7/Medicalapp",
  },
  {
    name: "Image Compressor",
    subtitle: "Web Application",
    description:
      "A Flask-based web application for image compression supporting multiple formats (PNG, JPG, WEBP) with responsive UI and real-time preview comparison for before and after results.",
    tech: ["Flask", "Python", "HTML/CSS", "Pillow"],
    image: `${base}project_photos/Image Compressor.png`,
    github: "https://github.com/Vikram-0-7/Image_Compressor_Flask_App",
  },
];

export const certifications = [
  {
    name: "MongoDB Associate Developer Certification",
    issuer: "MongoDB",
    icon: "database",
  },
  {
    name: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    icon: "AI",
  },
  {
    name: "Web Development",
    issuer: "Internshala",
    icon: "globe",
  },
  {
    name: "Computer Graphics",
    issuer: "NPTEL",
    icon: "monitor",
  },
];

export const achievements = [
 {
  title: "LeetCode",
  description: "304+ Problems Solved | 204 Active Days",
  icon: "trophy",
    highlight: true,

},
  {
    title: "EAMCET Rank: 7564",
    description: "State-level engineering entrance exam",
    icon: "award",
    highlight: false,
  },
];

export const education = [
  {
    degree: "B.E. Information Technology",
    institution: "CBIT Hyderabad",
    period: "2023 – 2027",
    grade: "CGPA: 8.98",
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Khammam",
    period: "2021 – 2023",
    grade: "CGPA: 9.74",
  },
  {
    degree: "SSC",
    institution: "Sri Chaitanya Khammam",
    period: "",
    grade: "CGPA: 10.0",
  },
];
