"use client";

import { useEffect } from 'react';
import './globals.css';
import NavBar from "./components/navBar";
import Footer from "./components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }

    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />

        {/* Netlify Forms - Hidden from view but detected at build time */}
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>

        <form name="mailing-list" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="mailing-list" />
          <input type="hidden" name="bot-field" />
          <input type="email" name="email" />
        </form>
      </body>
    </html>
  );
}