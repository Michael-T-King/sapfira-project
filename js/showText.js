document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var spans = document.querySelectorAll('.discription span');
    if (spans) {
    function animateSpans(spans) {
      var index = 0;
      var interval = setInterval(function() {
        if (index < spans.length - 1) {
          spans[index].style.transform = 'translateX(0)';
          spans[index].style.opacity = 1;
          index++;
        } else {
          clearInterval(interval);
          spans[index].style.transform = 'translateX(0)';
          spans[index].style.opacity = 1;
          animateOrderSpan(); 
        }
      }, 400); 
    }
    animateSpans(spans);
    function animateOrderSpan() {
      var orderSpan = document.querySelector('.discription__order');
      setTimeout(function() {
        orderSpan.style.transition = 'opacity 3s';
        orderSpan.style.opacity = 1;
      }, 0); 
    }
   }
  }, 100); 
  
  });
  
  
  function startShaking(element) {
    element.classList.add("shake");
  }
  
  function stopShaking(element) {
    element.classList.remove("shake");
  }
  
  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }