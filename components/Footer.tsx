import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="glass glass-border border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zen-600 dark:text-zen-400 hover:text-zen-900 dark:hover:text-zen-100 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-zen-600 dark:text-zen-400">
            © {new Date().getFullYear()} Zen Portfolio. Crafted with minimalism.
          </p>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link
              href="/"
              className="text-zen-600 dark:text-zen-400 hover:text-zen-900 dark:hover:text-zen-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-zen-600 dark:text-zen-400 hover:text-zen-900 dark:hover:text-zen-100 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-zen-600 dark:text-zen-400 hover:text-zen-900 dark:hover:text-zen-100 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-zen-600 dark:text-zen-400 hover:text-zen-900 dark:hover:text-zen-100 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
