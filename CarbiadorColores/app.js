const colors = ["green", "red", "rgba(133,222,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  const generateColor = numberRandon();
  
  document.body.style.backgroundColor = colors[generateColor];
  color.textContent = colors[generateColor];
});

function numberRandon() {
  return Math.floor(Math.random() * colors.length);
};

