import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata: Metadata = {
  title: "Upeka Diluksha | Portfolio",
  description: "Computer Engineering Undergraduate & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="max-w-3xl mx-auto px-6 py-6 md:py-8 min-h-screen selection:bg-zen-surface bg-zen-bg text-zen-text relative">
        <div className="fixed inset-0 z-[-1] bg-grid-zen pointer-events-none" />
        <header className="mb-12 flex justify-between items-baseline">
          <a href="/" className="font-heading text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
            UD.
          </a>
          <nav className="flex gap-6 text-sm font-medium text-zen-subtext">
            <a href="#tech" className="hover:text-zen-text transition-colors">Tech</a>
            <a href="#work" className="hover:text-zen-text transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zen-text transition-colors">Projects</a>
            <a href="mailto:dilukshaupeka@gmail.com" className="hover:text-zen-text transition-colors">Contact</a>
          </nav>
        </header>
        <main className="fade-in">
          {children}
        </main>
        <ScrollToTop />
        <footer className="mt-32 pt-12 border-t border-zen-surface text-sm text-zen-subtext flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Upeka Diluksha</p>
          <div className="flex gap-6">
             <a href="https://github.com/Diluksha-Upeka" target="_blank" className="hover:text-zen-text">GitHub</a>
             <a href="https://www.linkedin.com/in/upeka-diluksha" target="_blank" className="hover:text-zen-text">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
