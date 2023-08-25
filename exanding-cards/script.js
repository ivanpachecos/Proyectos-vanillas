const $acctionImg = document.querySelectorAll('.img-content')

$acctionImg.forEach(acction => {
    acction.addEventListener('click', () => {
      removeAcction()
      acction.classList.add('active')
    })
})

function removeAcction() {
  $acctionImg.forEach(acction => {
    acction.classList.remove('active')
  }); 
}