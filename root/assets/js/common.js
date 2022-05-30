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
    var menu = document.getElementsByClassName("c-header");
    menu[0].classList.toggle("js-active");
    var html_appentlose = '<li class="c-menu c-menu__logo"><a href="#">Tiếng Việt</a>'+
    '              </li>';
    var html_appent= '<li class="c-menu c-menu__logo"><a href="#"><picture>'+
    '                  <source srcset="assets/images/logo.webp" type="image/webp"><img src="assets/images/logo.png" data-src="assets/images/logo.png" alt="logo">'+
    '                </picture></a>'+
    '              </li>';
    var html_appentLang = '<li class="c-menu c-menu__logo"><a href="#">Tiếng Việt</a>'+
    '              </li>';
    var select_appent = document.getElementsByClassName("c-header_menu")[0];
    select_appent.insertAdjacentHTML("afterbegin", html_appent);
    select_appent.insertAdjacentHTML("beforeend", html_appentLang);

}
// function toggleCart(){
//   if (window.screen.width >= 768) {
//       var cartToggle = document.getElementsByClassName("m-cart");
//       cartToggle[0].classList.toggle("js-active");
//   }
//   else{
//       window.location.href = '/gio-hang';
//   }
// }
