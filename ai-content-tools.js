#!/usr/bin/env node
/**
 * AI Content Enhancement Tools for iDigital Website
 * Provides AI-powered content optimization, SEO suggestions, and performance insights
 */

const fs = require('fs');
const path = require('path');

class AIContentEnhancer {
    constructor() {
        this.contentSuggestions = {
            keywords: [
                'data recovery Louisiana',
                'phone repair New Orleans',
                'computer repair near me',
                'smartphone repair service',
                'laptop repair Louisiana',
                'game console repair',
                'tablet repair service',
                'data recovery service',
                'iPhone repair New Orleans',
                'Samsung repair service'
            ],
            contentTemplates: {
                servicePage: {
                    title: '{Service} Repair & Data Recovery | iDigital Louisiana',
                    description: 'Professional {service} repair and data recovery services in Louisiana. Same-day repairs with lifetime warranty. Call (504) 342-9109 for free consultation.',
                    h1: 'Professional {Service} Repair Services',
                    content: 'Our certified technicians provide expert {service} repair services with same-day turnaround. We specialize in {service} data recovery, screen replacement, and hardware repairs.'
                },
                landingPage: {
                    title: 'Data Recovery & Repair Services | iDigital Louisiana',
                    description: 'Louisiana\'s #1 rated data recovery and repair service. Same-day repairs for phones, computers, tablets, and more. Lifetime warranty included.',
                    h1: 'Professional Tech Repair & Data Recovery',
                    content: 'Trusted by thousands of Louisiana residents for reliable, fast, and affordable tech repair services.'
                }
            }
        };
    }

    generateContentSuggestions(pageType, service = null) {
        const template = this.contentSuggestions.contentTemplates[pageType];
        if (!template) return null;

        let suggestions = { ...template };
        
        if (service) {
            Object.keys(suggestions).forEach(key => {
                suggestions[key] = suggestions[key]
                    .replace(/{service}/g, service.toLowerCase())
                    .replace(/{Service}/g, service);
            });
        }

        return suggestions;
    }

    analyzeContent(content) {
        const analysis = {
            wordCount: content.split(/\s+/).length,
            keywordDensity: {},
            readabilityScore: 0,
            suggestions: []
        };

        // Analyze keyword density
        this.contentSuggestions.keywords.forEach(keyword => {
            const regex = new RegExp(keyword, 'gi');
            const matches = content.match(regex);
            if (matches) {
                analysis.keywordDensity[keyword] = (matches.length / analysis.wordCount * 100).toFixed(2);
            }
        });

        // Calculate readability score (simplified)
        const sentences = content.split(/[.!?]+/).length;
        const avgWordsPerSentence = analysis.wordCount / sentences;
        analysis.readabilityScore = Math.max(0, 100 - (avgWordsPerSentence * 1.5));

        // Generate suggestions
        if (analysis.wordCount < 300) {
            analysis.suggestions.push('Content is too short. Aim for at least 300 words for better SEO.');
        }

        if (analysis.readabilityScore < 60) {
            analysis.suggestions.push('Content may be difficult to read. Consider shorter sentences and simpler words.');
        }

        const lowDensityKeywords = Object.entries(analysis.keywordDensity)
            .filter(([keyword, density]) => parseFloat(density) < 1)
            .map(([keyword]) => keyword);

        if (lowDensityKeywords.length > 0) {
            analysis.suggestions.push(`Consider including these keywords more frequently: ${lowDensityKeywords.join(', ')}`);
        }

        return analysis;
    }

