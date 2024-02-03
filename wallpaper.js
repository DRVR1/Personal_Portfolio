//vanta.js background
var vanta_background = null;

function initializeVanta() {
  vanta_background = VANTA.NET({
  el: ".hero",
  backgroundAlpha: 0,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x0,
  points: 6.00,
  maxDistance: 16.00,
  spacing: 18.00
  })
}
initializeVanta();

var vanta_enabled = true;
var vanta_eye = document.querySelector("#vanta_eye");

function toggleVanta(){
    console.log("vanta toggled");
    if (vanta_enabled){
        vanta_eye.classList.add("bi-eye-slash-fill");
        vanta_eye.classList.remove("bi-eye-fill");
        vanta_background.destroy();
        vanta_enabled = false;
    }else{
        vanta_eye.classList.remove("bi-eye-slash-fill");
        vanta_eye.classList.add("bi-eye-fill");
        initializeVanta();
        vanta_enabled=true;
    }
}
