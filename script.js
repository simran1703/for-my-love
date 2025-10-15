let index=0;
const slides=document.getElementById('slides');

function showSlide(){
  slides.style.transform=`translateX(-${index*100}%)`;
  if(index!==4){ // stop party audio if leaving party slide
    const partyAudio=document.getElementById('partyAudio');
    partyAudio.pause();
    partyAudio.currentTime=0;
  }
}

function nextSlide(){ if(index<8){ index++; showSlide(); } }
function prevSlide(){ if(index>0){ index--; showSlide(); } }

// Typewriter message
const msg=document.getElementById('msg');
const text="My love, every moment I think of you.<br>You make my heart smile, even from miles away. 💗";
function typeMessage(){
  msg.innerHTML='';
  let i=0;
  const typer=setInterval(()=>{
    if(i<text.length){
      if(text[i]==='<'){ // handle <br>
        msg.innerHTML+=text.slice(i,i+4);
        i+=4;
      } else {
        msg.innerHTML+=text[i];
        i++;
      }
    } else clearInterval(typer);
  },50);
}

// Noob slide message
const noobMsg=document.getElementById('noobMsg');
noobMsg.innerHTML="Or haan agar mujhe dobara noob<br>toh tumhara sar phod dungi samjhe 😤";

// Party confetti
const canvas=document.getElementById('confetti');
const ctx=canvas.getContext('2d');
let confettiPieces=[];
function resizeCanvas(){canvas.width=canvas.clientWidth; canvas.height=canvas.clientHeight;}
window.addEventListener('resize',resizeCanvas);
resizeCanvas();
function startParty(){
  const audio=document.getElementById('partyAudio');
  audio.play();
  confettiPieces=Array.from({length:100},()=>({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*6+2,
    dx:(Math.random()-0.5)*2,
    dy:Math.random()*2+1,
    color:`hsl(${Math.random()*360},100%,75%)`
  }));
  animateConfetti();
}
function animateConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let c of confettiPieces){
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.r,0,2*Math.PI);
    ctx.fillStyle=c.color;
    ctx.fill();
    c.x+=c.dx;
    c.y+=c.dy;
    if(c.y>canvas.height) c.y=0;
  }
  requestAnimationFrame(animateConfetti);
}

showSlide();