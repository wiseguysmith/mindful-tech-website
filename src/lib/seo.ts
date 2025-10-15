export const baseUrl = "https://mindfultech.services";

export const seo = {
  title: "Mindful Tech — Liberation tech for the next generation",
  description: "We build ethical infrastructure that turns real-world value into programmable opportunity.",
  keywords: [
    "mindful technology",
    "ethical infrastructure", 
    "conscious tech",
    "real-world assets",
    "blockchain infrastructure",
    "sustainable technology",
    "liberation tech"
  ],
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Mindful Tech",
    description: "Ethical infrastructure for real-world value.",
    siteName: "Mindful Tech",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mindful Tech - Liberation tech for the next generation"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindfultech",
    creator: "@mindfultech",
    images: ["/og.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const getOrgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mindful Tech",
  url: baseUrl,
  logo: `${baseUrl}/logo/mindfultech_logo_color.svg`,
  description: seo.description,
  foundingDate: "2024",
  sameAs: [
    "https://twitter.com/mindfultech",
    "https://linkedin.com/company/mindfultech"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@mindfultech.org",
    contactType: "customer service"
  }
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mindful Tech",
  url: baseUrl,
  description: seo.description,
  publisher: {
    "@type": "Organization",
    name: "Mindful Tech"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

