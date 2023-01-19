const container = document.querySelector(".container");
const colors = ["red", "green", "yellow", "blue", "orange"];

for (let i = 0; i < 500; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = (element) => {
  let color = getRandomColor();
  element.style.background = color;
};

const removeColor = (element) => {
  element.style.background = "#1d1d1d";
};
