const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const lettersSection = document.querySelector('.letters');
const lettersNav = document.querySelector('#letters');
const numbersSection = document.querySelector('.numbers');
const numbersNav = document.querySelector('#numbers');

// handler for toggle is-active primary-nav
menuToggle.addEventListener('click', (event) => {
    primaryNav.classList.toggle('is-active');
})
// handler for toggle is-active numbers
lettersNav.addEventListener('click', (event) => {
    lettersSection.classList.toggle('is-active');
})
// handler for toggle is-active letters
numbersNav.addEventListener('click', (event) => {
    numbersSection.classList.toggle('is-active');
})