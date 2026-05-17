// ===== CHAT CONFIGURATION =====
// Use environment variable or fallback to localhost for development
const CHAT_API_URL = process.env.CHAT_API_URL || 'http://localhost:5000/api/chat';

// ===== CHAT STATE =====
let chatHistory = [];
let isChatOpen = false;

// ===== CHAT UI =====
function initChatWidget() {
  // Create chat widget container
  const chatWidget = document.createElement('div');
  chatWidget.id = 'chatWidget';
  chatWidget.innerHTML = `
    <div class="chat-toggle" onclick="toggleChat()">
      <span class="chat-icon">💬</span>
      <span class="chat-badge" id="chatBadge" style="display:none">1</span>
    </div>
    <div class="chat-window" id="chatWindow">
      <div class="chat-header">
        <div class="chat-title">LearnFlow AI Assistant</div>
        <button class="chat-close" onclick="toggleChat()">×</button>
      </div>
      <div class="chat-messages" id="chatMessages">
        <div class="chat-message bot">
          <div class="chat-avatar">🤖</div>
          <div class="chat-content">
            <div class="chat-text">Hi! I'm your LearnFlow AI assistant. I can help you discover courses, answer questions about our content, and recommend learning paths. What would you like to learn today?</div>
          </div>
        </div>
      </div>
      <div class="chat-input-area">
        <input type="text" id="chatInput" placeholder="Ask about courses..." onkeydown="if(event.key==='Enter')sendMessage()">
        <button class="chat-send" onclick="sendMessage()">Send</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatWidget);
}

function toggleChat() {
  isChatOpen = !isChatOpen;
  const chatWindow = document.getElementById('chatWindow');
  const chatBadge = document.getElementById('chatBadge');
  
  if (isChatOpen) {
    chatWindow.classList.add('open');
    chatBadge.style.display = 'none';
    document.getElementById('chatInput').focus();
  } else {
    chatWindow.classList.remove('open');
  }
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message to chat
  addChatMessage('user', message);
  input.value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  try {
    const response = await callAI(message);
    removeTypingIndicator();
    addChatMessage('bot', response);
  } catch (error) {
    removeTypingIndicator();
    addChatMessage('bot', 'Sorry, I encountered an error. Please try again later.');
    console.error('Chat error:', error);
  }
}

async function callAI(userMessage) {
  const response = await fetch(CHAT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userMessage })
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data.response;
}

function addChatMessage(type, text) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}`;
  
  const avatar = type === 'user' ? '👤' : '🤖';
  
  messageDiv.innerHTML = `
    <div class="chat-avatar">${avatar}</div>
    <div class="chat-content">
      <div class="chat-text">${text}</div>
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  chatHistory.push({ type, text });
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typingIndicator';
  typingDiv.className = 'chat-message bot';
  typingDiv.innerHTML = `
    <div class="chat-avatar">🤖</div>
    <div class="chat-content">
      <div class="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Initialize chat widget when DOM is ready
document.addEventListener('DOMContentLoaded', initChatWidget);
