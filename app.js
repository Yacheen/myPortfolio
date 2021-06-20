const hamburger = document.getElementById('burger-button');
const items = document.querySelector('.navigation-links');
console.log(hamburger);
console.log(items);

hamburger.addEventListener('click', () => {
    items.classList.toggle('navigation-links-active');
    hamburger.classList.toggle('fa-times');
    
})