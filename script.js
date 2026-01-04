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
        // অক্ষর কমানো
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // অক্ষর বাড়ানো
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // লেখা শেষ হলে ২ সেকেন্ড বিরতি
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// --- 2. Mobile Menu Fix ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// মেনুর লিঙ্কে ক্লিক করলে মেনু হাইড হয়ে যাবে
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

// --- 3. Interactive Box Click Highlight ---
function highlightBox(element) {
    // আগের সব বক্স থেকে হাইলাইট রিমুভ করা
    document.querySelectorAll('.interactive-box').forEach(box => {
        box.classList.remove('active-click');
    });
    // ক্লিক করা বক্সে গ্রিন কালার অ্যাড করা
    element.classList.add('active-click');
}

// --- 4. Scroll Reveal & Skill Bar Animation ---
const observerOptions = {
    threshold: 0.2
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // যদি স্কিল সেকশন স্ক্রিনে আসে, তবে বারগুলো অ্যানিমেশন হবে
            if (entry.target.id === 'skills') {
                animateSkills();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function animateSkills() {
    const skills = [
        { name: 'SEO', percent: '95%' },
        { name: 'Web Development', percent: '90%' },
        { name: 'Python', percent: '85%' }
    ];
    
    const fills = document.querySelectorAll('.fill');
    fills.forEach((fill, index) => {
        // ডাটা অনুযায়ী উইডথ সেট করা
        if(skills[index]) {
            fill.style.width = skills[index].percent;
        }
    });
}

// --- 5. Particles Background Setup ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ff88" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
        }
    });
}

// পেজ লোড হওয়ার পর শুরু হবে
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});
