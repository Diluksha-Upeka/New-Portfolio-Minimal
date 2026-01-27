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
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-900 dark:text-zen-50">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-zen-600 dark:text-zen-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zen-100 dark:bg-zen-800">
                    <Icon className="w-6 h-6 text-zen-700 dark:text-zen-300" />
                  </div>
                  <div>
                    <p className="text-sm text-zen-600 dark:text-zen-400 mb-1">
                      {item.label}
                    </p>
                    <p className="font-medium text-zen-900 dark:text-zen-50">
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
                  className="glass glass-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
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
          className="text-center glass glass-border rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zen-900 dark:text-zen-50">
            Open to Opportunities
          </h2>
          <p className="text-zen-600 dark:text-zen-400 mb-6 max-w-2xl mx-auto">
            I'm currently available for freelance projects, full-time positions,
            or collaboration on interesting ideas. Let's create something
            amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="px-6 py-3 glass glass-border rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zen-900 dark:bg-zen-100 text-white dark:text-zen-900 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
