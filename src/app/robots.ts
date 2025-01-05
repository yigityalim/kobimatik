import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: '/private/',
            },
            {
                userAgent: [
                    'Applebot',
                    'Bingbot',
                    'Slurp',
                    'DuckDuckBot',
                    'Baiduspider',
                    'YandexBot',
                ],
                disallow: ['/'],
            },
        ],
        sitemap: 'https://acme.com/sitemap.xml',
        host: 'https://acme.com',
    };
}
