const manifestoData = {
    "0": {
        title: "Launching vs Landing",
        description: "Like rockets, launching a product is just the start – landing is the hard part. Successful landing requires constant adjustments, monitoring, and dedication to stick the landing. Focus on what happens after the champagne and launch party."
    },
    "1": {
        title: "Action Reveals Truth",
        description: "I've spent countless hours in rooms theorizing about user behavior, only to be completely wrong when we actually shipped. Stop overthinking and start shipping – your assumptions are probably wrong anyway."
    },
    "2": {
        title: "Lead with Empathy, Not Authority",
        description: "You're a tour guide, not an autocrat. Know your terrain deeply, but be ready to change course when your group spots something you missed. Nobody wants to follow a know-it-all with a megaphone."
    },
    "3": {
        title: "High-IQ Problems Need In Person Collaboration",
        description: "Google Meet is great for status updates, but trying to solve complex problems need face-to-face energy and a whiteboard."
    },
    "4": {
        title: "Stay Curious, Always",
        description: "The moment you think you've got it all figured out is the moment you start becoming irrelevant. Keep asking \"why\" like a stubborn toddler – it's surprisingly effective."
    },
    "5": {
        title: "Think Big, Start Small",
        description: "Dream up the flying car, but start by making the bicycle better. Your grand vision means nothing without the small wins that prove you're heading in the right direction."
    },
    "6": {
        title: "Frameworks Are Overrated",
        description: "RICE scoring won't tell you what product to build. Jobs-to-be-Done won't magically reveal user needs. Frameworks are training wheels – helpful for learning but limiting if you never take them off."
    },
    "7": {
        title: "Radical Candor Builds Great Products",
        description: "Sugarcoating feedback is like serving a burnt dinner and calling it \"well-done.\" It helps no one. Be kind, be specific, be direct – your team can handle it."
    },
    "8": {
        title: "Speed Through Focus",
        description: "Doing ten things poorly doesn't make you fast – it makes you ineffective. Pick the few things that matter and do them extraordinarily well. Everything else can wait."
    },
    "9": {
        title: "Strong Opinions, Weakly Held",
        description: "Have the courage to make bold bets but the humility to admit when you're wrong. Your ego isn't more important than building the right thing."
    },
    "10": {
        title: "Build Yourself Out of the Equation",
        description: "Your greatest achievement is building a team that no longer needs you. Empower others, foster leadership, and create systems that ensure your impact lasts beyond your tenure."
    }
};


