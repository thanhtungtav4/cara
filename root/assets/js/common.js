if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
};

function toggleMenu(){
    var menu = document.getElementsByClassName("nav-menu");
    menu[0].classList.toggle("js-active");
    var menuIcon = document.getElementsByClassName("nav-menu_mobile");
    menuIcon[0].classList.toggle("js-active");
}
function toggleCart(){
  if (window.screen.width >= 768) {
      var cartToggle = document.getElementsByClassName("m-cart");
      cartToggle[0].classList.toggle("js-active");
  }
  else{
      window.location.href = '/gio-hang';
  }
}
