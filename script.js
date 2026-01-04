// --- 1. Typing Effect Logic ---
const textArray = ["Bangladeshi Musician", "Creative Writer", "Web Developer", "SEO Expert"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
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

    let typeSpeed = isDeleting ? 70 : 150;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // শেষের দিকে একটু বিরতি
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// --- 2. Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// লিঙ্ক ক্লিক করলে মেনু বন্ধ হয়ে যাবে (মোবাইলের জন্য)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

// --- 3. Interactive Box Click Effect ---
function highlightBox(element) {
    document.querySelectorAll('.interactive-box').forEach(box => {
        box.classList.remove('active-click');
    });
    element.classList.add('active-click');
}

// --- 4. Scroll Reveal & Skill Bar Animation ---
const revealElements = document.querySelectorAll('.reveal');
const skillFills = document.querySelectorAll('.fill');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // সেকশন অ্যানিমেশন
            entry.target.classList.add('active');
            
            // যদি স্কিল সেকশন হয়, তবে বারগুলো পূর্ণ হবে
            if (entry.target.id === 'skills') {
                skillFills.forEach(fill => {
                    const targetWidth = fill.style.width;
                    fill.style.width = '0%'; // প্রথমে ০ করে
                    setTimeout(() => {
                        fill.style.width = targetWidth; // তারপর টার্গেট উইডথ এ যাবে
                    }, 100);
                });
            }
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// --- 5. Particles Setup ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ff88" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
        }
    });
}

// সব লোড হওয়ার পর টাইপিং শুরু হবে
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});
