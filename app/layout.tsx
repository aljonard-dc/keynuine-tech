import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeyNuine Tech",
  description:
    "KeyNuine Tech specializes in innovative web and game development solutions, delivering high-quality digital experiences.",
  
    keywords: [
    "KeyNuine Tech",
    "KeyNuine",
    "Aljonard Dela Cruz",
    "Johnrey Luntayao",
    "John Cloyd Refani",
    "Portfolio",
    "Web Developer",
    "Next.js Developer",
    "Next.js Developer Philippines",
    "Next.js Developer PH",
    "React Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Game Developer",
    "Software Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Vercel",
    "HTML",
    "CSS",
    "Node.js",
    "PHP",
    "MySQL",
    "MongoDB",
  ],
  authors: [
    { name: "Aljonard Dela Cruz" },
    { name: "Johnrey Luntayao" },
    { name: "John Cloyd Refani" },
  ],
  creator: "KeyNuine Tech",
  publisher: "KeyNuine Tech",
  metadataBase: new URL("https://keynuine-tech.vercel.app"),
  alternates: {
    canonical: "https://keynuine-tech.vercel.app",
  },
   verification: {
    google: "UdEfdHVLhOaneR0uEH0AEv-2ehy8ezPelzhJ9l7t62s",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/KeyNuine.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.png"],
  },
  openGraph: {
    title: "KeyNuine Tech",
    description:
      "Innovative web and game development solutions crafted by KeyNuine Tech.",
    url: "https://keynuine-tech.vercel.app",
    siteName: "KeyNuine Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KeyNuine Tech - Web and Game Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "technology",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
