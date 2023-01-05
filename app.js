const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50,50);//브러쉬 시작위치
ctx.lineTo(150,50);//도착할 좌표위치 결록적으로 100 길이에 사각형이그려짐
ctx.moveTo(150,50);//브러쉬 시작위치
ctx.lineTo(150,150);
ctx.stroke();