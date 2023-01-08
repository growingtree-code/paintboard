const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth=2;
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];

function onClick(event) {
    console.log('onClick func excute',event);
    ctx.moveTo(0,0);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
}

function mousemove(event) {
    console.log('mousemove',event);
    ctx.beginPath();
    ctx.moveTo(Math.random()*800,Math.random()*800);
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle= color;
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove",mousemove);
