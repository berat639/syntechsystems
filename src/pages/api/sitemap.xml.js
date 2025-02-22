export const runtime = 'edge';

// Sayfalarınızı burada manuel olarak listeleyin
const pages = [
  '',  // ana sayfa
  '/about',
  '/team',
  // diğer sayfalarınızı ekleyin
];

export default async function handler(req) {
  const BASE_URL = 'https://syntech.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${BASE_URL}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  });
}