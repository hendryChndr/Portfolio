const typingElement = document.getElementById("typing");

const phrases = [
    "Binus University Undergraduate",
    "Computer Science Student",
    "Software Engineering Student",
    "UI/UX Enthusiast",
    "Web Development Enthusiast"
];

let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed for typing each letter
const erasingSpeed = 50; // Speed for erasing each letter
const delayBetweenPhrases = 1500; // Delay before starting the next phrase

function type() {
    const currentText = phrases[currentPhrase];

    if (isDeleting) {
        // Deleting text
        typingElement.innerHTML = currentText.substring(0, currentLetter - 1);
        currentLetter--;

        if (currentLetter === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase
            setTimeout(type, typingSpeed); // Start typing the new phrase
        } else {
            setTimeout(type, erasingSpeed); // Continue erasing
        }
    } else {
        // Typing text
        typingElement.innerHTML = currentText.substring(0, currentLetter + 1);
        currentLetter++;

        if (currentLetter === currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenPhrases); // Pause before deleting
        } else {
            setTimeout(type, typingSpeed); // Continue typing
        }
    }
}

type();