function toggleMenu() {
    const menu = document.getElementById('menuPopup');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const chatbotIcon = document.getElementById("chatbotToggle");
    const chatbotPopup = document.getElementById("chatbotPopup");
  
    chatbotIcon.addEventListener("click", () => {
      chatbotPopup.style.display = chatbotPopup.style.display === "block" ? "none" : "block";
    });
  });
  
  function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
  
    const userMsg = input.value.trim();
    if (userMsg === "") return;
  
    const userBubble = document.createElement("p");
    userBubble.textContent = "🧑 " + userMsg;
    chatBody.appendChild(userBubble);
  
    const botReply = document.createElement("p");
    botReply.textContent = "🤖 We're here to support you! Please hold on...";
    chatBody.appendChild(botReply);
  
    input.value = "";
  }
  