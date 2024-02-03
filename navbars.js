
//navbar changes to fixed when user scrolls to the other page
let container = document.getElementById('full_container');
let navbar = document.getElementById('static_navbar');
var navbarOffset = navbar.offsetTop;

function handleScroll() {
  if (container.scrollTop > 728) {
    navbar.style.position = 'fixed';
    navbar.classList.add("navbar_slide_in_class");
  } else {
    navbar.style.position = 'static';
    navbar.classList.remove("navbar_slide_in_class");
  }
}
container.onscroll = function() {
  handleScroll();
};

//burger button and mobile navigation menu
var opened = false;
const burger = document.querySelector("#burger_button");
const mobile_menu = document.querySelector("#mobile_menu");
const backbutton = document.querySelector(".back_button");

burger.addEventListener("click", () => {
    if (!opened){
        burger.classList.add("invisible");
        mobile_menu.classList.add("visible");
        mobile_menu.classList.remove("slide_out_class");
        mobile_menu.classList.add("slide_in_class");
        document.body.style.overflow = 'hidden';
        opened=true;
    }
})
function close_Navbar(){
    if (opened){
        burger.classList.remove("invisible");
        document.body.style.overflow = 'auto';
        mobile_menu.classList.add("slide_out_class");
        mobile_menu.classList.remove("slide_in_class");
        opened=false;
    }
}
backbutton.addEventListener("click", () => {
    close_Navbar();
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

