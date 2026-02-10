import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

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
      <body className="relative mx-auto min-h-screen max-w-3xl bg-zen-bg px-6 pb-10 pt-6 text-zen-text selection:bg-zen-surface">
        <SmoothScroll>
          <div className="noise-bg" />
          <div className="bg-grid-zen pointer-events-none fixed inset-0 z-[-1]" />
          <Navbar />
          <main className="fade-in pt-24 md:pt-32">{children}</main>
          <ScrollToTop />
          <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-zen-surface pt-8 text-sm text-zen-subtext md:flex-row">
            <p>© {new Date().getFullYear()} Upeka Diluksha</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Diluksha-Upeka"
                target="_blank"
                className="hover:text-zen-text"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/upeka-diluksha"
                target="_blank"
                className="hover:text-zen-text"
              >
                LinkedIn
              </a>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
