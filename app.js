const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200,200,50,200);
ctx.fillRect(400,200,50,200);
ctx.lineWidth= 10;//스타일적용후에 적용된 스타일로 그림을 그려야 화면에 보임
ctx.strokeRect(300,295,50,100);
