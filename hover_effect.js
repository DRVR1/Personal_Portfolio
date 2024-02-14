let enabled = true;
let mobile = false;

const mediaQuery = window.matchMedia("(max-width: 967px)");

mediaQuery.addListener((event) => {
  if (event.matches) {
      mobile =true;
  } else {
    mobile=false;
  }
});

//for reloads
if (document.body.clientWidth < 967) {
   mobile=true;
}

function move(event){
    if(enabled && !mobile){
        const height = event.target.clientHeight;
        const width = event.target.clientWidth;
        const {layerX, layerY} = event;
        const yRotation = -1*((layerX - width / 2) / width * 20);
        const xRotation = (layerY - height / 2) / height * 20;
        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
        `;
        event.target.style.transform = string;
    }
}


function out(event){
    event.target.style.transform = `
    scale(1)
    rotateX(0deg)
    rotateY(0deg)
    `
    enabled=true;
}
/*

function disable(event){
    enabled=false;
    event.target.style.transform = `
    scale(1)
    rotateX(0deg)
    rotateY(0deg)
    `
}
*/
function goto(event){
    if(event.target.classList.contains('instagrow')){
        window.open("https://www.github.com/DRVR1/InstaGrow", "_blank");
    }
    if(event.target.classList.contains('filecrypt')){
        window.open('https://www.github.com/DRVR1/FileCrypt', "_blank");
    }
    if(event.target.classList.contains('csgoadmin2')){
        window.open('https://www.github.com/DRVR1/Csgo_Admin_2', "_blank");
    }
}

const hover_elements = document.getElementsByClassName("hover_animation");
for(let i = 0; i<hover_elements.length;i++){
    hover_elements[i].addEventListener('mousemove',move);

    hover_elements[i].addEventListener('click',goto);

    hover_elements[i].addEventListener('mouseleave',out);
}
