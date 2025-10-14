let index = 0;
const slides = document.getElementById('slides');

function showSlide() { 
  slides.style.transform = `translateX(-${index*100}%) translateZ(0)`; 
}
function nextSlide() { 
  if(index < 8) { index++; showSlide(); } 
}
function prevSlide() { 
  if(index > 0) { index--; showSlide(); } 
}

// -------------------------
// Message Slide Typewriter
// -------------------------
const msg = document.getElementById('msg');
const text = "My love,<br>Every moment I think of you,<br>You make my heart smile, even from miles away. 💗";

function typeMessage() {
  msg.innerHTML = ''; // clear previous content
  let i = 0;

  function typeChar() {
    // Check if current part is <br>
    if(text[i] === '<' && text.slice(i, i+4) === '<br>') {
      msg.innerHTML += '<br>';
      i += 4; // skip over <br>
    } else {
      msg.innerHTML += text[i];
      i++;
    }
    if(i < text.length) {
      setTimeout(typeChar, 60);
    }
  }

  typeChar();
}

// -------------------------
// Noob Slide Text
// -------------------------
const noobMsg = document.getElementById('noobMsg');
const noobText = "Or haan agar mujhe dobara noob bola toh<br>tumhara sar phod dungi samjhe 😤";
noobMsg.innerHTML = noobText;

// -------------------------
// Song for Dedicated Song Slide
// -------------------------
const songFile = document.getElementById('songFile');
const audio = document.getElementById('audio');
songFile.addEventListener('change', e => {
  const file = e.target.files[0];
  if(file) {
    audio.src = URL.createObjectURL(file);
    // User clicks play manually
  }
});

// -------------------------
// Confetti / Party Slide
// -------------------------
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let confettiPieces = [];

function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function startConfetti() {
  confettiPieces = Array.from({length:100}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dx: (Math.random()-0.5)*2,
    dy: Math.random()*2 + 1,
    color: `hsl(${Math.random()*360},100%,75%)`
  }));
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let c of confettiPieces){
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.r,0,2*Math.PI);
    ctx.fillStyle=c.color;
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;
    if(c.y > canvas.height) c.y = 0;
  }
  requestAnimationFrame(animateConfetti);
}

// -------------------------
// Floating hearts background
// -------------------------
function createHearts() {
  for(let i = 0; i < 20; i++){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random()*100+'%';
    heart.style.animationDuration = (5+Math.random()*5)+'s';
    heart.style.fontSize = (16+Math.random()*24)+'px';
    document.body.appendChild(heart);
    heart.textContent='❤️';
    setTimeout(()=>{ heart.remove(); createHearts(); }, 10000);
  }
}
createHearts();