// --- 1. Typing Effect (Profession Change) ---
const typedElement = document.getElementById('typed');
const roles = ["Bangladeshi Musician", "Creative Writer", "Web Developer", "SEO Expert", "Python Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typedElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 150;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        speed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeAnimation, speed);
}

// --- 2. Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.background = '#111';
        navLinks.style.width = '100%';
        navLinks.style.left = '0';
        navLinks.style.padding = '20px';
    }
}

// --- 3. Particles Background ---
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ff88" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
    }
});

// --- 4. Writarion AI Chatbot (Smart Assistant) ---
const chatWindow = document.getElementById('chat-window');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

function toggleChat() {
    chatWindow.classList.toggle('hide');
}

function sendChat() {
    const userInput = chatInput.value.trim();
    if (userInput === "") return;

    appendMsg("User", userInput);
    chatInput.value = "";

    // AI Processing logic
    setTimeout(() => {
        const response = generateAIResponse(userInput.toLowerCase());
        appendMsg("AI", response);
    }, 600);
}

function appendMsg(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.style.padding = "10px";
    msgDiv.style.borderRadius = "8px";
    msgDiv.style.marginBottom = "10px";
    msgDiv.style.fontSize = "14px";
    
    if (sender === "User") {
        msgDiv.style.background = "rgba(0, 255, 136, 0.2)";
        msgDiv.style.alignSelf = "flex-end";
        msgDiv.innerHTML = `<strong>You:</strong> ${text}`;
    } else {
        msgDiv.style.background = "rgba(255, 255, 255, 0.1)";
        msgDiv.style.alignSelf = "flex-start";
        msgDiv.innerHTML = `<strong>Writarion AI:</strong> ${text}`;
    }
    
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateAIResponse(query) {
    // 1. Sabbir's Bio Data
    if (query.includes("who is sabbir") || query.includes("about him") || query.includes("akash")) {
        return "Sabbir Hosen Akash (Writarion) is a Bangladeshi Musician, Writer, and Web Developer born on Jan 3, 2002, in Sandwip.";
    }
    if (query.includes("birth") || query.includes("born")) {
        return "Sabbir was born on January 3, 2002.";
    }
    if (query.includes("skill") || query.includes("expert")) {
        return "He is an expert in SEO, Web Development, Python, and Music Production.";
    }
    if (query.includes("book")) {
        return "He wrote 'Whispers of the Heart' and 'On the Edge of a Broken Bridge'.";
    }

    // 2. General Knowledge / Coding Assistant
    if (query.includes("html") || query.includes("css") || query.includes("javascript")) {
        return "HTML defines the structure, CSS the design, and JS the logic of a website. Sabbir is proficient in all three!";
    }
    if (query.includes("python")) {
        return "Python is a powerful programming language. Sabbir uses it for automation and development.";
    }
    if (query.includes("bangladesh")) {
        return "Bangladesh is a beautiful South Asian country known for its greenery and rivers.";
    }
    if (query.includes("hello") || query.includes("hi")) {
        return "Hello! I am Writarion AI. Ask me anything about Sabbir, technology, or general knowledge!";
    }

    // 3. Multilingual Support Logic
    if (query.includes("কেমন আছো") || query.includes("নাম কি")) {
        return "আমি সাব্বির হোসেন আকাশের এআই অ্যাসিস্ট্যান্ট। আমি ভালো আছি। আপনি কি জানতে চান?";
    }

    // 4. Default Fallback
    return "That's an interesting question! As a smart AI, I'm constantly learning. Sabbir is a genius in creative fields, and I can help you with tech or bio info!";
}

// Enter key to send message
chatInput.onkeypress = (e) => { if (e.key === 'Enter') sendChat(); };

// --- 5. Scroll Animation ---
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});

// Start Type Effect
document.addEventListener('DOMContentLoaded', typeAnimation);
