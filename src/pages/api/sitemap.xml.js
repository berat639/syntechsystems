import { globby } from 'globby';

const sitemapXml = async (req, res) => {
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

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
};

export default sitemapXml;