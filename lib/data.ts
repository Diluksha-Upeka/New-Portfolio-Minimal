export interface Project {
  name: string;
  description: string;
  learning: string;
  tech: string[];
  link: string;
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
  cv: "/cv.pdf",
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
      "Git-based collaboration & CI mindset",
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
    name: "Neurospace",
    description:
      "Built an AI-powered GraphRAG application enabling intelligent document ingestion, media transcription, and interactive knowledge graph visualization. Implemented a chat interface for contextual queries.",
    learning:
      "Designed Graph retrieval-augmented pipelines and orchestrated data processing workflows using multiple AI models.",
    tech: ["Next.js", "FastAPI", "Neo4j", "LlamaIndex"],
    link: "https://github.com/Diluksha-Upeka/Neurospace",
    image: "/projects/neurospace.png",
  },
  {
    name: "End-to-End MLOps Pipeline & Deployment",
    description:
      "Architected a full-stack Machine Learning application with a CI/CD pipeline, Docker containerization, and production deployment on Render Cloud. A real-time salary prediction engine processing bulk requests rapidly.",
    learning:
      "Implemented Containerization (Docker), Automation (GitHub Actions), and Deployment for a production-ready ML workflow.",
    tech: ["Python", "Flask", "Docker", "Render", "GitHub Actions"],
    link: "https://salary-prediction-mlops.onrender.com/",
    image: "/projects/mlops.png",
  },
  {
    name: "Resume Optimizer",
    description:
      "A Streamlit dashboard that parses resumes into JSON and gives an ATS score using Llama 3.",
    learning: "Structured Output (JSON) and system prompts.",
    tech: ["Python", "Streamlit", "LangChain", "Llama 3"],
    link: "https://ai-resume-diluksha.streamlit.app/",
    image: "/projects/resume.png",
  },
  {
    name: "EV Charging Station Management Platform",
    description:
      "Built a full-stack system enabling real-time charger availability, booking, and route-aware station selection. Implemented live updates using WebSockets and designed the backend.",
    learning:
      "Designed real-time systems and managed state consistency across clients.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    link: "https://electric-vehicle-booking-system.vercel.app/",
    image: "/projects/ev.png",
  },
  {
    name: "LiveTalk \u2013 Secure Real-Time Communication",
    description:
      "Designed a multi-user chat system with message flows, and communication using Socket.io.",
    learning:
      "Explored real-time scalability, message synchronization, and user presence management.",
    tech: ["React", "Socket.io"],
    link: "https://live-talk.onrender.com/",
    image: "/projects/chat.png",
  },
  {
    name: "ContextIQ: RAG Document Assistant",
    description:
      "Built a production-ready Retrieval-Augmented Generation (RAG) application enabling semantic search and Q&A over PDF documents. Integrated Google Gemini for high-dimensional embeddings and generation, with Pinecone managing vector storage.",
    learning:
      "Implemented modern RAG architecture using LangChain, mastered handling vector embeddings (3072-dim), and solved production integration challenges like dynamic dimension resizing and namespace management.",
    tech: ["Python", "Streamlit", "Google Gemini", "Pinecone", "LangChain"],
    link: "https://github.com/Diluksha-Upeka/contextiq-rag",
    image: "/projects/contextiq.png",
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
