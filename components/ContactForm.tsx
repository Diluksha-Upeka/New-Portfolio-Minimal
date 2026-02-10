"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="glass glass-border mx-auto max-w-2xl rounded-3xl p-8 md:p-12"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="py-12 text-center"
        >
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h3 className="text-zen-900 dark:text-zen-50 mb-2 text-2xl font-bold">
            Message Sent!
          </h3>
          <p className="text-zen-600 dark:text-zen-400">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="text-zen-700 dark:text-zen-300 mb-2 block text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="glass glass-border focus:ring-zen-400 text-zen-900 dark:text-zen-50 w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-zen-700 dark:text-zen-300 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="glass glass-border focus:ring-zen-400 text-zen-900 dark:text-zen-50 w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="text-zen-700 dark:text-zen-300 mb-2 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="glass glass-border focus:ring-zen-400 text-zen-900 dark:text-zen-50 w-full resize-none rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-zen-900 dark:bg-zen-100 dark:text-zen-900 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <div className="dark:border-zen-900 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </motion.button>
        </div>
      )}
    </motion.form>
  );
}
