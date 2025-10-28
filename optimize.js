#!/usr/bin/env node
/**
 * iDigital Website Optimization Tool
 * Comprehensive image, CSS, JS, and HTML optimization
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const htmlMinifier = require('html-minifier');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

class WebsiteOptimizer {
    constructor() {
        this.stats = {
            images: { processed: 0, saved: 0 },
            css: { processed: 0, saved: 0 },
            js: { processed: 0, saved: 0 },
            html: { processed: 0, saved: 0 }
        };
    }

    async optimizeImage(inputPath, outputPath = null) {
        try {
            const originalSize = fs.statSync(inputPath).size;
            const output = outputPath || inputPath;
            
            // Create backup
            const backupPath = inputPath + '.backup';
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(inputPath, backupPath);
            }

            await sharp(inputPath)
                .jpeg({ quality: 85, progressive: true })
                .png({ quality: 85, progressive: true })
                .webp({ quality: 85 })
                .toFile(output);

            const newSize = fs.statSync(output).size;
            const saved = originalSize - newSize;
            
            this.stats.images.processed++;
            this.stats.images.saved += saved;
            
            console.log(`✓ ${inputPath}: ${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)} (saved ${this.formatBytes(saved)})`);
            return true;
        } catch (error) {
            console.error(`✗ Error optimizing ${inputPath}:`, error.message);
            return false;
        }
    }

    async minifyCSS(inputPath) {
        try {
            const originalSize = fs.statSync(inputPath).size;
            const css = fs.readFileSync(inputPath, 'utf8');
            
            const cleanCSS = new CleanCSS({
                level: 2,
                returnPromise: true
            });
            
            const result = await cleanCSS.minify(css);
            
            if (result.errors.length > 0) {
                console.warn(`CSS warnings for ${inputPath}:`, result.errors);
            }
            
            fs.writeFileSync(inputPath, result.styles);
            
            const newSize = fs.statSync(inputPath).size;
            const saved = originalSize - newSize;
            
            this.stats.css.processed++;
            this.stats.css.saved += saved;
            
            console.log(`✓ CSS ${inputPath}: ${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)} (saved ${this.formatBytes(saved)})`);
            return true;
        } catch (error) {
            console.error(`✗ Error minifying CSS ${inputPath}:`, error.message);
            return false;
        }
    }

    async minifyJS(inputPath) {
        try {
            const originalSize = fs.statSync(inputPath).size;
            const js = fs.readFileSync(inputPath, 'utf8');
            
            const result = await minify(js, {
                compress: true,
                mangle: true,
                format: {
                    comments: false
                }
            });
            
            if (result.error) {
                console.warn(`JS warnings for ${inputPath}:`, result.error);
                return false;
            }
            
            fs.writeFileSync(inputPath, result.code);
            
            const newSize = fs.statSync(inputPath).size;
            const saved = originalSize - newSize;
            
            this.stats.js.processed++;
            this.stats.js.saved += saved;
            
            console.log(`✓ JS ${inputPath}: ${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)} (saved ${this.formatBytes(saved)})`);
            return true;
        } catch (error) {
            console.error(`✗ Error minifying JS ${inputPath}:`, error.message);
            return false;
        }
    }

    async minifyHTML(inputPath) {
        try {
            const originalSize = fs.statSync(inputPath).size;
            const html = fs.readFileSync(inputPath, 'utf8');
            
            const result = htmlMinifier.minify(html, {
                removeComments: true,
                removeCommentsFromCDATA: true,
                removeCDATASectionsFromCDATA: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeEmptyElements: true,
                lint: false,
                keepClosingSlash: false,
                caseSensitive: true,
                minifyJS: true,
                minifyCSS: true
            });
            
            fs.writeFileSync(inputPath, result);
            
            const newSize = fs.statSync(inputPath).size;
            const saved = originalSize - newSize;
            
            this.stats.html.processed++;
            this.stats.html.saved += saved;
            
            console.log(`✓ HTML ${inputPath}: ${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)} (saved ${this.formatBytes(saved)})`);
            return true;
        } catch (error) {
            console.error(`✗ Error minifying HTML ${inputPath}:`, error.message);
            return false;
        }
    }

    async processDirectory(dirPath, fileExt, processor) {
        const files = this.getFilesRecursive(dirPath, fileExt);
        
        for (const file of files) {
            await processor(file);
        }
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
            
            if (stat.isDirectory()) {
                files.push(...this.getFilesRecursive(fullPath, extensions));
            } else if (extensions.some(ext => item.endsWith(ext))) {
                files.push(fullPath);
            }
        }
        
        return files;
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    printStats() {
        console.log('\n🎉 Optimization Summary:');
        console.log('=' * 50);
        console.log(`Images: ${this.stats.images.processed} files, ${this.formatBytes(this.stats.images.saved)} saved`);
        console.log(`CSS: ${this.stats.css.processed} files, ${this.formatBytes(this.stats.css.saved)} saved`);
        console.log(`JS: ${this.stats.js.processed} files, ${this.formatBytes(this.stats.js.saved)} saved`);
        console.log(`HTML: ${this.stats.html.processed} files, ${this.formatBytes(this.stats.html.saved)} saved`);
        
        const totalSaved = this.stats.images.saved + this.stats.css.saved + this.stats.js.saved + this.stats.html.saved;
        console.log(`\nTotal space saved: ${this.formatBytes(totalSaved)}`);
    }

    async optimize() {
        console.log('🚀 Starting iDigital Website Optimization...');
        console.log('=' * 50);

        // Optimize images
        console.log('\n📸 Optimizing images...');
        await this.processDirectory('img', ['.jpg', '.jpeg', '.png', '.webp'], (file) => this.optimizeImage(file));
        await this.processDirectory('assets/images', ['.jpg', '.jpeg', '.png', '.webp'], (file) => this.optimizeImage(file));

        // Minify CSS
        console.log('\n🎨 Minifying CSS...');
        await this.processDirectory('css', ['.css'], (file) => this.minifyCSS(file));

        // Minify JS
        console.log('\n⚡ Minifying JavaScript...');
        await this.processDirectory('js', ['.js'], (file) => this.minifyJS(file));

        // Minify HTML
        console.log('\n📄 Minifying HTML...');
        await this.processDirectory('.', ['.html'], (file) => this.minifyHTML(file));

        this.printStats();
    }
}

// Run optimization
if (require.main === module) {
    const optimizer = new WebsiteOptimizer();
    optimizer.optimize().catch(console.error);
}

module.exports = WebsiteOptimizer;
