// Typing Animation logic
const baseText = "I am a full stack dev but also a ";
const textArray = [
  "QA tester",
  "Gamer",
  "Pro",
  "Genius"
];

let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 40;
const pauseBetweenChanges = 1000;

function typeAndDelete() {
  const infoElement = document.getElementById('typing-text');
  if (!infoElement) return;

  const currentText = baseText + textArray[currentTextIndex];

  if (isDeleting) {
    if (currentLetterIndex > 0) {
      currentLetterIndex--;
      infoElement.textContent = currentText.substring(0, currentLetterIndex);
    } else {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
      setTimeout(typeAndDelete, pauseBetweenChanges);
      return;
    }
  } else {
    if (currentLetterIndex < currentText.length) {
      currentLetterIndex++;
      infoElement.textContent = currentText.substring(0, currentLetterIndex);
    } else {
      setTimeout(() => {
        isDeleting = true;
        typeAndDelete();
      }, pauseBetweenChanges);
      return;
    }
  }
  setTimeout(typeAndDelete, isDeleting ? deletingSpeed : typingSpeed);
}

// Mobile Menu
function toggleMobileMenu() {
  const nav = document.getElementById('navbar');
  // Simple toggle for the background or other effects if needed
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  typeAndDelete();

  // Contact Form Enhancement
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      // Basic validation or just let it submit to Flask
      console.log("Form submitted");
    });
  }
});
