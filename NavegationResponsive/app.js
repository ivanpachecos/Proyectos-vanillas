const navTaggle = document.querySelector(".nav-toggle");
const links = document.querySelector('.links')

navTaggle.addEventListener("click", function() {
  links.classList.toggle('show-links');
});
