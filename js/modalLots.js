var lotsLinks = document.querySelectorAll('.lots__img, .lots__title, .lots__price, .modal-cart__lots-img, .modal-cart__discription-container, .modal-cart__title');
const modalLots = document.querySelector('.modal-lots');
var modalLotsCloseBtn = document.querySelectorAll('.modal-lots__close, .to-cart-btn');
const modalLotsContainer = document.querySelector('.modal-lots__container');


lotsLinks.forEach(function(lotsLink) {
  lotsLink.addEventListener('click', function(event) {
    event.preventDefault();
    var modalLots = document.querySelector('.modal-lots'); 
    var body = document.querySelector('body');
    
    modalLots.classList.add('modal-lots__open');
    body.classList.add('modal-lots__open');
    body.style.overflow = 'hidden';
  });
});

modalLotsCloseBtn.forEach(function(modalLotsCloseBtn) {
modalLotsCloseBtn.addEventListener('click', function() {
  var modalLots = document.querySelector('.modal-lots'); 
  var body = document.querySelector('body');
  modalLots.classList.remove('modal-lots__open');
  body.classList.remove('modal-lots__open');
  body.style.overflow = 'auto';
});
});

modalLots.addEventListener('click', function(event) {
  if (!modalLotsContainer.contains(event.target) && modalLots.contains(event.target)) {
    modalLots.classList.remove('modal-lots__open');
    body.classList.remove('modal-lots__open');
    body.style.overflow = 'auto';
  }
});






