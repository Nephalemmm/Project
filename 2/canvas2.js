var canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random()-0.5) * 10;
var dy = (Math.random()-0.5) * 10;  
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth, innerHeight);  

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fillStyle = "gold";
  c.strokeStyle = "green";
  c.fill();
  c.stroke();
  
  if(x+radius > innerWidth || x-radius < 0){
      dx = -dx;
  }
  
  if(y+radius > innerHeight || y-radius < 0){
    dy = -dy;
}
  x+=dx;
  y+=dy

}
animate();