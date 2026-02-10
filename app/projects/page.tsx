import { getGitHubRepos } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getGitHubRepos();

  return (
    <div className="min-h-screen px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-zen-900 dark:text-zen-50 mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Featured Projects
          </h1>
          <p className="text-zen-600 dark:text-zen-400 mx-auto max-w-2xl text-lg md:text-xl">
            A curated selection of my recent work. Each project represents a
            unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-zen-600 dark:text-zen-400 text-lg">
              No projects found. Update your GitHub username in{" "}
              <code className="bg-zen-100 dark:bg-zen-800 rounded px-2 py-1">
                lib/github.ts
              </code>
            </p>
          </div>
        )}

        {/* View More on GitHub */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Diluksha-Upeka"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-border inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-transform duration-300 hover:scale-105"
          >
            View More on GitHub
            <svg
              className="h-5 w-5"
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
