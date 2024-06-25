
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to display a message in the chat box
function displayMessage(message, sender) {
    const div = document.createElement('div');
    div.className = sender === 'user' ? 'user-message' : 'bot-message';
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle user input and add it to the chat box
function handleInput(event) {
    if (event.key === 'Enter') {
        const userInputText = userInput.value.trim().toLowerCase();
        if (userInputText !== '') {
            displayMessage(userInputText, 'user');
            userInput.value = '';

            // Logic to determine bot response based on weather conditions
            const botResponse = advisePlantingTime(userInputText);
            displayMessage(botResponse, 'bot');

            // Save chat messages to local storage
            saveChatMessage('user', userInputText);
            saveChatMessage('bot', botResponse);
        }
    }
}

// Function to provide responses based on user input
function advisePlantingTime(weatherConditions) {
    let plantingAdvice;

    if (weatherConditions.includes('ceo')) {
        plantingAdvice = "ENG james munywa";
    } else if (weatherConditions.includes('contact') || weatherConditions.includes('tel') || weatherConditions.includes('number')) {
        plantingAdvice = "0719101012";
    } else if (weatherConditions.includes('services') || weatherConditions.includes('products')) {
        plantingAdvice = "kindly view the about page then goals";
    } else if (weatherConditions.includes('corruption') || weatherConditions.includes('overpay') || weatherConditions.includes('con')) {
        plantingAdvice = "Am very sorry for that. Feel free to contact us via the contact link. Next time be careful.";
    } else if (weatherConditions.includes('job') || weatherConditions.includes('career')) {
        plantingAdvice = "Soon we will be posting vacancies. Remember our customer has an added advantage.";
    } else if (weatherConditions.includes('satisfied') || weatherConditions.includes('well')) {
        plantingAdvice = "Fine, feel free to chat.";
    } else if (weatherConditions.includes('repair') || weatherConditions.includes('faulty')) {
        plantingAdvice = "We repair all electronic gadgets and troubleshoot faults.";
    } else if (weatherConditions.includes('prices') || weatherConditions.includes('budget')) {
        plantingAdvice = "We have offers and low prices.";
    } else if (weatherConditions.includes('buy') || weatherConditions.includes('sell')) {
        plantingAdvice = "Feel free to contact us.";
    } else if (weatherConditions.includes('services') || weatherConditions.includes('do')) {
        plantingAdvice = "We do any network support and electrical device repair and electrical installations.";
    } else if (weatherConditions.includes('developer')) {
        plantingAdvice = "Peter Kimanzi";
    } else if (weatherConditions.includes('contacted') && weatherConditions.includes('no feedback')) {
        plantingAdvice = "Sorry for that, I will alert the staff.";
    } else if (weatherConditions.includes('hi') || weatherConditions.includes('hello')) {
        plantingAdvice = "Hello! I'm fine.";
    } else if (weatherConditions.includes('what is this') || weatherConditions.includes('who are you')) {
        plantingAdvice = "Are you new here? Can't find something on the web? I'm here to respond to you very quickly.";
    } else if (weatherConditions.includes('goals')) {
        plantingAdvice = "Go to About Us > Goals.";
    } else if (weatherConditions.includes('motto') || weatherConditions.includes('vision')) {
        plantingAdvice = "We build people, not businesses, then people build businesses.";
    } else if (weatherConditions.includes('year of foundation')) {
        plantingAdvice = "2024.";
    } else if (weatherConditions.includes('headquarters')) {
        plantingAdvice = "GITARU, KIAMBU, KENYA, AFRICA.";
    } else if (weatherConditions.includes('thanks') || weatherConditions.includes('ok')) {
        plantingAdvice = "Okay!";
    } else {
        plantingAdvice = "I will be added the ability by my developer to respond to you soon! But feel free to contact us.";
    }

    return plantingAdvice;
}

// Function to save chat messages to local storage
function saveChatMessage(sender, message) {
    const chats = JSON.parse(localStorage.getItem('chats')) || [];
    chats.push({ sender, message });
    localStorage.setItem('chats', JSON.stringify(chats));
}

// Function to load chat messages from local storage
function loadChatMessages() {
    const chats = JSON.parse(localStorage.getItem('chats')) || [];
    chats.forEach(chat => displayMessage(chat.message, chat.sender));
}

// Load chat messages when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadChatMessages();
});

// Initial greeting from the bot
displayMessage("Hi, I'm WATTMASTER chatting ROBOT. Ask me something about the company.", 'bot');

