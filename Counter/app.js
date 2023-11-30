//contador inical
let count = 0;

//selectores
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

//accedemos a las clases para poder comparar
//forEch individualmente a cada class name
btns.forEach((everyBtn) => {
  everyBtn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    };
    if (styles.contains('reset')) {
      count = 0;
    };
    if (styles.contains('increase')) {
      count++;
    };
    value.textContent = count;
  });
});