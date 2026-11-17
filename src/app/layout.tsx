import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ui/theme-provider";
import { ReadingProgress } from "@/components/ui/reading-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Manu Bhargav Srirangarajan — Senior Software Engineer",
  description:
    "Portfolio of Manu Bhargav Srirangarajan, Senior Software Engineer at Amazon. React frontend and Python REST APIs.",
  openGraph: {
    title: "Manu Bhargav Srirangarajan — Senior Software Engineer",
    description: "Personal portfolio showcasing projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-accent-foreground">
        <ThemeProvider>
          <ReadingProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
