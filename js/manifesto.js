const manifestoData = {
    "0": {
        title: "Launching vs Landing",
        description: "Like rockets, launching a product is just the start – landing is the hard part. Anyone can launch with enough thrust, but successful landing requires constant adjustments, monitoring, and dedication to stick the landing. Focus on sustainable success over flashy launches. Focus on what happens after the champagne and launch party."
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
        title: "Details Are Not Details",
        description: "That slightly-off pixel alignment? The 200ms delay? The confusing error message? They matter and compound. Users feel the little things, even if they can't articulate why."
    },
    "5": {
        title: "Stay Curious, Always",
        description: "The moment you think you've got it all figured out is the moment you start becoming irrelevant. Keep asking \"why\" like a stubborn toddler – it's surprisingly effective."
    },
    "6": {
        title: "Think Big, Execute Small",
        description: "Dream up the flying car, but start by making the bicycle better. Your grand vision means nothing without the small wins that prove you're heading in the right direction."
    },
    "7": {
        title: "First Principles Over Assumptions",
        description: "Stop copying what worked for others. Break problems down and rebuild from there. It's harder than following a playbook, but that's kind of the point."
    },
    "8": {
        title: "Frameworks Are Overrated",
        description: "RICE scoring won't tell you what product to build. Jobs-to-be-Done won't magically reveal user needs. Frameworks are training wheels – helpful for learning but limiting if you never take them off."
    },
    "9": {
        title: "Radical Candor Builds Great Products",
        description: "Sugarcoating feedback is like serving a burnt dinner and calling it \"well-done.\" It helps no one. Be kind, be specific, be direct – your team can handle it."
    },
    "10": {
        title: "Solve Problems, Not Requests",
        description: "When users ask for a faster horse, don't start breeding horses. Figure out why they need speed in the first place. Your job is to solve problems, not take orders."
    },
    "11": {
        title: "Build Learning Systems",
        description: "Your brilliant insights mean nothing if they die in your Slack threads. Build a system where learning compounds – your future self will thank you when you're not solving the same problems twice."
    },
    "12": {
        title: "Speed Through Focus",
        description: "Doing ten things poorly doesn't make you fast – it makes you ineffective. Pick the few things that matter and do them extraordinarily well. Everything else can wait."
    },
    "13": {
        title: "Technical Debt Is Business Debt",
        description: "That quick hack you approved six months ago? It's now a load-bearing bug that your entire system depends on. Technical debt compounds faster than your VC funding – treat it seriously."
    },
    "14": {
        title: "Strong Opinions, Weakly Held",
        description: "Have the courage to make bold bets but the humility to admit when you're wrong. Your ego isn't more important than building the right thing."
    },
    "15": {
        title: "Culture Eats Strategy",
        description: "Your brilliant product strategy means nothing if your team is miserable, disengaged, or afraid to speak up. Culture isn't about ping pong tables – it's about how decisions really get made."
    },
    "16": {
        title: "Revenue Is a Feature",
        description: "Building cool stuff is fun, but you know what's cooler? Great products solve real problems in sustainable ways. Don't separate business model decisions from product decisions – they're inherently interconnected and should be designed together."
    },
    "17": {
        title: "Build Yourself Out of the Equation",
        description: "Your greatest achievement is building a team that no longer needs you. Empower others, foster leadership, and create systems that ensure your impact lasts beyond your tenure."
    }
};

function createManifestoHTML() {
    let html = `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">1</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content"><span class="keyword">const</span> <span class="const-name">productManifesto</span> <span class="operator">=</span> <span class="bracket">{</span></span>
        </div>`;
    
    let lineNumber = 2;
    Object.entries(manifestoData).forEach(([key, value], index, array) => {
        const commentId = `comment-${key}`;
        
        // Add the title line with collapsible comment
        html += `
            <div class="line line-with-comment" data-comment="${commentId}">
                <div class="line-numbers-and-arrows">
                    <span class="line-number">${lineNumber++}</span>
                    <div class="arrow-container">
                        <span class="arrow"></span>
                    </div>
                </div>
                <span class="line-content">
                    <span class="indent"><span class="property">"${key}"</span>: <span class="string">"${value.title}"</span>${index < array.length - 1 ? ',' : ''}</span>
                    <span id="${commentId}" class="multi-line-comment">/* ${value.description} */</span>
                </span>
            </div>`;
    });

    // Add closing bracket
    html += `
        <div class="line">
            <div class="line-numbers-and-arrows">
                <span class="line-number">${lineNumber}</span>
                <div class="arrow-container"></div>
            </div>
            <span class="line-content"><span class="bracket">}</span>;</span>
        </div>`;

    document.getElementById('manifestoContent').innerHTML = html;
    
    // Add click handlers for collapsible comments
    document.querySelectorAll('.line-with-comment').forEach(line => {
        const commentId = line.dataset.comment;
        const comment = document.getElementById(commentId);
        const arrow = line.querySelector('.arrow');
        
        // Hide comments initially
        comment.classList.add('collapsed');
        
        line.addEventListener('click', () => {
            comment.classList.toggle('collapsed');
            arrow.classList.toggle('expanded');
        });
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', createManifestoHTML);