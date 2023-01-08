const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;
function callMoveto(event) {
    if (isPainting){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX,event.offsetY);
}
function drawstart(event) {
    isPainting = true;
}
function drawend(event) {
    isPainting = false;
}

canvas.addEventListener("mousemove",callMoveto);
canvas.addEventListener("mousedown",drawstart);
canvas.addEventListener("mouseup",drawend);