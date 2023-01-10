const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
function callMoveto(event) {
    if (isPainting){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX,event.offsetY);
}
function startPainting(event) {
    isPainting = true;
}
function cancelPainting(event) {
    isPainting = false;
}
function onLineWidthChange(event) {
    console.log(event.target.value);
    ctx.beginPath();
    // ctx.lineWidth = lineWidth.value;
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove",callMoveto);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);

lineWidth.addEventListener("change",onLineWidthChange)