const articles = {
    "featured": [
        {
            "title": "AI TechPark Interview RAG",
            "url": "https://ai-techpark.com/aitech-interview-with-joscha-koepke/"
        },
        {
            "title": "Here’s Why Everyone is Raving About RAG", 
            "url": "https://ai-techpark.com/why-everyone-is-raving-about-rag/"
        },
        {
            "title": "How AI Is Disrupting Our Industry, and What We Can Do About It", 
            "url": "https://medium.com/authority-magazine/joscha-koepke-of-connectly-how-ai-is-disrupting-our-industry-and-what-we-can-do-about-it-03514fbb5443"
        },
        {
            "title": "Here’s Why Everyone is Raving About RAG", 
            "url": "https://ai-techpark.com/why-everyone-is-raving-about-rag/"
        },
        {
            "title": "AI Walks Into a Bar: The Quest for Artificial Humor", 
            "url": "https://www.pymnts.com/artificial-intelligence-2/2024/ai-walks-into-a-bar-the-quest-for-artificial-humor/"
        },
        {
            "title": "Unite AI Interview Series", 
            "url": "https://www.unite.ai/joscha-koepke-head-of-product-at-connectly-interview-series/"
        }

    ],
    "authored": [
        {
            "title": "Launching vs. Landing: Why Product Landings Matter More Than Launches",
            "url": "https://www.linkedin.com/pulse/launching-vs-landing-why-product-landings-matter-more-joscha-koepke-dolhe/?trackingId=tL62j8m%2BwjtxARNoyP5Mkg%3D%3D"
        },
        {
            "title": "What’s the rage about RAG?", 
            "url": "https://www.linkedin.com/pulse/whats-rage-rag-joscha-koepke-karvc/?trackingId=x%2BMclCEwgLawcOSEkXJ7WQ%3D%3D"
        },
        {
            "title": "The Dawn of Agentic Chatbots", 
            "url": "https://www.linkedin.com/pulse/dawn-agentic-chatbots-joscha-koepke-t4sbc/?trackingId=l2VV5mhUTUq1lKa%2F1FogTA%3D%3D"
        },
        {
            "title": "Decision-Making at Connectly: The Power of First Principles Thinking when combined with Product Principles", 
            "url": "https://www.linkedin.com/pulse/decision-making-connectly-power-first-principles-thinking-koepke/?trackingId=l2VV5mhUTUq1lKa%2F1FogTA%3D%3D"
        }
    ]
 };

 const contact = {
    "linkedin": {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/joschakoepke/"
    }
};
 
 function createManifestoHTML() {
    let html = `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">1</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content"><span class="keyword">const</span> <span class="const-name">manifestoData</span> <span class="operator">=</span> <span class="bracket">{</span></span>
        </div>`;
    
    let lineNumber = 2;
    Object.entries(manifestoData).forEach(([key, value], index, array) => {
        html += `
            <div class="line line-with-comment">
                <div class="line-numbers-and-arrows">
                    <span class="line-number">${lineNumber++}</span>
                    <div class="arrow-container">
                        <span class="arrow"></span>
                    </div>
                </div>
                <span class="line-content">
                    <span class="indent"><span class="property">"${key}"</span>: <span class="string">"${value.title}"</span>${index < array.length - 1 ? ',' : ''}</span>
                </span>
            </div>`;
 
        html += `
            <div class="line comment-line collapsed">
                <div class="line-numbers-and-arrows">
                    <span class="line-number">${lineNumber++}</span>
                    <div class="arrow-container"></div>
                </div>
                <span class="line-content">
                    <span class="indent multi-line-comment">/* ${value.description} */</span>
                </span>
            </div>`;
    });
 
    // Close manifesto object
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content"><span class="bracket">}</span>;</span>
        </div>`;
 
        html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content">
                <span class="keyword">const</span> <span class="const-name">articles</span> <span class="operator">=</span> <span class="bracket">{</span>
            </span>
        </div>`;
 
    // Featured Articles
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content">
                <span class="indent"><span class="property">"featured"</span>: [</span>
            </span>
        </div>`;
 
    articles.featured.forEach((article, index) => {
        html += `
            <div class="line">
                <div class="line-numbers-and-arrows">
                    <span class="line-number">${lineNumber++}</span>
                    <div class="arrow-container"></div>
                </div>
                <span class="line-content">
                    <span class="indent indent-2"><a href="${article.url}" class="string">${article.title}</a>${index < articles.featured.length - 1 ? ',' : ''}</span>
                </span>
            </div>`;
    });
 
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content">
                <span class="indent">],</span>
            </span>
        </div>`;
 
    // Authored Articles
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content">
                <span class="indent"><span class="property">"authored"</span>: [</span>
            </span>
        </div>`;
 
    articles.authored.forEach((article, index) => {
        html += `
            <div class="line">
                <div class="line-numbers-and-arrows">
                    <span class="line-number">${lineNumber++}</span>
                    <div class="arrow-container"></div>
                </div>
                <span class="line-content">
                    <span class="indent indent-2"><a href="${article.url}" class="string">${article.title}</a>${index < articles.authored.length - 1 ? ',' : ''}</span>
                </span>
            </div>`;
    });
 
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content">
                <span class="indent">]</span>
            </span>
        </div>`;
 
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber++}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content"><span class="bracket">}</span>;</span>
        </div>`;
 
   
   // Contact section
   html += `
   <div class="line">
       <div class="line-numbers-and-arrows">
           <span class="line-number">${lineNumber++}</span>
           <div class="arrow-container"></div>
       </div>
       <span class="line-content">
           <span class="keyword">const</span> <span class="const-name">contact</span> <span class="operator">=</span> <span class="bracket">{</span>
       </span>
   </div>`;

html += `
   <div class="line">
       <div class="line-numbers-and-arrows">
           <span class="line-number">${lineNumber++}</span>
           <div class="arrow-container"></div>
       </div>
       <span class="line-content">
           <span class="indent"><span class="property">"social"</span>: [</span>
       </span>
   </div>`;

contact.social.forEach((item, index) => {
   html += `
       <div class="line">
           <div class="line-numbers-and-arrows">
               <span class="line-number">${lineNumber++}</span>
               <div class="arrow-container"></div>
           </div>
           <span class="line-content">
               <span class="indent indent-2"><a href="${item.url}" class="string" target="_blank">${item.title}</a>${index < contact.social.length - 1 ? ',' : ''}</span>
           </span>
       </div>`;
});

html += `
   <div class="line">
       <div class="line-numbers-and-arrows">
           <span class="line-number">${lineNumber++}</span>
           <div class="arrow-container"></div>
       </div>
       <span class="line-content">
           <span class="indent">]</span>
       </span>
   </div>`;

html += `
   <div class="line">
       <div class="line-numbers-and-arrows">
           <span class="line-number">${lineNumber++}</span>
           <div class="arrow-container"></div>
       </div>
       <span class="line-content"><span class="bracket">}</span>;</span>
   </div>`;
   
   
        document.getElementById('manifestoContent').innerHTML = html;
    
    document.querySelectorAll('.line-with-comment').forEach(line => {
        const commentLine = line.nextElementSibling;
        const arrow = line.querySelector('.arrow');
        
        line.addEventListener('click', () => {
            commentLine.classList.toggle('collapsed');
            arrow.classList.toggle('expanded');
        });
    });
 }
 
 document.addEventListener('DOMContentLoaded', createManifestoHTML);