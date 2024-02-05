import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

/// colorPicker
const white = document.querySelector('.div-40')
const black = document.querySelector('.div-42')
const red = document.querySelector('.div-43')
const gray = document.querySelector('.div-44')

white.classList.add('border')
white.addEventListener('click',()=>{
    white.classList.add('border')
    black.classList.remove('border')
    red.classList.remove('border')
    gray.classList.remove('border')
})
black.addEventListener('click',()=>{
    black.classList.add('border')
    white.classList.remove('border')
    red.classList.remove('border')
    gray.classList.remove('border')
})
red.addEventListener('click',()=>{
    red.classList.add('border')
    black.classList.remove('border')
    white.classList.remove('border')
    gray.classList.remove('border')
})
gray.addEventListener('click',()=>{
    gray.classList.add('border')
    black.classList.remove('border')
    red.classList.remove('border')
    white.classList.remove('border')
})




///spoilers
const spoiler1 = document.querySelector('.div-95')
spoiler1.addEventListener('click',()=>{
    document.querySelector('.div-96').classList.toggle('none')
    document.querySelector('.zz').classList.toggle('noneSpoiler')
    document.querySelector('.zz').classList.toggle('img-22')
})

const spoiler2 = document.querySelector('.div-95z')
spoiler2.addEventListener('click',()=>{
    document.querySelector('.div-96z').classList.toggle('none')
    document.querySelector('.zz1').classList.toggle('noneSpoiler')
    document.querySelector('.zz1').classList.toggle('img-22')  
})

const spoiler3 = document.querySelector('.div-95zz')
spoiler3.addEventListener('click',()=>{
    document.querySelector('.div-96zz').classList.toggle('none')
    document.querySelector('.zz2').classList.toggle('noneSpoiler')
    document.querySelector('.zz2').classList.toggle('img-22')  
})


////////////////////////// Swiper1
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

////// Swiper2
var swiper3 = new Swiper(".mySwiper2222", {
    loop: true,
    
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination2",
      clickable: false,
    },
  });