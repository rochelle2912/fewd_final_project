// Donation Pop Up Form

const donateBtn = document.querySelector('#donation-btn');
const donateCrossBtn = document.querySelector('#donation-close-btn');
const formContainer = document.querySelector('.form-container')

function formAppears () {
formContainer.classList.add('show-form')
}
donateBtn.addEventListener('click', formAppears);

function formDisappears () {
    formContainer.classList.remove('show-form')
}
donateCrossBtn.addEventListener('click', formDisappears);


// Main Menu - Popular Breeds Mobile / iPad Gallery
baguetteBox.run('.mobile-gallery', {
    animation: 'fadeIn',
    preload: 2
});


// Side Menu Pop Up

const burgerBtn = document.querySelector('#hamburger-button');
const menu = document.querySelector('#side-menu')
const crossBtn = document.querySelector('#menu-close-button');

function sideMenuAppears () {
menu.classList.add('show-menu')
}
burgerBtn.addEventListener('click', sideMenuAppears);

function sideMenuDisappears () {
    menu.classList.remove('show-menu')
}
crossBtn.addEventListener('click', sideMenuDisappears);


// Rescue Centres - TV Scroller

const channelUpBtn = document.querySelector('#channel-up');
const tvScreen = document.querySelector('.tv-screen');
const channelDownBtn = document.querySelector('#channel-down');

function changeChannelUp () {
    const currentSrc = tvScreen.getAttribute('src')
    if (currentSrc === 'img/gallery/rescue-centre1.png') {
        tvScreen.src ='img/gallery/rescue-centre2.png'
    } else if (currentSrc === 'img/gallery/rescue-centre2.png') {
        tvScreen.src = 'img/gallery/rescue-centre3.png'
    } else if (currentSrc === 'img/gallery/rescue-centre3.png') {
        tvScreen.src = 'img/gallery/rescue-centre4.png'
    } else if (currentSrc === 'img/gallery/rescue-centre4.png') {
        tvScreen.src = 'img/gallery/rescue-centre1.png'
}
}
channelUpBtn.addEventListener('click', changeChannelUp);

function changeChannelDown () {
    const currentSrc = tvScreen.getAttribute('src')
    if (currentSrc === 'img/gallery/rescue-centre4.png') {
        tvScreen.src = 'img/gallery/rescue-centre3.png'
    } else if (currentSrc === 'img/gallery/rescue-centre3.png') {
        tvScreen.src = 'img/gallery/rescue-centre2.png'
    } else if (currentSrc === 'img/gallery/rescue-centre2.png') {
        tvScreen.src = 'img/gallery/rescue-centre1.png'
    } else if (currentSrc === 'img/gallery/rescue-centre1.png') {
        tvScreen.src = 'img/gallery/rescue-centre4.png'
    }
}
channelDownBtn.addEventListener('click', changeChannelDown)


// Testimonials Slideshow - Modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// How we're tracking

const outcome1 = document.querySelector('.outcome1');
const outcomeText1 = document.querySelector('.outcome-text1')
const outcomeIcon1 = document.querySelector('.outcome-icon1')

function showOutcome1() {
    outcomeText1.classList.add('outcome-text-show')
    outcomeIcon1.classList.add('outcome-icon-remove')
}
outcome1.addEventListener('click', showOutcome1);

const outcome2 = document.querySelector('.outcome2');
const outcomeText2 = document.querySelector('.outcome-text2')
const outcomeIcon2 = document.querySelector('.outcome-icon2')

function showOutcome2() {
    outcomeText2.classList.add('outcome-text-show')
    outcomeIcon2.classList.add('outcome-icon-remove')
}
outcome2.addEventListener('click', showOutcome2);

const outcome3 = document.querySelector('.outcome3');
const outcomeText3 = document.querySelector('.outcome-text3')
const outcomeIcon3 = document.querySelector('.outcome-icon3')

function showOutcome3() {
    outcomeText3.classList.add('outcome-text-show')
    outcomeIcon3.classList.add('outcome-icon-remove')
}
outcome3.addEventListener('click', showOutcome3);

const outcome4 = document.querySelector('.outcome4');
const outcomeText4 = document.querySelector('.outcome-text4')
const outcomeIcon4 = document.querySelector('.outcome-icon4')

function showOutcome4() {
    outcomeText4.classList.add('outcome-text-show')
    outcomeIcon4.classList.add('outcome-icon-remove')
}
outcome4.addEventListener('click', showOutcome4);
