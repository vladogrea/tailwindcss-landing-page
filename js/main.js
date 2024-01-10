const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-[0px]';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
  if(mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass)
  }
})

//swipper part
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});

//scroll reveal animations

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400
});

//hero
sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.hero__img');

//stats
sr.reveal('.stats__item', {
  delay: 400,
  distance: '100px',
  interval: 100,
  origin: 'top'
});

//services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  delay: 400,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})

//appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__form');

//footer
sr.reveal('.footer');
sr.reveal('.footer__item');