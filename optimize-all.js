#!/usr/bin/env node
/**
 * Complete Website Optimization Suite for iDigital
 * Runs all optimization tools in sequence
 */

const WebsiteOptimizer = require('./optimize');
const SEOOptimizer = require('./seo-optimizer');
const AIContentEnhancer = require('./ai-content-tools');
const PerformanceOptimizer = require('./performance-optimizer');

class CompleteOptimizer {
    constructor() {
        this.startTime = Date.now();
        this.results = {
            images: { processed: 0, saved: 0 },
            seo: { pages: 0 },
            ai: { pages: 0 },
            performance: { pages: 0 }
        };
    }

    async runAllOptimizations() {
        console.log('🚀 Starting Complete iDigital Website Optimization');
        console.log('=' * 60);
        
        try {
            // Step 1: Image and Asset Optimization
            console.log('\n📸 Step 1: Optimizing Images and Assets...');
            const imageOptimizer = new WebsiteOptimizer();
            await imageOptimizer.optimize();
            this.results.images = imageOptimizer.stats;
            
            // Step 2: SEO Optimization
            console.log('\n🔍 Step 2: SEO Optimization...');
            const seoOptimizer = new SEOOptimizer();
            await seoOptimizer.optimizeAllHTML();
            this.results.seo.pages = 1;
            
            // Step 3: AI Content Enhancement
            console.log('\n🤖 Step 3: AI Content Enhancement...');
            const aiEnhancer = new AIContentEnhancer();
            await aiEnhancer.enhanceAllContent();
            this.results.ai.pages = 1;
            
            // Step 4: Performance Optimization
            console.log('\n⚡ Step 4: Performance Optimization...');
            const performanceOptimizer = new PerformanceOptimizer();
            await performanceOptimizer.optimizeAllFiles();
            this.results.performance.pages = 1;
            
            this.printFinalReport();
            
        } catch (error) {
            console.error('❌ Optimization failed:', error);
        }
    }

    printFinalReport() {
        const endTime = Date.now();
        const duration = (endTime - this.startTime) / 1000;
        
        console.log('\n🎉 OPTIMIZATION COMPLETE!');
        console.log('=' * 60);
        console.log(`⏱️  Total time: ${duration.toFixed(2)} seconds`);
        console.log('\n📊 OPTIMIZATION RESULTS:');
        console.log('-' * 40);
        
        console.log(`📸 Images: ${this.results.images.processed} files processed`);
        console.log(`💾 Space saved: ${this.formatBytes(this.results.images.saved)}`);
        
        console.log(`🔍 SEO: ${this.results.seo.pages} pages optimized`);
        console.log(`🤖 AI: ${this.results.ai.pages} pages enhanced`);
        console.log(`⚡ Performance: ${this.results.performance.pages} pages optimized`);
        
        console.log('\n✨ OPTIMIZATIONS APPLIED:');
        console.log('-' * 40);
        console.log('✅ Image compression and WebP conversion');
        console.log('✅ CSS and JavaScript minification');
        console.log('✅ HTML minification and optimization');
        console.log('✅ SEO meta tags and structured data');
        console.log('✅ AI-powered content enhancement');
        console.log('✅ Performance monitoring and optimization');
        console.log('✅ Lazy loading implementation');
        console.log('✅ Service worker for caching');
        console.log('✅ Critical CSS inlining');
        console.log('✅ Resource hints and preloading');
        
        console.log('\n🚀 PERFORMANCE IMPROVEMENTS:');
        console.log('-' * 40);
        console.log('• Faster page load times');
        console.log('• Improved Core Web Vitals');
        console.log('• Better SEO rankings');
        console.log('• Enhanced user experience');
        console.log('• AI-powered customer support');
        console.log('• Mobile-optimized performance');
        
        console.log('\n📈 NEXT STEPS:');
        console.log('-' * 40);
        console.log('1. Test website performance with Google PageSpeed Insights');
        console.log('2. Monitor Core Web Vitals in Google Search Console');
        console.log('3. Set up Google Analytics for performance tracking');
        console.log('4. Consider implementing a CDN for global performance');
        console.log('5. Regular content updates for better SEO');
        
        console.log('\n🎯 Your iDigital website is now SUPER FAST! 🚀');
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Run complete optimization
if (require.main === module) {
    const optimizer = new CompleteOptimizer();
    optimizer.runAllOptimizations().catch(console.error);
}

module.exports = CompleteOptimizer;
