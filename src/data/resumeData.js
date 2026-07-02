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
  "I'm an AI Engineer and Full-Stack Developer passionate about building intelligent, scalable applications that solve real-world problems. I specialize in developing AI-powered solutions, modern web applications, and robust backend systems using React, FastAPI, Node.js, Python, and modern development tools. I enjoy transforming innovative ideas into reliable software with clean architecture and user-focused design.";
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
    name: "StudyMate Pro",
    subtitle: "AI Learning Assistant",
    description:
      "A full-stack AI application built with Streamlit and Hugging Face APIs that integrates chatbot, note summarization, and quiz generation features to enhance user productivity through interactive learning.",
    tech: ["Streamlit", "Hugging Face", "Python", "AI/ML"],
    image: `${base}images/project_studymate.png`,
  },
  {
    name: "Medicare App",
    subtitle: "Android Health Platform",
    description:
      "A multi-screen Android application using Java and SQLite with authentication, prescription generation, profile management, and structured local database for efficient data handling.",
    tech: ["Java", "Android", "SQLite", "XML"],
    image: `${base}images/project_medicare.png`,
  },
  {
    name: "Image Compressor",
    subtitle: "Web Application",
    description:
      "A Flask-based web application for image compression supporting multiple formats (PNG, JPG, WEBP) with responsive UI and real-time preview comparison for before and after results.",
    tech: ["Flask", "Python", "HTML/CSS", "Pillow"],
    image: `${base}images/project_compressor.png`,
  },
];

export const certifications = [
  {
    name: "MongoDB Associate Developer Certification",
    issuer: "MongoDB",
    icon: "database",
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
