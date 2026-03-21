import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindfultech.services'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/case-studies',
    '/contact',
    '/doconnect',
    '/doconnect/apply',
    '/faq',
    '/industries',
    '/process',
    '/solutions',
    '/tokenization',
    '/privacy',
    '/terms',
  ]

  return staticRoutes.map((path) => ({
    url: `${BASE_URL}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
