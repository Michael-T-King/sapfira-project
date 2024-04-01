
//----------- нажатие на кнопка выбрать и выбрать все -----------------------
const container = document.querySelector('.modal-cart__container');

container.addEventListener('change', function(event) {
  if (event.target.classList.contains('modal-cart__checkbox-all')) {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('.modal-cart__checkbox');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = isChecked;
    });
  }
});

//----------- скрол наверх ----------------------

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add('active');
  } else {
    scrollToTopButton.classList.remove('active');
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//------------открытие и закрытие модального окна ----------------------
const entryLink = document.querySelector('.login');
const modalEntry = document.querySelector('.modal-entry');
const modalEntryContainer = document.querySelector('.modal-entry__container');
const modalEntryCloseBtn = document.querySelector('.modal-entry__close');
const body = document.querySelector('body');


//---- открытие окга входа в акаунт ----
entryLink.addEventListener('click', function(event) {
  event.preventDefault();
  modalEntry.classList.add('modal-entry__open');
  body.classList.add('modal-entry__open');
  body.style.overflow = 'hidden';
});

modalEntryCloseBtn.addEventListener('click', function() {
  modalEntry.classList.remove('modal-entry__open');
  body.classList.remove('modal-entry__open');
  body.style.overflow = 'auto';
});

modalEntry.addEventListener('click', function(event) {
  if (!modalEntryContainer.contains(event.target) && modalEntry.contains(event.target)) {
    modalEntry.classList.remove('modal-entry__open');
    body.classList.remove('modal-entry__open');
    body.style.overflow = 'auto';
  }
});

//--------открытие корзины----

const modalCart = document.querySelector('.modal-cart');
const modalCartContainer = document.querySelector('.modal-cart__container');
const modalCartCloseBtn = document.querySelector('.modal__close');
const cartLink = document.querySelector('.cart');

cartLink.addEventListener('click', function(event) {
  event.preventDefault();
  modalCart.classList.add('modal-cart__open');
  body.classList.add('modal-cart-open');
  body.style.overflow = 'hidden';
});

modalCartCloseBtn.addEventListener('click', function() {
  modalCart.classList.remove('modal-cart__open');
  body.classList.remove('modal-cart-open');
  body.style.overflow = 'auto';
});

modalCart.addEventListener('click', function(event) {
  if (!modalCartContainer.contains(event.target) && modalCart.contains(event.target)) {
    modalCart.classList.remove('modal-cart__open');
    body.classList.remove('modal-cart__open');
    body.style.overflow = 'auto';
  }
});


//--------подсчет корзины-----------------

//---- открывание скрытых элементов по клику на кнопку еще----------------------
const moreBtn = document.querySelector('.lots__more');
const lotsHiddenItems = document.querySelectorAll('.lots__hidden');
let i = 0;

if (moreBtn) {
  moreBtn.addEventListener('click', function() {
    lotsHiddenItems.forEach(function(lot, index) {
      if (index < i + 12) {
        lot.style.display = 'flex';
      }
    });
    i += 12; 
  });
}

//---- кнопка наверх -----
function handleScroll() {
  var elements = document.querySelectorAll(".main__new-text");
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      startShaking(element);
      setTimeout(function() {
        stopShaking(element);
      }, 500);
    }
  });
}

window.addEventListener("scroll", handleScroll);

//---- клик по картинке в карточке товара------
var imgContainers = document.querySelectorAll('.modal-cart__lots-img-small');
var prevImgContainer = null;
var firstImgContainer = imgContainers[0];

// Функция для восстановления стандартных стилей элемента
function resetStyles(element) {
  element.style.position = 'static';
  element.style.bottom = '30px';
  element.style.width = '80px';
  element.style.height = '80px';
  element.style.zIndex = '';
}

// Применение стилей к первому элементу
resetStyles(firstImgContainer);
firstImgContainer.style.position = 'fixed';
firstImgContainer.style.left = '30px';
firstImgContainer.style.top = '20px';
firstImgContainer.style.width = '400px';
firstImgContainer.style.height = '450px';
firstImgContainer.style.zIndex = '999';

imgContainers.forEach(function (imgContainer) {
  imgContainer.addEventListener('click', function () {
    if (prevImgContainer !== null) {
      // Восстановление стандартных стилей предыдущего изображения
      resetStyles(prevImgContainer);
    }

    // Восстановление стандартных стилей первого элемента
    resetStyles(firstImgContainer);

    // Установка стилей для нового изображения
    imgContainer.style.position = 'fixed';
    imgContainer.style.left = '30px';
    imgContainer.style.top = '20px';
    imgContainer.style.width = '400px';
    imgContainer.style.height = '450px';
    imgContainer.style.zIndex = '999';

    // Обновление значения предыдущего изображения
    prevImgContainer = imgContainer;
  });
});


