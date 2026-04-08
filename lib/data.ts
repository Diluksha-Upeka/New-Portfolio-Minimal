export type ProjectCategory =
  | "ai-ml"
  | "full-stack"
  | "real-time"
  | "mlops-infra";

export interface Project {
  name: string;
  description: string;
  learning: string;
  tech: string[];
  category: ProjectCategory;
  logo: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const HERO_DATA = {
  subtitle:
    "Final-Year Computer Engineering Undergraduate, University of Ruhuna.",
  title: "Building production-ready AI systems ",
  titleHighlight: "from models to scalable software.",
  status: "Software Engineer • AI/ML • Agentic AI • RAG",
  image: "/profile.png",
  email: "dilukshaupeka@gmail.com",
  github: "https://github.com/Diluksha-Upeka",
  linkedin: "https://www.linkedin.com/in/upeka-diluksha",
  cv: "/projects/cv.pdf",
};

export const PROOF_BAR_DATA = [
  {
    color: "bg-green-500",
    text: "AI & ML projects deployed end-to-end (training \u2192 API \u2192 UI)",
  },
  {
    color: "bg-blue-500",
    text: "Experience with real-time systems, pipelines & model persistence",
  },
  {
    color: "bg-purple-500",
    text: "Research-focused: Blockchain + GNNs for vehicular networks",
  },
];

export const SHOWCASE_VIDEOS = [
  {
    id: "context-iq",
    title: "Context IQ Demo",
    src: "/projects/contextiq-demo.mp4",
    link: "https://contextiq-rag.vercel.app/",
  },
];

export const TECH_ARSENAL = [
  {
    category: "\ud83e\udde0 AI / ML Systems",
    bullets: [
      "Model training, evaluation & persistence",
      "Pipelines (scikit-learn, custom preprocessing)",
      "Computer Vision (OpenCV, real-time inference)",
    ],
    tags: ["TensorFlow", "PyTorch", "Python"],
  },
  {
    category: "\ud83c\udf10 Software Engineering",
    bullets: [
      "REST & real-time APIs (Node.js, Socket.io)",
      "Frontend systems (React, Next.js, React Native)",
      "Authentication, state management, scalability",
    ],
    tags: ["TypeScript", "Node.js", "Next.js"],
  },
  {
    category: "\u2601\ufe0f Dev & Ops",
    bullets: [
      "Dockerized services & containers",
      "AWS deployment basics",
      "Git-based collaboration",
    ],
    tags: ["Docker", "Git", "Linux"],
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "Capricon Solution Pvt Ltd",
    duration: "6 Months",
    tags: ["PHP", "Laravel", "MySQL", "Enterprise Arch"],
    description:
      "Developed and maintained enterprise-level solutions, specifically focusing on a robust Point of Sale (POS) system. Handled backend logic for inventory management, sales tracking, and reporting modules to support business operations.",
    highlights: [
      {
        title: "Business Logic",
        desc: "Translated complex business requirements into clean, maintainable code within the MVC architecture. Improved processing time for end-of-day sales metric calculations by 15%.",
      },
      {
        title: "Database Design",
        desc: "Managed relational databases (MySQL) for high-transaction environments (sales/inventory data), handling peak daily loads safely and securely.",
      },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "NeuroSpace",
    description:
      "A multi-modal GraphRAG agent that converts video lectures and research papers into a navigable knowledge graph with agentic retrieval and cross-modal navigation.",
    learning:
      "Designed cross-modal GraphRAG pipelines with multi-source ingestion and retrieval orchestration.",
    tech: ["LlamaIndex", "Neo4j", "React Flow", "FastAPI", "Docker"],
    category: "ai-ml",
    logo: "NS",
    githubUrl: "https://github.com/Diluksha-Upeka/Neurospace",
    image: "/projects/neurospace.png",
  },
  {
    name: "ContextIQ (RAG System)",
    description:
      "Chat with your latest PDF using Gemini plus Pinecone RAG. Upload, chunk, embed, retrieve, and answer with grounded context.",
    learning:
      "Implemented reliable RAG flow with robust document chunking and grounded response generation.",
    tech: ["Python", "Streamlit", "Gemini", "Pinecone", "LangChain"],
    category: "ai-ml",
    logo: "CQ",
    githubUrl: "https://github.com/Diluksha-Upeka/contextiq-rag",
    liveUrl: "https://contextiq-rag.vercel.app/",
    image: "/projects/contextiq.png",
  },
  {
    name: "AI Data Analyst",
    description:
      "Intelligent CSV analysis tool powered by Groq and LangChain agents. Upload data and interact using natural language queries.",
    learning:
      "Built agent-powered tabular analysis workflows for natural language data interrogation.",
    tech: ["Python", "Streamlit", "LangChain", "Groq", "Pandas"],
    category: "ai-ml",
    logo: "AD",
    githubUrl: "https://github.com/Diluksha-Upeka/ai-analyst",
    liveUrl: "https://ai-data-chat.streamlit.app/",
    image: "/projects/analyst.png",
  },
  {
    name: "Resume Optimizer",
    description:
      "A Streamlit dashboard that parses resumes into structured JSON and provides an ATS score using Llama 3.",
    learning:
      "Built structured extraction pipelines with prompt design for ATS-focused feedback.",
    tech: ["Python", "Streamlit", "LangChain", "Llama 3"],
    category: "ai-ml",
    logo: "RO",
    liveUrl: "https://ai-resume-diluksha.streamlit.app/",
    image: "/projects/resume.png",
  },
  {
    name: "Salary Estimator (MLOps Pipeline)",
    description:
      "End-to-end ML system with CI/CD, Docker containerization, automated testing, and production deployment.",
    learning:
      "Implemented production MLOps flow with repeatable deployment, testing, and automation.",
    tech: ["Python", "Flask", "Docker", "GitHub Actions", "Render"],
    category: "mlops-infra",
    logo: "SE",
    githubUrl: "https://github.com/Diluksha-Upeka/salary-prediction-mlops",
    liveUrl: "https://salary-prediction-mlops.onrender.com/",
    image: "/projects/mlops.png",
  },
  {
    name: "EV Charging Booking System",
    description:
      "Real-time EV charging booking and tracking system featuring route optimization and live station monitoring.",
    learning:
      "Designed booking and tracking flows with real-time state updates for mobile-first usage.",
    tech: ["React Native", "Node.js", "Socket.io"],
    category: "full-stack",
    logo: "EV",
    githubUrl:
      "https://github.com/Diluksha-Upeka/Electric-Vehicle-Booking-System",
    liveUrl: "https://electric-vehicle-booking-system.vercel.app/",
    image: "/projects/ev.png",
  },
  {
    name: "Live Talk (Encrypted Chat App)",
    description:
      "End-to-end encrypted real-time communication platform with secure file transfer and multi-user channels.",
    learning:
      "Implemented secure real-time communication patterns and channel-based collaboration flows.",
    tech: ["React", "Redis", "Socket.io"],
    category: "real-time",
    logo: "LT",
    githubUrl: "https://github.com/Diluksha-Upeka/Real-time-Chat-App",
    liveUrl: "https://live-talk.onrender.com/",
    image: "/projects/chat.png",
  },
  {
    name: "Voxis",
    description:
      "A voice assistant named Jarvis that records audio, transcribes speech using Whisper, and generates conversational responses with Llama AI.",
    learning:
      "Built speech-to-text and response generation flow for a practical voice-driven assistant.",
    tech: ["Python", "Groq", "Whisper", "sounddevice", "NumPy", "SciPy"],
    category: "ai-ml",
    logo: "VX",
    githubUrl: "https://github.com/Diluksha-Upeka/Voxis",
  },
];

export const JOURNAL_PROJECTS = [
  {
    title: "Engineering Learning Journal",
    description:
      "A comprehensive log of my engineering journey, technical deep dives, and continuous learning.",
    tags: "Markdown / Docs",
    link: "https://github.com/Diluksha-Upeka/learning-journal",
  },
  {
    title: "AI Journal (30 Days of AI)",
    description:
      "Building AI systems from scratch daily: LLM, RAG, Agents, Vision and Analysis.",
    tags: "Python / Jupyter",
    link: "https://github.com/Diluksha-Upeka/AI-Journal.git",
  },
];

export const CURRENT_FOCUS = [
  {
    title: "Building",
    description:
      "Production-grade AI apps with clean APIs, observability, and predictable outputs.",
  },
  {
    title: "Learning",
    description:
      "LLM system prompts, structured JSON extraction, and evaluation for reliability.",
  },
  {
    title: "Open To",
    description:
      "AI/ML engineering, backend systems, and impactful product collaborations.",
  },
];
