import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

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
        <div className="noise-bg" />
        <div className="fixed inset-0 z-[-1] bg-grid-zen pointer-events-none" />
        <Navbar />
        <main className="fade-in pt-24">
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
