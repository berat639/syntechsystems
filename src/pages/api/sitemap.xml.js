// pages/api/sitemap.xml.js

// Edge runtime konfigürasyonunu kaldırdık
// export const config = { runtime: 'edge' };

const pages = [
  {
    url: '',  // ana sayfa
    changefreq: 'daily',
    priority: 1.0
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/business-upgrade',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/global-outreach',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/news',
    changefreq: 'daily',
    priority: 0.9
  },
  {
    url: '/portfolio',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/solutions',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/success-stories',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/team',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/tenders',
    changefreq: 'daily',
    priority: 0.9
  }
];

export default function handler(req, res) {
  // Base URL'i ayarlayın
  const BASE_URL = 'https://syntech-alpererdener.pages.dev';
  
  // XML oluştur
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages
        .map(({ url, changefreq, priority }) => {
          return `
            <url>
              <loc>${BASE_URL}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `.trim();
        })
        .join('\n')}
    </urlset>`.trim();

  // Response header'larını ayarla
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.setHeader('X-Robots-Tag', 'noindex');
  
  // XML içeriğini gönder
  res.send(sitemap);
}