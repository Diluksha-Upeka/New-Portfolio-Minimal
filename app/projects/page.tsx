import { getGitHubRepos } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getGitHubRepos();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-900 dark:text-zen-50">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-zen-600 dark:text-zen-400 max-w-2xl mx-auto">
            A curated selection of my recent work. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-zen-600 dark:text-zen-400 text-lg">
              No projects found. Update your GitHub username in{" "}
              <code className="px-2 py-1 bg-zen-100 dark:bg-zen-800 rounded">
                lib/github.ts
              </code>
            </p>
          </div>
        )}

        {/* View More on GitHub */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Diluksha-Upeka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass glass-border rounded-full font-medium hover:scale-105 transition-transform duration-300"
          >
            View More on GitHub
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
