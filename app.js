const hamburger = document.querySelector(".fa-bars");
const items = document.querySelector(".navigation-links");
const collectionOfItems = document.querySelectorAll(".items");

//for each item in here, add event listener that if they click it, toggle code above

hamburger.addEventListener("click", () => {
    items.classList.toggle("navigation-links-active");
    hamburger.classList.toggle("fa-times");
});
collectionOfItems.forEach((item) => {
    item.addEventListener("click", () => {
        items.classList.toggle("navigation-links-active");
        hamburger.classList.toggle("fa-times");
    });
});
