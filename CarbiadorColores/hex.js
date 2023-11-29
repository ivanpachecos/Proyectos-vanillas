const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  let generateColor = '#';
  for (let i = 0; i < 6; i++) {
    generateColor += hex[randomNumber()];    
  };
  document.body.style.backgroundColor = generateColor;
  color.textContent = generateColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
};

