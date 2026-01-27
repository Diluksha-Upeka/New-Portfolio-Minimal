// GitHub API Integration
// Replace 'YOUR_USERNAME' with your actual GitHub username

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  fork: boolean;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

const GITHUB_USERNAME = 'UpekaDiluksha'; // Replace with your GitHub username
const GITHUB_API = 'https://api.github.com';

/**
 * Fetches repositories from GitHub API
 * @param username - GitHub username (defaults to GITHUB_USERNAME)
 * @param limit - Maximum number of repos to fetch
 * @returns Array of GitHub repositories
 */
export async function getGitHubRepos(
  username: string = GITHUB_USERNAME,
  limit: number = 6
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=${limit}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and repos without descriptions
    return repos
      .filter((repo) => !repo.fork && repo.description)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Fetches a single repository by name
 */
export async function getGitHubRepo(
  repoName: string,
  username: string = GITHUB_USERNAME
): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${username}/${repoName}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repo:', error);
    return null;
  }
}

/**
 * Fetches GitHub user profile information
 */
export async function getGitHubUser(username: string = GITHUB_USERNAME) {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}
