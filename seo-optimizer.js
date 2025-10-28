#!/usr/bin/env node
/**
 * SEO and Performance Optimization for iDigital Website
 * Adds comprehensive meta tags, structured data, and performance enhancements
 */

const fs = require('fs');
const path = require('path');

class SEOOptimizer {
    constructor() {
        this.seoData = {
            title: "iDigital - Professional Data Recovery & Repair Services",
            description: "Professional data recovery and repair services for smartphones, computers, game consoles, and more. Same-day repairs with lifetime warranty. #1 Rated in Louisiana.",
            keywords: "data recovery, phone repair, computer repair, game console repair, smartphone repair, tablet repair, laptop repair, Louisiana, New Orleans",
            author: "iDigital",
            robots: "index, follow",
            canonical: "https://idigital.com",
            ogImage: "https://idigital.com/assets/images/og-image.jpg"
        };
    }

    generateMetaTags() {
        return `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${this.seoData.description}">
    <meta name="keywords" content="${this.seoData.keywords}">
    <meta name="author" content="${this.seoData.author}">
    <meta name="robots" content="${this.seoData.robots}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${this.seoData.title}">
    <meta property="og:description" content="${this.seoData.description}">
    <meta property="og:image" content="${this.seoData.ogImage}">
    <meta property="og:url" content="${this.seoData.canonical}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="iDigital">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${this.seoData.title}">
    <meta name="twitter:description" content="${this.seoData.description}">
    <meta name="twitter:image" content="${this.seoData.ogImage}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${this.seoData.canonical}">
    
    <!-- Performance Meta Tags -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#0f63dc">
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="preconnect" href="https://code.jquery.com">
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="//code.jquery.com">`;
    }

    generateStructuredData() {
        return `
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "iDigital",
        "description": "Professional data recovery and repair services for smartphones, computers, game consoles, and more.",
        "url": "https://idigital.com",
        "telephone": "+1(504)342-9109",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1851 Rousseau st",
            "addressLocality": "New Orleans",
            "addressRegion": "LA",
            "postalCode": "70130",
            "addressCountry": "USA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "29.9511",
            "longitude": "-90.0715"
        },
        "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-17:00",
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        },
        "sameAs": [
            "https://www.facebook.com/idigital",
            "https://www.twitter.com/idigital",
            "https://www.instagram.com/idigital",
            "https://www.linkedin.com/company/idigital"
        ],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "29.9511",
                "longitude": "-90.0715"
            },
            "geoRadius": "50000"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Repair Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Smartphone Repair",
                        "description": "Professional smartphone repair services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Data Recovery",
                        "description": "Professional data recovery services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Computer Repair",
                        "description": "Computer and laptop repair services"
                    }
                }
            ]
        }
    }
    </script>`;
    }

    generatePerformanceOptimizations() {
        return `
    <!-- Performance Optimizations -->
    <link rel="preload" href="css/style.css" as="style">
    <link rel="preload" href="js/main.js" as="script">
    <link rel="preload" href="fonts/webfonts/MyriadWebPro.woff2" as="font" type="font/woff2" crossorigin>
    
    <!-- Critical CSS inline -->
    <style>
        /* Critical above-the-fold styles */
        .loader { display: flex; justify-content: center; align-items: center; height: 100vh; }
        .navbar { background: #0f63dc; }
        .head-title { font-size: 2.5rem; font-weight: 700; color: #fff; }
        .btn-primary { background: #0f63dc; border: none; padding: 12px 24px; }
    </style>
    
    <!-- Lazy loading for images -->
    <script>
        // Lazy loading implementation
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        });
    </script>`;
    }

    generateSitemap() {
        const pages = [
            { url: '/', priority: '1.0', changefreq: 'daily' },
            { url: '/about-us.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/contact-us.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/smartphone.html', priority: '0.9', changefreq: 'weekly' },
            { url: '/computer.html', priority: '0.9', changefreq: 'weekly' },
            { url: '/laptop.html', priority: '0.9', changefreq: 'weekly' },
            { url: '/tablet.html', priority: '0.9', changefreq: 'weekly' },
            { url: '/game-console-repair.html', priority: '0.8', changefreq: 'weekly' },
            { url: '/repair-service.html', priority: '0.8', changefreq: 'weekly' },
            { url: '/pricing.html', priority: '0.7', changefreq: 'monthly' }
        ];

        let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        
        pages.forEach(page => {
            sitemap += `  <url>\n`;
            sitemap += `    <loc>https://idigital.com${page.url}</loc>\n`;
            sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
            sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
            sitemap += `    <priority>${page.priority}</priority>\n`;
            sitemap += `  </url>\n`;
        });
        
        sitemap += '</urlset>';
        
        return sitemap;
    }

    generateRobotsTxt() {
        return `User-agent: *
Allow: /

Sitemap: https://idigital.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /js/
Disallow: /css/`;
    }

    async optimizeHTML(filePath) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Add meta tags if not present
            if (!content.includes('meta name="description"')) {
                const headEndIndex = content.indexOf('</head>');
                if (headEndIndex !== -1) {
                    content = content.slice(0, headEndIndex) + 
                             this.generateMetaTags() + 
                             this.generatePerformanceOptimizations() +
                             content.slice(headEndIndex);
                }
            }
            
            // Add structured data before closing body tag
            if (!content.includes('application/ld+json')) {
                const bodyEndIndex = content.lastIndexOf('</body>');
                if (bodyEndIndex !== -1) {
                    content = content.slice(0, bodyEndIndex) + 
                             this.generateStructuredData() + 
                             content.slice(bodyEndIndex);
                }
            }
            
            // Add lazy loading to images
            content = content.replace(/<img([^>]*?)src="([^"]*?)"([^>]*?)>/g, 
                '<img$1src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'%3E%3C/svg%3E" data-src="$2"$3 class="lazy">');
            
            // Add alt attributes to images without them
            content = content.replace(/<img([^>]*?)(?!alt=)([^>]*?)>/g, 
                '<img$1 alt="iDigital Service"$2>');
            
            fs.writeFileSync(filePath, content);
            console.log(`✓ SEO optimized: ${filePath}`);
            return true;
        } catch (error) {
            console.error(`✗ Error optimizing ${filePath}:`, error.message);
            return false;
        }
    }

    async generateSitemapAndRobots() {
        // Generate sitemap.xml
        fs.writeFileSync('sitemap.xml', this.generateSitemap());
        console.log('✓ Generated sitemap.xml');
        
        // Generate robots.txt
        fs.writeFileSync('robots.txt', this.generateRobotsTxt());
        console.log('✓ Generated robots.txt');
    }

    async optimizeAllHTML() {
        console.log('🔍 Starting SEO optimization...');
        
        const htmlFiles = this.getFilesRecursive('.', ['.html']);
        
        for (const file of htmlFiles) {
            await this.optimizeHTML(file);
        }
        
        await this.generateSitemapAndRobots();
        
        console.log('\n✅ SEO optimization complete!');
    }

    getFilesRecursive(dirPath, extensions) {
        const files = [];
        
        if (!fs.existsSync(dirPath)) {
            return files;
        }
        
        const items = fs.readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && !item.startsWith('.')) {
                files.push(...this.getFilesRecursive(fullPath, extensions));
            } else if (extensions.some(ext => item.endsWith(ext))) {
                files.push(fullPath);
            }
        }
        
        return files;
    }
}

// Run SEO optimization
if (require.main === module) {
    const seoOptimizer = new SEOOptimizer();
    seoOptimizer.optimizeAllHTML().catch(console.error);
}

module.exports = SEOOptimizer;
