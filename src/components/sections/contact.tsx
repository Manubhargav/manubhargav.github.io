"use client";

import { motion, useInView } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-card border-t border-border">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-foreground"
        >
          Let&apos;s Chat
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-muted-foreground mt-2"
        >
          Have a question or want to work together? Drop me a message.
        </motion.p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-10 space-y-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="1c16478a-6746-4ee4-ab1a-75f5631bf5fb"
          />
          <input type="hidden" name="subject" value="New contact from portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

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
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors hover:bg-primary/5"
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
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors hover:bg-primary/5"
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
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors hover:bg-primary/5"
              placeholder="Tell me about your project or role..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-6 py-3 text-accent-foreground font-medium hover:bg-primary-hover hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
