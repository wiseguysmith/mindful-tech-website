import "./globals.css";
import "./theme.css";
import { ReactNode } from "react";
import SacredBackground from "@/components/SacredBackground";

export const metadata = {
  title: "Mindful Tech - Liberation Tech for the Future",
  description: "AI + Blockchain services for solopreneurs and communities. Building the future of conscious technology.",
  keywords: "AI, blockchain, solopreneurs, communities, conscious technology, liberation tech",
  authors: [{ name: "Mindful Tech" }],
  creator: "Mindful Tech",
  publisher: "Mindful Tech",
  robots: "index, follow",
  openGraph: {
    title: "Mindful Tech - Liberation Tech for the Future",
    description: "AI + Blockchain services for solopreneurs and communities.",
    url: "https://mindfultech.services",
    siteName: "Mindful Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindful Tech - Liberation Tech for the Future",
    description: "AI + Blockchain services for solopreneurs and communities.",
  },
  alternates: {
    canonical: "https://mindfultech.services",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen antialiased overflow-x-hidden bg-black">
        <SacredBackground />
        <main id="main" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
