"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-zen-900 dark:text-zen-50 mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Let&apos;s Connect
          </h1>
          <p className="text-zen-600 dark:text-zen-400 mx-auto max-w-2xl text-lg md:text-xl">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 lg:col-span-1"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <div className="bg-zen-100 dark:bg-zen-800 rounded-xl p-3">
                    <Icon className="text-zen-700 dark:text-zen-300 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-zen-600 dark:text-zen-400 mb-1 text-sm">
                      {item.label}
                    </p>
                    <p className="text-zen-900 dark:text-zen-50 font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass glass-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass glass-border rounded-3xl p-8 text-center md:p-12"
        >
          <h2 className="text-zen-900 dark:text-zen-50 mb-4 text-2xl font-bold md:text-3xl">
            Open to Opportunities
          </h2>
          <p className="text-zen-600 dark:text-zen-400 mx-auto mb-6 max-w-2xl">
            I&apos;m currently available for freelance projects, full-time
            positions, or collaboration on interesting ideas. Let&apos;s create
            something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="glass glass-border rounded-full px-6 py-3 font-medium transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zen-900 dark:bg-zen-100 dark:text-zen-900 rounded-full px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
