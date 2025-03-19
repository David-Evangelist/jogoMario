const sonic = document.querySelector(".sonic");
const pipe = document.querySelector(".pipe");
let isGameOver = false; // Flag para controle do game over


const jump = () => {

  if (isGameOver) return;

  sonic.classList.add("jump");
  sonic.src = "./assets/sonic-roll.gif";
  sonic.style.width = "90px";

  setTimeout(() => {
    if (isGameOver) return; 

    sonic.classList.remove("jump");
    sonic.src = "./assets/sonic_.gif";
    sonic.style.width = "120px";
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");

  if (pipePosition <= 120 && sonicPosition < 80 && pipePosition > 0) {
    isGameOver = true;
    
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px `;

    sonic.style.animation = "none";
    sonic.style.bottom = `${sonicPosition}px `;

    sonic.src = "./assets/sonic-game-over.gif";
    sonic.style.width = "220px";
    


    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
