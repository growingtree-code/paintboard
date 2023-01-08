const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200,200,50,200);
ctx.fillRect(400,200,50,200);
ctx.strokeRect(300,300,50,100);