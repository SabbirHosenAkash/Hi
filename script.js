// --- 1. Typing Effect Animation ---
const typingElement = document.getElementById('typing-effect');
const roles = ["Bangladeshi Musician", "Creative Writer", "Web Developer", "SEO Expert", "Python Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        speed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// --- 2. Mobile Menu Logic ---
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// --- 3. Particles.js (Neon Background) ---
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

// --- 4. Advanced AI Chatbot (Writarion AI) ---
const chatTrigger = document.getElementById('chat-trigger');
const chatWindow = document.getElementById('chat-window');
const chatLogs = document.getElementById('chat-logs');
const userInput = document.getElementById('user-input');

chatTrigger.onclick = () => chatWindow.classList.toggle('chat-hidden');

function sendMessage() {
    const msg = userInput.value.trim();
    if (msg === "") return;

    appendMessage("You", msg);
    userInput.value = "";
    
    // AI Thinking...
    setTimeout(() => {
        const response = getAIResponse(msg.toLowerCase());
        appendMessage("Writarion AI", response);
    }, 600);
}

function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    div.style.marginBottom = "10px";
    div.style.background = sender === "You" ? "rgba(0, 255, 136, 0.1)" : "rgba(255, 255, 255, 0.05)";
    div.style.padding = "8px";
    div.style.borderRadius = "8px";
    chatLogs.appendChild(div);
    chatLogs.scrollTop = chatLogs.scrollHeight;
}

function getAIResponse(input) {
    // Sabbir's Database
    if (input.includes("who is sabbir") || input.includes("sabbir hosen akash")) 
        return "Sabbir Hosen Akash (Writarion) is a multi-talented Bangladeshi Musician, Writer, and Web Developer from Sandwip.";
    
    if (input.includes("born") || input.includes("birth")) 
        return "He was born on January 3, 2002.";
    
    if (input.includes("book")) 
        return "Sabbir has authored 'Whispers of the Heart' and 'On the Edge of a Broken Bridge'.";

    if (input.includes("band") || input.includes("oparok")) 
        return "He is the Keyboardist and Backing Vocalist of Oparok Band.";

    // General Knowledge / Coding Assistant Logic
    if (input.includes("coding") || input.includes("programming")) 
        return "Coding is the process of creating instructions for computers. Sabbir is an expert in Python and Web Dev!";
    
    if (input.includes("capital of bangladesh")) return "The capital of Bangladesh is Dhaka.";
    
    if (input.includes("python")) return "Python is a high-level programming language. Sabbir uses it for various projects.";

    // Default Intelligence
    return "I am Writarion AI, trained to assist you. I can tell you about Sabbir's career, or help with general questions. Ask me anything!";
}

userInput.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };

// --- 5. Scroll Reveal Effect ---
const revealElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', typeEffect);
