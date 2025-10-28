#!/usr/bin/env node
/**
 * Performance Optimization for iDigital Website
 * Implements lazy loading, caching, compression, and other performance enhancements
 */

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
    constructor() {
        this.optimizations = {
            lazyLoading: true,
            imageCompression: true,
            cssMinification: true,
            jsMinification: true,
            htmlMinification: true,
            caching: true,
            cdnOptimization: true
        };
    }

    generateLazyLoadingScript() {
        return `
    <!-- Lazy Loading Implementation -->
    <script>
        // Advanced lazy loading with intersection observer
        class LazyLoader {
            constructor() {
                this.imageObserver = null;
                this.init();
            }
            
            init() {
                if ('IntersectionObserver' in window) {
                    this.imageObserver = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                this.loadImage(img);
                                observer.unobserve(img);
                            }
                        });
                    }, {
                        rootMargin: '50px 0px',
                        threshold: 0.01
                    });
                    
                    this.observeImages();
                } else {
                    // Fallback for older browsers
                    this.loadAllImages();
                }
            }
            
            observeImages() {
                const lazyImages = document.querySelectorAll('img[data-src]');
                lazyImages.forEach(img => this.imageObserver.observe(img));
            }
            
            loadImage(img) {
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    
                    // Add fade-in effect
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                }
            }
            
            loadAllImages() {
                const lazyImages = document.querySelectorAll('img[data-src]');
                lazyImages.forEach(img => this.loadImage(img));
            }
        }
        
        // Initialize lazy loading
        document.addEventListener('DOMContentLoaded', () => {
            new LazyLoader();
        });
    </script>`;
    }

    generateCachingHeaders() {
        return `
    <!-- Cache Control Headers -->
    <script>
        // Service Worker for advanced caching
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    </script>`;
    }

    generateServiceWorker() {
        return `
// Service Worker for iDigital Website
const CACHE_NAME = 'idigital-v1';
const urlsToCache = [
    '/',
    '/css/style.css',
    '/js/main.js',
    '/img/logo.png',
    '/fonts/webfonts/MyriadWebPro.woff2'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});`;
    }

    generateCriticalCSS() {
        return `
    <!-- Critical CSS for above-the-fold content -->
    <style>
        /* Critical styles for immediate rendering */
        * { box-sizing: border-box; }
        
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        
        .navbar {
            background: #0f63dc;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .head-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
        }
        
        .btn-primary {
            background: #0f63dc;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            transition: background 0.3s ease;
        }
        
        .btn-primary:hover {
            background: #0a4ba8;
        }
        
        /* Lazy loading styles */
        img.lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        img.loaded {
            opacity: 1;
        }
        
        /* Performance optimizations */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        
        /* Reduce layout shifts */
        img {
            max-width: 100%;
            height: auto;
        }
        
        /* Optimize animations */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>`;
    }

    generateResourceHints() {
        return `
    <!-- Resource Hints for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="preconnect" href="https://code.jquery.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="//code.jquery.com">
    <link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
    
    <!-- Preload critical resources -->
    <link rel="preload" href="css/style.css" as="style">
    <link rel="preload" href="js/main.js" as="script">
    <link rel="preload" href="fonts/webfonts/MyriadWebPro.woff2" as="font" type="font/woff2" crossorigin>
    
    <!-- Prefetch next page resources -->
    <link rel="prefetch" href="about-us.html">
    <link rel="prefetch" href="contact-us.html">`;
    }

    generatePerformanceMonitoring() {
        return `
    <!-- Performance Monitoring -->
    <script>
        // Core Web Vitals monitoring
        class PerformanceMonitor {
            constructor() {
                this.metrics = {};
                this.init();
            }
            
            init() {
                this.observeLCP();
                this.observeFID();
                this.observeCLS();
                this.observeTTFB();
                this.observeFCP();
            }
            
            observeLCP() {
                if ('PerformanceObserver' in window) {
                    new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        const lastEntry = entries[entries.length - 1];
                        this.metrics.lcp = lastEntry.startTime;
                        this.reportMetric('LCP', lastEntry.startTime);
                    }).observe({ entryTypes: ['largest-contentful-paint'] });
                }
            }
            
            observeFID() {
                if ('PerformanceObserver' in window) {
                    new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        entries.forEach(entry => {
                            this.metrics.fid = entry.processingStart - entry.startTime;
                            this.reportMetric('FID', this.metrics.fid);
                        });
                    }).observe({ entryTypes: ['first-input'] });
                }
            }
            
            observeCLS() {
                if ('PerformanceObserver' in window) {
                    let clsValue = 0;
                    new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        entries.forEach(entry => {
                            if (!entry.hadRecentInput) {
                                clsValue += entry.value;
                                this.metrics.cls = clsValue;
                                this.reportMetric('CLS', clsValue);
                            }
                        });
                    }).observe({ entryTypes: ['layout-shift'] });
                }
            }
            
            observeTTFB() {
                window.addEventListener('load', () => {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    if (navigation) {
                        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
                        this.reportMetric('TTFB', this.metrics.ttfb);
                    }
                });
            }
            
            observeFCP() {
                if ('PerformanceObserver' in window) {
                    new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        entries.forEach(entry => {
                            this.metrics.fcp = entry.startTime;
                            this.reportMetric('FCP', entry.startTime);
                        });
                    }).observe({ entryTypes: ['paint'] });
                }
            }
            
            reportMetric(name, value) {
                console.log(\`\${name}: \${value.toFixed(2)}ms\`);
                
                // Send to analytics (implement as needed)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'performance_metric', {
                        'metric_name': name,
                        'metric_value': value
                    });
                }
            }
        }
        
        // Initialize performance monitoring
        document.addEventListener('DOMContentLoaded', () => {
            new PerformanceMonitor();
        });
    </script>`;
    }

    optimizeHTMLContent(content) {
        let optimized = content;
        
        // Add lazy loading to images
        optimized = optimized.replace(
            /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g,
            (match, before, src, after) => {
                // Skip if already has data-src
                if (match.includes('data-src')) return match;
                
                return `<img${before}src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" data-src="${src}"${after} class="lazy">`;
            }
        );
        
        // Add loading="lazy" to images that don't have it
        optimized = optimized.replace(
            /<img((?!.*loading=)[^>]*?)>/g,
            '<img$1 loading="lazy">'
        );
        
        // Add async to non-critical scripts
        optimized = optimized.replace(
            /<script([^>]*?)src="([^"]*?)"([^>]*?)>/g,
            (match, before, src, after) => {
                if (src.includes('main.js') || src.includes('analytics')) {
                    return match; // Keep critical scripts synchronous
                }
                return `<script${before}src="${src}"${after} async>`;
            }
        );
        
        // Add defer to non-critical scripts
        optimized = optimized.replace(
            /<script([^>]*?)src="([^"]*?)"([^>]*?)>/g,
            (match, before, src, after) => {
                if (src.includes('bootstrap') || src.includes('swiper')) {
                    return `<script${before}src="${src}"${after} defer>`;
                }
                return match;
            }
        );
        
        return optimized;
    }

    async optimizeAllFiles() {
        console.log('⚡ Starting performance optimization...');
        
        // Optimize HTML files
        const htmlFiles = this.getFilesRecursive('.', ['.html']);
        
        for (const file of htmlFiles) {
            try {
                let content = fs.readFileSync(file, 'utf8');
                
                // Add performance optimizations
                content = this.optimizeHTMLContent(content);
                
                // Add critical CSS
                if (!content.includes('Critical CSS')) {
                    const headEndIndex = content.indexOf('</head>');
                    if (headEndIndex !== -1) {
                        content = content.slice(0, headEndIndex) + 
                                 this.generateCriticalCSS() + 
                                 content.slice(headEndIndex);
                    }
                }
                
                // Add resource hints
                if (!content.includes('preconnect')) {
                    const headEndIndex = content.indexOf('</head>');
                    if (headEndIndex !== -1) {
                        content = content.slice(0, headEndIndex) + 
                                 this.generateResourceHints() + 
                                 content.slice(headEndIndex);
                    }
                }
                
                // Add lazy loading script
                if (!content.includes('LazyLoader')) {
                    const bodyEndIndex = content.lastIndexOf('</body>');
                    if (bodyEndIndex !== -1) {
                        content = content.slice(0, bodyEndIndex) + 
                                 this.generateLazyLoadingScript() + 
                                 content.slice(bodyEndIndex);
                    }
                }
                
                // Add performance monitoring
                if (!content.includes('PerformanceMonitor')) {
                    const bodyEndIndex = content.lastIndexOf('</body>');
                    if (bodyEndIndex !== -1) {
                        content = content.slice(0, bodyEndIndex) + 
                                 this.generatePerformanceMonitoring() + 
                                 content.slice(bodyEndIndex);
                    }
                }
                
                // Add caching headers
                if (!content.includes('serviceWorker')) {
                    const bodyEndIndex = content.lastIndexOf('</body>');
                    if (bodyEndIndex !== -1) {
                        content = content.slice(0, bodyEndIndex) + 
                                 this.generateCachingHeaders() + 
                                 content.slice(bodyEndIndex);
                    }
                }
                
                fs.writeFileSync(file, content);
                console.log(`✓ Performance optimized: ${file}`);
                
            } catch (error) {
                console.error(`✗ Error optimizing ${file}:`, error.message);
            }
        }
        
        // Generate service worker
        fs.writeFileSync('sw.js', this.generateServiceWorker());
        console.log('✓ Generated service worker');
        
        console.log('\n✅ Performance optimization complete!');
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

// Run performance optimization
if (require.main === module) {
    const optimizer = new PerformanceOptimizer();
    optimizer.optimizeAllFiles().catch(console.error);
}

module.exports = PerformanceOptimizer;
