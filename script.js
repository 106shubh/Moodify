 //navbar
 function toggleMenu() {
    const menu = document.getElementById('menuPopup');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  function toggleHamburgerMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }

  // Optional: close menus on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.profile-menu')) {
      document.getElementById('menuPopup').style.display = 'none';
    }
  });
// Close menu when clicking outside
window.addEventListener("click", function (e) {
  const menu = document.getElementById("menuPopup");
  const profileIcon = document.querySelector(".profile-icon");
  
  if (!menu.contains(e.target) && e.target !== profileIcon) {
    menu.style.display = "none";
  }
});
const text = "Mental Health Matters. You're Not Alone 💚";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
window.onload = typeWriter;
// Image slider background
const heroSection = document.querySelector('.hero-section');
const bgImages = [
  '2.jpeg', // tree
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', // mountain lake
  'https://images.unsplash.com/photo-1533616688419-b7a585564566'  // meditation
];
let bgIndex = 0;

function changeBackground() {
  heroSection.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % bgImages.length;
}
changeBackground(); // Initial call
setInterval(changeBackground, 5000); // Change every 5 seconds

// Typing animation
const texts = [
  "Mental Health Matters.",
  "You're Not Alone 💚",
  "Find Your Inner Peace 🧘"
];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typingText");

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 1000);
  }
}

typeText();
function toggleChatbot() {
  const chatPopup = document.getElementById("chatPopup");
  chatPopup.style.display = (chatPopup.style.display === "block") ? "none" : "block";
}

// Optional: Hide chatbot popup when clicking outside
window.addEventListener("click", function (e) {
  const chatPopup = document.getElementById("chatPopup");
  if (!e.target.closest('.chatbot-icon') && !e.target.closest('.chatbot-popup')) {
    chatPopup.style.display = "none";
  }
});
