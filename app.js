const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200,200,15,100);
ctx.fillRect(400,200,15,100);
ctx.fillRect(260,200,100,150);


ctx.arc(310,140,50,0,2*Math.PI);
ctx.fill();

ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(290,130,10,Math.PI,2*Math.PI);
ctx.arc(330,130,10,Math.PI,2*Math.PI);
ctx.fill();


