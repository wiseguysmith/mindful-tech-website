import { seo } from "@/lib/seo";

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${seo.openGraph.url}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "content-type": "text/plain",
    },
  });
}

