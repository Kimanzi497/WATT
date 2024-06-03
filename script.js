const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function displayMessage(message, sender) {
    const div = document.createElement('div');
    div.className = sender === 'user' ? 'user-message' : 'bot-message';
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleInput(event) {
    if (event.key === 'Enter') {
        const userInputText = userInput.value.trim().toLowerCase();
        displayMessage(userInputText, 'user');
        userInput.value = '';

        // Logic to determine bot response based on weather conditions
        const botResponse = advisePlantingTime(userInputText);
        displayMessage(botResponse, 'bot');
    }
}

function advisePlantingTime(weatherConditions) {
    // Example decision tree based on weather conditions
    let plantingAdvice;

    if (weatherConditions.includes('ceo')) {
        plantingAdvice = "ENG james munywa";
    } else if (weatherConditions.includes('contact') || weatherConditions.includes('tel') || weatherConditions.includes('number')) {
        plantingAdvice = "0719101012  ";
    }else if (weatherConditions.includes('services') || weatherConditions.includes('products')) {
        plantingAdvice = "kindly view the about page then goals ";
    }else if (weatherConditions.includes('corruption') || weatherConditions.includes('overpay') || weatherConditions.includes('con')) {
        plantingAdvice = "Am very sorry for that. feel free to contact us via contact link.next time be careful";
    }
 else if (weatherConditions.includes('job') || weatherConditions.includes('career')) {
        plantingAdvice = " soon were posting vacancies remember our customer has an added advantage ";}
else if (weatherConditions.includes('sastified') || weatherConditions.includes('well')) {
        plantingAdvice = "fine feel free  to chat";}
else if (weatherConditions.includes('repair') || weatherConditions.includes('faulty')) {
        plantingAdvice = " we repair all electronic gadgets and troubleshoot faultiness ";}
else if (weatherConditions.includes('prices') || weatherConditions.includes('budget')) {
        plantingAdvice = " we have offers and low prices";}
else if (weatherConditions.includes('buy') || weatherConditions.includes('sell')) {
        plantingAdvice = " feel free to contact us";}
else if (weatherConditions.includes('services') ) {
        plantingAdvice = " we do any network support and electrical device repair and eletric installations";}
else if (weatherConditions.includes('buy') || weatherConditions.includes('sell')) {
        plantingAdvice = " feel free to contact us";}
else if (weatherConditions.includes('developer') ) {
        plantingAdvice = " Peter Kimanzi";}
else if (weatherConditions.includes('contacted') && weatherConditions.includes('no feedback')) {
        plantingAdvice = " Sorry for that i will alert the staff ";}
else if (weatherConditions.includes('hi') || weatherConditions.includes('how are you')) {
        plantingAdvice = " am fine";}
else if (weatherConditions.includes('what is this') || weatherConditions.includes('who are you')) {
        plantingAdvice = " you are new here? you can not find something in the web? am here to respond to you extremely very quickly ";}
else if (weatherConditions.includes('goqls') ) {
        plantingAdvice = " go to about us > goals";}
else if (weatherConditions.includes('motto') || weatherConditions.includes('vision')) {
        plantingAdvice = " we build people not businness then people build businness ";}
else if (weatherConditions.includes('year of foundation') ) {
        plantingAdvice = " 2024";}
else if (weatherConditions.includes('headquarters')) {
        plantingAdvice = " GITARU KIAMBU KENYA AFRICA";}
else if (weatherConditions.includes('thanks') || weatherConditions.includes('ok')) {
        plantingAdvice = " okay!";}

else {
        plantingAdvice = " i will be added ability by my developer to respond to you soon!!!!. But feel free to contact us ";
    }

    return plantingAdvice;
}

// Initial greeting from the bot
displayMessage("Hi am WATTMASTER chatting ROBOT ask me something.", 'bot');
