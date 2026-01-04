// --- 1. Typing Effect (Fixed Logic) ---
const textArray = [
    "Bangladeshi Musician", 
    "Creative Writer", 
    "Web Developer", 
    "SEO Expert"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 150;
const erasingDelay = 80;
const nextTextDelay = 2000;

function type() {
    const typingElement = document.getElementById("typing-effect");
    if (!typingElement) return;

    const currentText = textArray[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = nextTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// --- 2. Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Close menu when a link is clicked (Mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

// --- 3. Box Click Highlight Effect ---
function highlightBox(element) {
    // Remove highlight from all other boxes first
    document.querySelectorAll('.interactive-box').forEach(box => {
        box.classList.remove('active-click');
    });
    // Add highlight to the clicked box
    element.classList.add('active-click');
}

// --- 4. Particles Background ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ff88" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
        }
    });
}

// --- 5. Scroll Reveal Animation ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- Start Animation on Load ---
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});
