let enabled = true;

function move(event){
    if(enabled){
        const height = event.target.clientHeight;
        const width = event.target.clientWidth;
        const {layerX, layerY} = event;
        const yRotation = (layerX - width / 2) / width * 20;
        const xRotation = (layerY - height / 2) / height * 20;
        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
        `;
        console.log(event.target);
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

function disable(event){
    enabled=false;
    event.target.style.transform = `
    scale(1)
    rotateX(0deg)
    rotateY(0deg)
    `
}

const hover_elements = document.getElementsByClassName("hover_animation");
for(let i = 0; i<hover_elements.length;i++){
    hover_elements[i].addEventListener('mousemove',move);
    hover_elements[i].addEventListener('click',disable);
    hover_elements[i].addEventListener('mouseleave',out);
}
