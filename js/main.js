var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
  });
  function myFunction(x) {
    x.classList.toggle("change");
  }

  const toggleMenu = document.querySelector(".toggle-menu");
  const links = document.querySelector(".links");

  toggleMenu.addEventListener("click", function() {
    links.classList.toggle("active");
    toggleMenu.classList.toggle("active");
  });
  
  let loader = document.getElementById("page-loader");

  window.addEventListener('load', function(load) {
    window.removeEventListener('load', load, false);               
    setTimeout(function(){loader.style.display = 'none'},2000);
  
  },false);

// window.addEventListener("load", () => {
//   const loader = document.getElementById("#page-loader");

//   loader.classList.add("loader-hidden");

//   loader.addEventListener("transitionend", () => {
//     document.body.removeChild("page-loader");
//   })
// })

 ScrollReveal({
   reset: true,
   distance: "70px",
   duration: 2000,
   delay: 200,
 });
 ScrollReveal().reveal("#heads", {
   origin: "top",
 });
 ScrollReveal().reveal(".product-list, .containersss", { origin: "bottom" });
 ScrollReveal().reveal(
   "#abadu, .contact-address",
   {  origin: "left" }
 );
 ScrollReveal().reveal(" .contact-box", { origin: "right" });
 