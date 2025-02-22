import { globby } from 'globby';

export const runtime = 'edge'; // Edge Runtime'ı aktif et

export default async function handler(req) {
  const BASE_URL = 'https://syntech.com';
  
  // Tüm sayfaları bul
  const pages = await globby([
    'src/pages/**/*.{js,jsx}',
    '!src/pages/_*.{js,jsx}',
    '!src/pages/api',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/pages', '')
            .replace(/\.jsx?$/, '')
            .replace(/\/index$/, '');
          
          return `
            <url>
              <loc>${BASE_URL}${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  // Edge Runtime için Response API'sini kullan
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}