    generateAIOptimizedContent(originalContent, pageType, service = null) {
        const suggestions = this.generateContentSuggestions(pageType, service);
        if (!suggestions) return originalContent;

        let optimizedContent = originalContent;

        // Add meta description if missing
        if (!optimizedContent.includes('meta name="description"')) {
            const headEndIndex = optimizedContent.indexOf('</head>');
            if (headEndIndex !== -1) {
                optimizedContent = optimizedContent.slice(0, headEndIndex) + 
                    `\n    <meta name="description" content="${suggestions.description}">` +
                    optimizedContent.slice(headEndIndex);
            }
        }

        // Update title if generic
        if (optimizedContent.includes('<title>iDigital - Home</title>') || 
            optimizedContent.includes('<title>iDigital</title>')) {
            optimizedContent = optimizedContent.replace(
                /<title>.*?<\/title>/,
                `<title>${suggestions.title}</title>`
            );
        }

        // Add structured content
        const contentToAdd = `
    <!-- AI-Enhanced Content -->
    <div class="ai-enhanced-content">
        <h1>${suggestions.h1}</h1>
        <p class="lead">${suggestions.content}</p>
        
        <!-- AI-Generated FAQ Section -->
        <div class="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>How long does ${service ? service.toLowerCase() : 'repair'} service take?</h3>
                <p>Most repairs are completed same-day. Complex data recovery may take 2-3 business days.</p>
            </div>
            <div class="faq-item">
                <h3>Do you offer warranty on repairs?</h3>
                <p>Yes, we provide a limited lifetime warranty on all our repair services.</p>
            </div>
            <div class="faq-item">
                <h3>What areas do you serve?</h3>
                <p>We serve all of Louisiana with our mobile repair service and have a physical location in New Orleans.</p>
            </div>
        </div>
        
        <!-- AI-Generated Service Benefits -->
        <div class="service-benefits">
            <h2>Why Choose iDigital for ${service || 'Your Repair'}?</h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <h3>Same-Day Service</h3>
                    <p>Most repairs completed within hours, not days.</p>
                </div>
                <div class="benefit-item">
                    <h3>Certified Technicians</h3>
                    <p>Our team is manufacturer-certified and highly trained.</p>
                </div>
                <div class="benefit-item">
                    <h3>Lifetime Warranty</h3>
                    <p>We stand behind our work with comprehensive warranty coverage.</p>
                </div>
                <div class="benefit-item">
                    <h3>Free Consultation</h3>
                    <p>No-obligation assessment of your device and repair options.</p>
                </div>
            </div>
        </div>
    </div>`;

        // Insert content before footer
        const footerIndex = optimizedContent.lastIndexOf('<footer');
        if (footerIndex !== -1) {
            optimizedContent = optimizedContent.slice(0, footerIndex) + 
                contentToAdd + 
                optimizedContent.slice(footerIndex);
        }

        return optimizedContent;
    }

    generatePerformanceInsights() {
        return `
    <!-- AI Performance Insights -->
    <script>
        // AI-powered performance monitoring
        class AIPerformanceMonitor {
            constructor() {
                this.metrics = {};
                this.init();
            }
            
            init() {
                // Monitor Core Web Vitals
                this.observeLCP();
                this.observeFID();
                this.observeCLS();
                this.observeTTFB();
            }
            
            observeLCP() {
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    this.metrics.lcp = lastEntry.startTime;
                    this.reportMetrics();
                }).observe({ entryTypes: ['largest-contentful-paint'] });
            }
            
            observeFID() {
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        this.metrics.fid = entry.processingStart - entry.startTime;
                        this.reportMetrics();
                    });
                }).observe({ entryTypes: ['first-input'] });
            }
            
            observeCLS() {
                let clsValue = 0;
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                            this.metrics.cls = clsValue;
                            this.reportMetrics();
                        }
                    });
                }).observe({ entryTypes: ['layout-shift'] });
            }
            
            observeTTFB() {
                window.addEventListener('load', () => {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
                    this.reportMetrics();
                });
            }
            
            reportMetrics() {
                // Send metrics to analytics (implement as needed)
                console.log('Performance Metrics:', this.metrics);
                
                // AI-powered recommendations
                this.generateRecommendations();
            }
            
            generateRecommendations() {
                const recommendations = [];
                
                if (this.metrics.lcp > 2500) {
                    recommendations.push('Consider optimizing images and reducing server response time');
                }
                
                if (this.metrics.fid > 100) {
                    recommendations.push('Reduce JavaScript execution time and optimize third-party scripts');
                }
                
                if (this.metrics.cls > 0.1) {
                    recommendations.push('Add size attributes to images and avoid layout shifts');
                }
                
                if (recommendations.length > 0) {
                    console.log('AI Performance Recommendations:', recommendations);
                }
            }
        }
        
        // Initialize AI performance monitoring
        if (typeof window !== 'undefined') {
            new AIPerformanceMonitor();
        }
    </script>`;
    }

