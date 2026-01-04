// --- 1. Typing Effect Animation ---
const typingText = document.getElementById('typing-text');
const professions = [
    "Bangladeshi Musician", 
    "Creative Writer", 
    "Web Developer", 
    "SEO Expert", 
    "Python Developer"
];
let profIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = professions[profIndex];
    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        profIndex = (profIndex + 1) % professions.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// --- 2. Mobile Menu Toggle ---
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('mobile-active');
}

// --- 3. Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => scrollObserver.observe(el));

// --- 4. Writarion AI Chatbot Logic ---
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

function toggleChat() {
    chatBox.classList.toggle('chat-hidden');
}

function sendChat() {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    appendMessage("You", userMsg);
    chatInput.value = "";

    // AI Thinking Simulation
    setTimeout(() => {
        const aiReply = getAIResponse(userMsg.toLowerCase());
        appendMessage("AI", aiReply);
    }, 600);
}

function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    msgDiv.style.marginBottom = "10px";
    msgDiv.style.padding = "8px";
    msgDiv.style.borderRadius = "8px";
    msgDiv.style.background = sender === "You" ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.05)";
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(input) {
    // Personal Info Logic
    if (input.includes("who is sabbir") || input.includes("sabbir hosen akash")) {
        return "Sabbir Hosen Akash (Writarion) is a multi-talented Musician, Writer, and Web Developer from Sandwip, Bangladesh.";
    }
    if (input.includes("born") || input.includes("birth")) {
        return "Sabbir was born on January 3, 2002.";
    }
    if (input.includes("book")) {
        return "He has written 'Whispers of the Heart' and 'On the Edge of a Broken Bridge'. You can find them in the Books section!";
    }
    if (input.includes("education") || input.includes("college")) {
        return "He completed SSC in 2022 from South Sandwip ML High School and HSC in 2024 from Govt Hazi A. B. College.";
    }
    if (input.includes("oparok") || input.includes("band")) {
        return "Sabbir is the Keyboardist and Backing Vocalist of Oparok Band.";
    }
    if (input.includes("contact") || input.includes("whatsapp")) {
        return "You can contact him via WhatsApp at +8801620302210 or email info.sabbirhosenakash@gmail.com.";
    }

    // Common Conversation
    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
        return "Hello! I am Writarion AI. How can I help you today?";
    }
    if (input.includes("how are you")) {
        return "I'm doing great! Ready to help you learn more about Sabbir.";
    }
    if (input.includes("coding") || input.includes("skill")) {
        return "Sabbir is an expert in SEO, Web Design, and Python Programming.";
    }

    return "That's an interesting question! I'm still learning, but you can ask me about Sabbir's music, books, or skills.";
}

// Enter key to send message
chatInput.onkeypress = (e) => { if (e.key === 'Enter') sendChat(); };

// --- 5. Particles.js Initialization ---
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ff88" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
    }
});

// Initialize Typing on Load
document.addEventListener('DOMContentLoaded', typeEffect);
