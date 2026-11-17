"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      ref={ref}
      id="contact"
      className="px-6 py-24 bg-card border-y border-border pb-32"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground">Let&apos;s Chat</h2>
          <p className="text-muted-foreground mt-2">
            Have a question or want to work together? Drop me a message.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
            <p className="text-muted-foreground mt-2">
              Thank you for reaching out. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="1c16478a-6746-4ee4-ab1a-75f5631bf5fb"
            />
            <input
              type="hidden"
              name="subject"
              value="New contact from portfolio"
            />
            <input
              type="hidden"
              name="from_name"
              value="Portfolio Contact Form"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Tell me about your project or role..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3 text-accent-foreground font-medium hover:bg-primary-hover transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <footer className="mt-16 border-t border-border pt-8 text-center">
        <p className="text-muted-foreground text-sm">
          Manu Bhargav Srirangarajan. Built with Next.js, Tailwind, and Motion.
        </p>
      </footer>
    </section>
  );
}
