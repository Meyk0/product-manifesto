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
    // ... rest of your manifesto data ...
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
        // Add the title line with inline comment
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
                    <span class="multi-line-comment">/* ${value.description} */</span>
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
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', createManifestoHTML);