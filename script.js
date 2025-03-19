const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".game-over");
let isGameOver = false;


const jump = () => {

  if (isGameOver) return;

  mario.classList.add("jump");

  setTimeout(() => {
    if (isGameOver) return; 

    mario.classList.remove("jump");
    
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
    isGameOver = true;
    
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px `;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px `;

    mario.src = "./assets/mario-game-over.png";
    mario.style.width = "80px";
    

    gameOver.classList.remove("hidden");

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
