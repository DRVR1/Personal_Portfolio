const project_box = document.getElementById("hover_test");
const height = project_box.clientHeight;
const width = project_box.clientWidth;

function move(event){
    const {layerx, layery} = event;
}

project_box.addEventListener('mousemove',move);