    generateAIChatbot() {
        return `
    <!-- AI Customer Service Chatbot -->
    <div id="ai-chatbot" class="ai-chatbot">
        <div class="chatbot-toggle" onclick="toggleChatbot()">
            <i class="fas fa-robot"></i>
            <span>AI Assistant</span>
        </div>
        <div class="chatbot-window" id="chatbot-window">
            <div class="chatbot-header">
                <h3>iDigital AI Assistant</h3>
                <button onclick="toggleChatbot()" class="close-btn">&times;</button>
            </div>
            <div class="chatbot-messages" id="chatbot-messages">
                <div class="ai-message">
                    <p>Hello! I'm your AI assistant. How can I help you with your repair needs today?</p>
                </div>
            </div>
            <div class="chatbot-input">
                <input type="text" id="chatbot-input" placeholder="Ask me anything about our services...">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    </div>
    
    <script>
        // AI Chatbot functionality
        const aiResponses = {
            'repair': 'We offer same-day repair services for smartphones, computers, tablets, and more. What device needs repair?',
            'price': 'Our repair prices start at $29.99 for basic services. Contact us at (504) 342-9109 for a free quote.',
            'warranty': 'We provide a limited lifetime warranty on all our repair services.',
            'location': 'We\'re located at 1851 Rousseau St, New Orleans, LA 70130. We also offer mobile repair services.',
            'hours': 'We\'re open Monday-Friday 9AM-6PM and Saturday 9AM-5PM.',
            'data recovery': 'Our data recovery services can recover data from damaged devices with a 95% success rate.',
            'default': 'I can help with repair services, pricing, warranties, and scheduling. What would you like to know?'
        };
        
        function toggleChatbot() {
            const chatbot = document.getElementById('ai-chatbot');
            chatbot.classList.toggle('active');
        }
        
        function sendMessage() {
            const input = document.getElementById('chatbot-input');
            const messages = document.getElementById('chatbot-messages');
            const userMessage = input.value.toLowerCase();
            
            // Add user message
            messages.innerHTML += \`<div class="user-message"><p>\${input.value}</p></div>\`;
            
            // Generate AI response
            let response = aiResponses.default;
            for (const [keyword, reply] of Object.entries(aiResponses)) {
                if (userMessage.includes(keyword)) {
                    response = reply;
                    break;
                }
            }
            
            // Add AI response
            setTimeout(() => {
                messages.innerHTML += \`<div class="ai-message"><p>\${response}</p></div>\`;
                messages.scrollTop = messages.scrollHeight;
            }, 500);
            
            input.value = '';
        }
        
        // Enter key support
        document.getElementById('chatbot-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    </script>
    
    <style>
        .ai-chatbot {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
        
        .chatbot-toggle {
            background: #0f63dc;
            color: white;
            padding: 15px 20px;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .chatbot-window {
            position: absolute;
            bottom: 70px;
            right: 0;
            width: 350px;
            height: 400px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            display: none;
            flex-direction: column;
        }
        
        .ai-chatbot.active .chatbot-window {
            display: flex;
        }
        
        .chatbot-header {
            background: #0f63dc;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chatbot-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            max-height: 300px;
        }
        
        .ai-message, .user-message {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 10px;
        }
        
        .ai-message {
            background: #f0f0f0;
            margin-right: 20px;
        }
        
        .user-message {
            background: #0f63dc;
            color: white;
            margin-left: 20px;
            text-align: right;
        }
        
        .chatbot-input {
            padding: 15px;
            display: flex;
            gap: 10px;
        }
        
        .chatbot-input input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        .chatbot-input button {
            background: #0f63dc;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>`;
    }

    async enhanceAllContent() {
        console.log('🤖 Starting AI content enhancement...');
        
        const htmlFiles = this.getFilesRecursive('.', ['.html']);
        
        for (const file of htmlFiles) {
            try {
                let content = fs.readFileSync(file, 'utf8');
                
                // Determine page type and service
                let pageType = 'landingPage';
                let service = null;
                
                if (file.includes('smartphone')) {
                    pageType = 'servicePage';
                    service = 'Smartphone';
                } else if (file.includes('computer')) {
                    pageType = 'servicePage';
                    service = 'Computer';
                } else if (file.includes('laptop')) {
                    pageType = 'servicePage';
                    service = 'Laptop';
                }
                
                // Generate AI-enhanced content
                const enhancedContent = this.generateAIOptimizedContent(content, pageType, service);
                
                // Add AI chatbot to main pages
                if (file.includes('index.html') || file.includes('contact')) {
                    const chatbotCode = this.generateAIChatbot();
                    const bodyEndIndex = enhancedContent.lastIndexOf('</body>');
                    if (bodyEndIndex !== -1) {
                        content = enhancedContent.slice(0, bodyEndIndex) + 
                                 chatbotCode + 
                                 enhancedContent.slice(bodyEndIndex);
                    }
                } else {
                    content = enhancedContent;
                }
                
                // Add performance monitoring
                const performanceCode = this.generatePerformanceInsights();
                const headEndIndex = content.indexOf('</head>');
                if (headEndIndex !== -1) {
                    content = content.slice(0, headEndIndex) + 
                             performanceCode + 
                             content.slice(headEndIndex);
                }
                
                fs.writeFileSync(file, content);
                console.log(`✓ AI enhanced: ${file}`);
                
            } catch (error) {
                console.error(`✗ Error enhancing ${file}:`, error.message);
            }
        }
        
        console.log('\n✅ AI content enhancement complete!');
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

// Run AI enhancement
if (require.main === module) {
    const aiEnhancer = new AIContentEnhancer();
    aiEnhancer.enhanceAllContent().catch(console.error);
}

module.exports = AIContentEnhancer;
