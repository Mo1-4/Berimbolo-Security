// Mobile Toggler
let bars = document.getElementById("bars")
let navToggle = document.getElementById("navToggle")

bars.addEventListener("click", function (){
    navToggle.classList.toggle("hidden")
    navToggle.classList.toggle("active")
})

// animations
const heroAnimation = document.querySelector('.hero-content');
heroAnimation.classList.add('animate__animated', 'animate__slideInLeft');

const camImageAnimation = document.querySelector('.cam-image');
camImageAnimation.classList.add('animate__animated', 'animate__jackInTheBox');


// Scroll Animation
const elements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate-in');
    }
});
}, {

threshold: 0.5,
});

elements.forEach((element) => {
observer.observe(element);
});

// Back To Top Setting
let backToTopButton = document.getElementById("backToTopButton");

window.addEventListener("load", () =>{
    window.scrollTo(0,0)
})

window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        backToTopButton.style.display = "block";
    } else{
        backToTopButton.style.display = "none";
    }
})

backToTopButton.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})