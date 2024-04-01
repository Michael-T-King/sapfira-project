var theModalCartContainer = document.querySelector('.modal-cart__lots-container');
var addToCartButtons = document.querySelectorAll('.to-cart-btn');
var checkboxAll = document.querySelector('.modal-cart__checkbox-all');
var allPriceTitle = document.querySelector('.modal-cart__all-price-title');
var allPrice = document.querySelector('.modal-cart__all-price');
var buyAllBtn = document.querySelector('.modal-cart__buy-all-btn');
var cartTitle = document.querySelector('.modal-cart__title');

var emptyCartText = 'КОРЗИНА ПУСТА';

function updateCartVisibility() {
  if (theModalCartContainer.children.length === 0) {
    // Если корзина пуста
    checkboxAll.style.display = 'none';
    allPriceTitle.style.display = 'none';
    allPrice.style.display = 'none';
    buyAllBtn.style.display = 'none';

    cartTitle.textContent = emptyCartText;
    cartTitle.style.textAlign = 'center';
  } else {
    // Если в корзине есть элементы
    checkboxAll.style.display = 'block';
    allPriceTitle.style.display = 'inline';
    allPrice.style.display = 'inline';
    buyAllBtn.style.display = 'block';

    cartTitle.textContent = 'КОРЗИНА';
    cartTitle.style.textAlign = 'center';
  }
}

function createNewLotsElement() {
  var newLotsElement = document.createElement('div');
  newLotsElement.classList.add('modal-cart__lots');

  newLotsElement.innerHTML = `
    <input type="checkbox" class="modal-cart__checkbox" />
    <label for="myCheckbox"></label>
    <img
      src="img/product/13.jpg"
      alt="image"
      class="modal-cart__lots-img"
    />


    <div class="modal-cart__discription-container">
      <span class="modal-cart__name"><h2>НАЗВАНИЕ</h2></span>
      <span class="modal-cart__discription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
        earum dolorem velit sequi alias at. Eum porro iusto ipsam
        delectus similique, consectetur asperiores molestias ab
        voluptatem nam eos rerum quos.
      </span>
      <div class="vertical-line"></div>
    </div>
    <span><h4 class="lots__price modal-cart__price">230 p</h4></span>
    <button class="modal-cart__btn-buy">КУПИТЬ</button>
    <div class="button-counter__container">  
    <button class="button-counter__minus">-</button>
    <span class="lots-counter">2</span>
    <button class="button-counter__plus">+</button>
    </div>
    <div class="lots-remainder">Осталось: <span class="lots-remainder__number"> 20 </span> <p>штук</p> </div>
  `;

  return newLotsElement;
}

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    var isAdded = button.getAttribute('data-added');
    if (!isAdded) {
      var newLotsElement = createNewLotsElement();
      theModalCartContainer.appendChild(newLotsElement);
      button.setAttribute('data-added', 'true');
      updateCartVisibility(); 
      console.log(button);
    }
  });
});

updateCartVisibility();