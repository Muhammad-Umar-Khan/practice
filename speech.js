function speakText() {
  const text = document.getElementById("text").value;

  if (text.trim() !== "") {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[3];
    window.speechSynthesis.speak(utterance);
  }ert("Please enter some text to speak.");
  }
}
