let nav = document.querySelector('ul');
let bars = document.querySelector('.mobile-menu');


bars.addEventListener("click", ()=>{
    // bars.classList.toggle('fa-times');
    nav.classList.toggle('close')
  })