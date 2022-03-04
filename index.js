const container = document.querySelector(".container");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");

const terrorist = document.createElement("img");
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src", "https://i.ibb.co/JkZTd7z/shutterstock-download-removebg-preview.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  terrorist.style.position = "absolute";
  terrorist.style.top = randTop + "px";
  terrorist.style.left = randLeft + "px";
}, 1000);

let score = 0;

startBtn.addEventListener("click", () => {
  container.appendChild(terrorist);

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === terrorist) score++;

  startBtn.innerText = "SCORE: " + score;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});