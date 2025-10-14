let index = 0;
const slides = document.getElementById("slides");
const partySong = document.getElementById("partySong");
const welcomeSong = document.getElementById("welcomeSong");

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Play party song only on slide 5 (index 4)
  if (index === 4) { partySong.play().catch(() => {}); }
  else { partySong.pause(); partySong.currentTime = 0; }
}

function nextSlide() {
  if (index < 8) { index++; showSlide(); }
}

function prevSlide() {
  if (index > 0) { index--; showSlide(); }
}

// Typewriter effect for gift message
const msg = document.getElementById("msg");
const text = "My love, every moment I think of you. You make my heart smile, even from miles away. 💗";
function typeMessage() {
  msg.textContent = "";
  let i = 0;
  const typer = setInterval(() => {
    msg.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typer);
  }, 60);
}

// Initialize first slide
showSlide();