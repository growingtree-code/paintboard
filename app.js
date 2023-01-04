const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

ctx.rect(50,50,100,100);//x,y = start point w,h = width,height
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill();

ctx.beginPath();//기존에 그린 것과 경로를 끊고 새로시작
ctx.rect(350,350,100,100);
ctx.fillStyle = 'red';
setTimeout(
    ()=>{ctx.fill();},
    3000);