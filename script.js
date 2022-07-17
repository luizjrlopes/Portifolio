const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");
const links = document.querySelectorAll(".links li");
const sec = document.getElementById ("main");


hamburger.addEventListener("click", () => {
  

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

});

navLinks.addEventListener("click", () => {
    
        navLinks.classList.remove("open");;
    links.forEach(link => {
        link.classList.toggle("fade");
    });

});

