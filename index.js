let header = document.querySelector("nav");
let navbar = document.querySelector("nav");
let links = navbar.querySelectorAll(".menu__link");
var btn = document.getElementById("menu-btn");
var menu = document.querySelector(".menu__links");

const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaQueryChange(event) {
  if (event.matches) {
    const linksIterables = Array.from(links)
    linksIterables.forEach(elemento =>{
    
      elemento.addEventListener("click", ()=>{
        menu.style.display="none";
      })
      
    })
  } }

mediaQuery.addEventListener('change', handleMediaQueryChange);


window.addEventListener("scroll", function() {
  let alturaBarra = header.offsetHeight;
  let posicion = window.pageYOffset;
  if (posicion > alturaBarra) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");
  sections.forEach(function(section) {
    if (window.scrollY >= section.offsetTop - navbar.offsetHeight && window.scrollY < section.offsetTop + section.offsetHeight) {
      links.forEach(function(link) {
        link.classList.remove("active");
      });
      let enlace = navbar.querySelector('a[href="#' + section.id + '"]'); 
      enlace.classList.add("active");
    }
  });
});

btn.addEventListener("click", function() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});




