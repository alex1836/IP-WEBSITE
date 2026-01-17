const fs = require('fs');
const path = require('path');

// Load blog posts
const posts = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/blogPosts.json'), 'utf8'));

const baseUrl = 'https://deiptv8k.com';
const staticPages = [
    '',
    '/packages',
    '/guide',
    '/faq-page',
    '/contact',
    '/blog',
    '/about',
    '/reseller'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>\n`;
});

// Add blog posts
posts.forEach(post => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('✅ Sitemap.xml updated successfully with ' + posts.length + ' blog posts!');
