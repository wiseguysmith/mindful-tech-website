import "./globals.css";
import "./theme.css";
import { ReactNode } from "react";
import { seo, getOrgSchema, getWebsiteSchema } from "@/lib/seo";
import SacredBackground from "@/components/SacredBackground";
import InteractiveCursor from "@/components/InteractiveCursor";
import AdvancedParticles from "@/components/AdvancedParticles";
import NeuralNetwork from "@/components/NeuralNetwork";
import MorphingBlobs from "@/components/MorphingBlobs";
import DataStream from "@/components/DataStream";
import SkipToContent from "@/components/SkipToContent";
import ProgressBar from "@/components/ProgressBar";

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: "Mindful Tech" }],
  creator: "Mindful Tech",
  publisher: "Mindful Tech",
  robots: seo.robots,
  openGraph: seo.openGraph,
  twitter: seo.twitter,
  alternates: {
    canonical: seo.openGraph.url,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrgSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body className="relative min-h-screen antialiased overflow-x-hidden">
        <SkipToContent />
        <ProgressBar />
        <SacredBackground />
        <NeuralNetwork />
        <MorphingBlobs />
        <AdvancedParticles />
        <DataStream />
        <InteractiveCursor />
        <main id="main">
          {children}
        </main>
      </body>
    </html>
  );
}
