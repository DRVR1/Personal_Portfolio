
//navbar changes to fixed when user scrolls to the other page
let container = document.getElementById('full_container');
let navbar = document.getElementById('static_navbar');
let navbar_container = document.getElementById('hero');
let created = false;

function burger_onclick(){
    console.log('clicked');
    if (!opened){
        burger.classList.add("invisible");
        mobile_menu.classList.add("visible");
        mobile_menu.classList.remove("slide_out_class");
        mobile_menu.classList.add("slide_in_class");
        document.body.style.overflow = 'hidden';
        opened=true;
    }
}

function handleScroll() {
  if (container.scrollTop > 20) {
    if(!created){
        fixed_nav = navbar.cloneNode(true);
        fixed_nav.style.position = 'fixed';
        fixed_nav.classList.add("navbar_slide_in_class");
        navbar_container.appendChild(fixed_nav);
        created=true;
        
        const burgers = document.getElementsByClassName("burger_menu");
        for(let i = 0; i<burgers.length;i++){
            burgers[i].addEventListener('click',burger_onclick);
        }
        
    }
  }else {
    fixed_nav.remove();
    created=false;
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
    burger_onclick();
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
      section.scrollIntoView();
    }
}

