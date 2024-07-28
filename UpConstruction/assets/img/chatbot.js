const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const predefinedFAQs = {
    "road": "Your road complaint has been registered. Reference number: ROAD12345.",
    "water": "Your water supply complaint has been registered. Reference number: WATER12345.",
    "electricity": "Your electricity complaint has been registered. Reference number: ELECTRICITY12345.",
    "garbage": "Your garbage complaint has been registered. Reference number: GARBAGE12345."
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;
    
    addMessageToChat(message, 'user');
    userInput.value = '';

    setTimeout(() => {
        const response = getBotResponse(message);
        addMessageToChat(response, 'bot');
    }, 1000);
}

function addMessageToChat(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}`;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    for (const key in predefinedFAQs) {
        if (message.toLowerCase().includes(key)) {
            return predefinedFAQs[key];
        }
    }
    return "I'm sorry, I didn't understand your complaint. Please specify if it's about road, water, electricity, or garbage.";
}

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
