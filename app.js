const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
console.log(nav);


burger.addEventListener('click', () => {
    burger.classList.toggle('activ');
    nav.classList.toggle('activ');
});