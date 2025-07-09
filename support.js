 const moodBotResponses = [
    {
      keywords: ["sad", "cry", "upset"],
      reply: "It's okay to feel sad sometimes. Take a deep breath or listen to calming sounds. You're not alone. 💙"
    },
    {
      keywords: ["anxious", "nervous", "panic"],
      reply: "Try grounding techniques: name 5 things you see, 4 you can touch, 3 you hear... It can help. 🧘"
    },
    {
      keywords: ["happy", "good", "great"],
      reply: "That's great to hear! Keep spreading positive vibes ✨😊"
    },
    {
      keywords: ["lonely", "alone"],
      reply: "You're not truly alone. Try connecting with a friend or journaling. I'm here for you 💛"
    },
    {
      keywords: ["meditate", "how to meditate"],
      reply: "Sit comfortably, close your eyes, and focus on your breath. Start with just 2 minutes a day. 🌿"
    },
    {
      keywords: ["stress", "tension"],
      reply: "Stress can be heavy. Take small breaks, listen to music, or do light stretching. 🧘‍♂️"
    },
    {
      keywords: ["thank", "bye"],
      reply: "Take care! Come back anytime you need support 💚"
    }
  ];

  function getMoodBotReply(userInput) {
    const input = userInput.toLowerCase();
    for (let item of moodBotResponses) {
      if (item.keywords.some(keyword => input.includes(keyword))) {
        return item.reply;
      }
    }
    return "I'm here to support you. Can you tell me a little more about how you're feeling? 💬";
  }

  function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");

    const userMsg = input.value.trim();
    if (userMsg === "") return;

    // User Message
    const userBubble = document.createElement("p");
    userBubble.textContent = "🧑 " + userMsg;
    userBubble.style.textAlign = "right";
    chatBody.appendChild(userBubble);

    // Bot Reply
    const botReplyText = getMoodBotReply(userMsg);
    const botBubble = document.createElement("p");
    botBubble.textContent = "🤖 " + botReplyText;
    botBubble.style.textAlign = "left";
    chatBody.appendChild(botBubble);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight; // auto-scroll to latest
  }

  // Toggle popup
  document.addEventListener("DOMContentLoaded", () => {
    const chatbotIcon = document.getElementById("chatbotToggle");
    const chatbotPopup = document.getElementById("chatbotPopup");

    chatbotIcon.addEventListener("click", () => {
      chatbotPopup.style.display = chatbotPopup.style.display === "block" ? "none" : "block";
    });
  });
// Toggle profile menu
  function toggleMenu() {
    const menu = document.getElementById("menuPopup");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  // Toggle mobile nav
  function toggleMobileMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  // Optional: close profile menu when clicking outside
  window.onclick = function (event) {
    const menu = document.getElementById("menuPopup");
    if (!event.target.matches('.profile-icon')) {
      if (menu && menu.style.display === "block") {
        menu.style.display = "none";
      }
    }
  };
