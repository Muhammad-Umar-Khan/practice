const text = input.value;
const utterance = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(utterance);
